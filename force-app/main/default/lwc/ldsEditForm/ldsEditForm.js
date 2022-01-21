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

export default class LdsEditForm extends LightningElement {
    @api recordId;
    @api objectApiName;

    nameField = NAME_FIELD;
    phoneField = PHONE_FIELD;
    leadSourceField = LEAD_SOURCE_FIELD;
    birthdateField = BIRTHDATE_FIELD;
    mailingAddress = MAILING_ADDRESS;

    handleSubmit() {
        alert('The record is about to submitted');
    }

    handleSuccess() {
        alert('LDS the record has been created');
    }

}