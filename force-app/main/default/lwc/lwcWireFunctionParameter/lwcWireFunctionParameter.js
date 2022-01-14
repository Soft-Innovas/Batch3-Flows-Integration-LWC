/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-04-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire } from 'lwc';
import getAccountByKeyword from '@salesforce/apex/AccountController.getAccountByKeyword';

export default class LwcWireFunctionParameter extends LightningElement {
    accounts;
    error;

    enteredValue = '';
    keywordJS = '';


    @wire(getAccountByKeyword, { keyword: '$keywordJS' })
    accountFetch({ data, error }) {
        if (data) {
            this.accounts = data;
            this.error = null;
        } else if (error) {
            this.accounts = null;
            this.error = JSON.stringify(error);
            console.log('Parsed: ',JSON.parse(JSON.stringify(error)));
            console.log('Direct: ',error);
        }
    }
    
    handleSearchKeyword(event) {
        //enteredValue = 'washington'
        this.enteredValue = event.detail.value;
        console.log('Entered value: ', this.enteredValue);
    }
    
    handleGetAccountsByKeyword() {
        this.keywordJS = this.enteredValue;
    }
}