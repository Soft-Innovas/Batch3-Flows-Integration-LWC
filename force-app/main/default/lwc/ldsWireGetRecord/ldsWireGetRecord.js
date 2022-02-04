/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-07-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api, wire, track } from 'lwc';
import { getFieldValue, getRecord , getFieldDisplayValue } from 'lightning/uiRecordApi';
import MOBILE_FIELD from '@salesforce/schema/Contact.MobilePhone';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import EMAIL_FIELD from '@salesforce/schema/Contact.Email';
import DEP_FIELD from '@salesforce/schema/Contact.Department';
import ACC_ID_FIELD from '@salesforce/schema/Contact.AccountId';
import ANN_REV_FIELD from '@salesforce/schema/Account.AnnualRevenue';

export default class LdsWireGetRecord extends LightningElement {
    @api recordId;
    name;
    accountId;
    // email;
    // mobile;
    @track contact;
    @track account;

    FIELDS = [NAME_FIELD, MOBILE_FIELD, EMAIL_FIELD, DEP_FIELD, ACC_ID_FIELD];

    ACC_FIELDS = [ANN_REV_FIELD];

    @wire(getRecord, { recordId: '$recordId', fields: '$FIELDS'})
    getRecordInfo({ error, data }) {
        if (data) {
            console.log('Data from get record: ' + JSON.stringify(data));
            this.contact = data;
            this.name = getFieldValue(this.contact, NAME_FIELD);
            this.accountId = getFieldValue(this.contact, ACC_ID_FIELD);
            // this.email = data.fields.Email.value;
            // this.mobile = data.fields.MobilePhone.value;
        } else if (error) {
            console.log('Error from get record: ' + JSON.stringify(error));
        }
    }

    @wire(getRecord, { recordId: '$accountId', fields: '$ACC_FIELDS'})
    getAccountRecordInfo({ error, data }) {
        if (data) {
            console.log('Data account from get record: ' + JSON.stringify(data));
            this.account = data;
        } else if (error) {
            console.log('Error from get record: ' + JSON.stringify(error));
        }
    }

    // get name() {
    //     return getFieldValue(this.contact, NAME_FIELD);
    // }
    get email() {
        return getFieldValue(this.contact, EMAIL_FIELD);
    }
    get mobile() {
        return getFieldValue(this.contact, MOBILE_FIELD);
    }

    get dept() {
        return getFieldValue(this.contact, DEP_FIELD);
    }

    get annualRevenue() {
        return getFieldDisplayValue(this.account, ANN_REV_FIELD);
        // return getFieldValue(this.account, ANN_REV_FIELD);
    }
}