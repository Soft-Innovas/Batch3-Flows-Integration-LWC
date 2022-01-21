/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-20-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire , api } from 'lwc';
import { getRecord , getFieldValue } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';

export default class LdsWireRecord extends LightningElement {
    @api recordId='';
    @api objectApiName = '';
    fields = [ACCOUNT_NAME];

    @wire(getRecord, {recordId: '$recordId', fields: '$fields'})
    getRecordInfo({ error, data }) {
        if (data) {
            console.log('Data from get record: ' + JSON.stringify(data));
            this.accountData = data;
        } else if (error) {
            console.log('Error from get record: ' + JSON.stringify(error));
        }
    }

    get accountName() {
        return getFieldValue(this.accountData);
    }
}