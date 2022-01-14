/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-08-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement , wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class LwcWireFunction extends LightningElement {
    accounts;
    error;
    @wire(getAccounts)
    accountFetch({ data, error }) {
        //data => success in calling Apex; error = null
        //error => failure in calling apex; data = null
        if (data) {
            //show alert
            //write logs
            this.accounts = data;
            this.error = null;
        } else if (error) {
            this.accounts = null;
            this.error = JSON.stringify(error);
            console.log(error);
        }
    }
}