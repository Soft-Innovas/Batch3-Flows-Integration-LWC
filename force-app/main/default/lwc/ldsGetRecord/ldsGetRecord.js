/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-20-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api , wire } from 'lwc';
import { getRecord, getFieldValue , getFieldDisplayValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_ANNUAL_REVENUE from '@salesforce/schema/Account.AnnualRevenue';

export default class LdsGetRecord extends LightningElement {
    @api recordId;

    FIELDS = [ACCOUNT_NAME, ACCOUNT_ANNUAL_REVENUE];

    @wire(getRecord, { recordId: '$recordId', fields: '$FIELDS' })
    account;

    // @wire(getRecord, { recordId: '$recordId', fields: '$FIELDS' })
    // getAccount({ data, error }) {
    //     if (data) {
    //         this.account = data
    //     }
    // }

    get accountName() {
        return getFieldValue(this.account.data, ACCOUNT_NAME);
    }

    get annualRevenueValue() {
        return getFieldValue(this.account.data, ACCOUNT_ANNUAL_REVENUE);
    }

    get annualRevenueDisplayValue() {
        return getFieldDisplayValue(this.account.data, ACCOUNT_ANNUAL_REVENUE);
    }
}