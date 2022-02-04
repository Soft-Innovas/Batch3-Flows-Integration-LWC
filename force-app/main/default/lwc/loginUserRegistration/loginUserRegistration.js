/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-23-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import LOGIN_USER_OBJECT from '@salesforce/schema/Login_User__c';

export default class LoginUserRegistration extends LightningElement {
    objectApiName = LOGIN_USER_OBJECT;
    recordId;

    handleSubmit(event) {
        alert('Submitting record');
    }

    handleSuccess(event) {
        this.recordId = event.detail.id;
        this.showNotification(
            "SUCCESS",
            "Login User Created",
            "success"
        );
    }

    handleError(event) {
        alert('Error occurred');
    }

    showNotification(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message, 
            variant: variant
        });
        this.dispatchEvent(evt);
    }

    handlePrevious() {
        let customerEvt = new CustomEvent('previousscreen');
        this.dispatchEvent(customerEvt);
    }
}