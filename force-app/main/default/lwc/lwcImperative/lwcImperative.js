/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-05-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import getAccountByKeyword from '@salesforce/apex/AccountController.getAccountByKeyword';

export default class LwcImperative extends LightningElement {
    accounts;
    error;

    keywordJS = '';

    handleSearchKeyword(event) {
        this.keywordJS = event.detail.value;
        console.log('label: ', event.detail.label);
        console.log('keyword: ', this.keywordJS);
    }

    handleGetAccountsByKeyword() {
        getAccountByKeyword({ keyword: this.keywordJS })
            .then((result) => {
                this.accounts = result;
                this.error = null;
            })
            .catch((error) => { 
                this.accounts = null;
                this.error = JSON.stringify(error);
            })
    
        console.log('Hi there');
    }

    
}