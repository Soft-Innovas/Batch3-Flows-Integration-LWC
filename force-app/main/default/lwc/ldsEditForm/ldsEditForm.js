/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-04-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import SOURCE_FIELD from '@salesforce/schema/Lead.LeadSource';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';


export default class LdsEditForm extends LightningElement {
    @api recordId;
    @api objectApiName = "Lead";
    
    nameField = NAME_FIELD;
    emailField = EMAIL_FIELD;
    sourceField = SOURCE_FIELD;
    companyField = COMPANY_FIELD;

    handleSubmit(event) {
        const recordDetail = event.detail.fields;
        
        console.log(JSON.stringify(recordDetail));
        
        // recordDetail.LeadSource = 'Other';
        // this.template.querySelector('lightning-record-edit-form').submit(recordDetail);
    }

    handleSuccess(event) {
        const eventData = {
            success: true
        };
        let newCustomEvent = new CustomEvent('recordsave', { detail: eventData });
        this.dispatchEvent(newCustomEvent);
    }
}