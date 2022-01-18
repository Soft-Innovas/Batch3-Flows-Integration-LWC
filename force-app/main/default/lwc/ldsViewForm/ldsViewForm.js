/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-04-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api , wire } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import SOURCE_FIELD from '@salesforce/schema/Lead.LeadSource';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';

export default class LdsViewForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    nameField = NAME_FIELD;
    emailField = EMAIL_FIELD;
    sourceField = SOURCE_FIELD;
    companyField = COMPANY_FIELD;

    connectedCallback() {
        console.log(' recordId: ', this.recordId);
        console.log(' objectApiName: ', this.objectApiName);
    }

    renderedCallback() {
        // console.log(JSON.stringify(this.objectInfo.data.keyPrefix));
        // console.log(JSON.stringify(this.objectInfo.data.apiName));
    }
}