/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-04-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement , wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class LwcWire extends LightningElement {
    @wire(getAccounts)
    accounts;
    //accounts.data => success in calling Apex; error = null
    //accounts.error => failure in calling apex; data = null
}