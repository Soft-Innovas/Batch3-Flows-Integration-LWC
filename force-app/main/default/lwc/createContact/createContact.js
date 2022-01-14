/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-09-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import createContact from '@salesforce/apex/CreateContactController.createContact';

export default class CreateContact extends LightningElement {
    firstName;
    lastName;
    phone;

    handleFirstNameChange(event) {
        this.firstName = event.detail.value;
        console.log('Entered firstname: ', this.firstName);
    }

    handleLastNameChange(event) {
        this.lastName = event.detail.value;
        console.log('Entered lastName: ', this.lastName);
    }

    handlePhoneChange(event) {
        this.phone = event.detail.value;
        console.log('Entered phone: ', this.phone);
    }

    handleCreateContact() {
        const allValid = [
            ...this.template.querySelectorAll('lightning-input'),
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        if (allValid) {
            createContact({
                firstName: this.firstName,
                lastName: this.lastName,
                phone: this.phone
            })
                .then(result => {
                    console.log(result);
                    alert('Contact created with Id: '+result);
                })
                .catch(error => { 
                    console.log(error);
                    alert('Error occurred: '+ error);
                })
        } 
        
    }
}