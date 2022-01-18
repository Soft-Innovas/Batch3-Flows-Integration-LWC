/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-21-2021
 * @last modified by  : Deepak Pal
**/
import { api, LightningElement } from 'lwc';
import upsertContactApex from '@salesforce/apex/ContactControllerImperative.upsertContact';

export default class CreateContact extends LightningElement {
    firstName;
    lastName;

    @api
    recordId;

    handleFirstNameChange(event) {
        this.firstName = event.detail.value;
    }

    handleLastNameChange(event) {
        this.lastName = event.detail.value;
    }

    upsertContact(event) {
        console.log(this.recordId);
        upsertContactApex({
            firstName: this.firstName,
            lastName: this.lastName,
            recordId: this.recordId
        })
            .then(result => {
                console.log(JSON.stringify(result));
                alert('Contact created with Id: ' + result.Id);
            })
            .catch(error => {
                console.log('error: ', error);
            });
    }
}