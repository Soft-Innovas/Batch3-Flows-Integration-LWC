/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-20-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';
import getAccountsByKeyword from '@salesforce/apex/AccountController.getAccountsByKeyword';

export default class LwcWireMethod extends LightningElement {
    @track
    accounts;

    @track
    error = {};

    @track
    errorMessage = '';
    
    @track
    searchTerm = '';

    @track
    enteredKeyword = '';

    @wire(getAccounts)
    accountsFetch({ error, data }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            console.log(error);
            this.accounts = undefined;
            this.error = error;
            this.errorMessage = error.body.message;
        }
    }

    handleKeywordChange(event) {
        this.searchTerm = event.detail.value; //
    }

    // handleAccountSearch(event) {
    //     this.searchTerm = this.enteredKeyword;
    // }
    
    @wire(getAccountsByKeyword, { searchTerm: '$searchTerm' })
    accountsFetchKeyword({ error, data }) {
        if (data) {
            this.accounts = data;
            this.error = undefined;
        } else if (error) {
            this.accounts = undefined;
            this.error = error;
            this.errorMessage = error.body.message;
        }
    }
}