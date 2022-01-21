/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-15-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import LEAD_SOURCE_FIELD from '@salesforce/schema/Contact.LeadSource';
import PHONE_FIELD from '@salesforce/schema/Contact.Phone';
import BIRTHDATE_FIELD from '@salesforce/schema/Contact.Birthdate';
import MAILING_ADDRESS from '@salesforce/schema/Contact.MailingAddress';

export default class LdsRecordForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = [NAME_FIELD, LEAD_SOURCE_FIELD, PHONE_FIELD, BIRTHDATE_FIELD, MAILING_ADDRESS];
}