/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-05-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api, wire, track } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Lead.Name';
import EMAIL_FIELD from '@salesforce/schema/Lead.Email';
import SOURCE_FIELD from '@salesforce/schema/Lead.LeadSource';
import COMPANY_FIELD from '@salesforce/schema/Lead.Company';

export default class LdsForm extends LightningElement {
    @api recordId;
    @api objectApiName = 'Lead';
    
    layoutType = 'Full';
    fields = [NAME_FIELD, EMAIL_FIELD, SOURCE_FIELD, COMPANY_FIELD];
    @track objectInfo;

    connectedCallback() {
        
    }
}