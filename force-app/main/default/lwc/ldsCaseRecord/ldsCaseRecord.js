/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-16-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api } from 'lwc';
import CASE_OBJECT from '@salesforce/schema/Case';
import SUBJECT_FIELD from '@salesforce/schema/Case.Subject';
import ACCOUNT_FIELD from '@salesforce/schema/Case.AccountId';
import DESCRIPTION_FIELD from '@salesforce/schema/Case.Description';

export default class LdsCaseRecord extends LightningElement {
    @api recordId;
    @api objectApiName = CASE_OBJECT;

    cardTitle = "Create case";
    subjectField = SUBJECT_FIELD;
    accountField = ACCOUNT_FIELD;
    descriptionField = DESCRIPTION_FIELD;

    showSpinner = false;
    showEditForm = true;//loads Edit form with create mode

    handleSuccess(event) {
        this.recordId = event.detail.id;
        this.showSpinner = false;
        this.showEditForm = false; //loads View form
        this.cardTitle = "Case View";
    }

    handleSubmit(event) {
        this.showSpinner = true;
    }

    handleEdit() {
        this.showEditForm = true; //loads Edit form with edit mode
        this.cardTitle = "Case Edit";
    }

    handleCancel() {
        this.showEditForm = false; //loads View form
        this.cardTitle = "Case View";
    }
}