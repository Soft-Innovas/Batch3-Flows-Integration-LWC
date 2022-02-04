/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-23-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord } from 'lightning/uiRecordApi';
import COMPANY_INFORMATION_OBJECT from '@salesforce/schema/Company_Information__c';
import ACCOUNT_NUMBER_FIELD from '@salesforce/schema/Company_Information__c.Account_Number__c';
import NAME_FIELD from '@salesforce/schema/Company_Information__c.Name';
import NO_OF_EMPLOYEES_FIELD from '@salesforce/schema/Company_Information__c.Number_of_Employees__c';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Company_Information__c.Annual_Revenue__c';
import PHONE_FIELD from '@salesforce/schema/Company_Information__c.Phone__c';
import WEBSITE_FIELD from '@salesforce/schema/Company_Information__c.Website__c';
import SSN_FIELD from '@salesforce/schema/Company_Information__c.SSN__c';
import STREET_FIELD from '@salesforce/schema/Company_Information__c.Street__c';
import CITY_FIELD from '@salesforce/schema/Company_Information__c.City__c';
import STATE_FIELD from '@salesforce/schema/Company_Information__c.State__c';
import ZIP_FIELD from '@salesforce/schema/Company_Information__c.Zip_Code__c';
import COUNTRY_FIELD from '@salesforce/schema/Company_Information__c.Country__c';

export default class CompanyInformationRegistration extends LightningElement {
    companyName;
    accountNumber;
    noOfEmployees;
    annualRevenue;
    phone;
    website;
    ssn;
    street;
    city;
    state;
    zip;
    country;
    recordId;

    showNext = false;
    
    
    handleCompanyNameChange(event) {
        this.companyName = event.detail.value;
    }

    handleAccountNumberChange(event) {
        this.accountNumber = event.detail.value;
    }

    handleNoOfEmployeesChange(event) {
        this.noOfEmployees = event.detail.value;
    }

    handleAnnualRevenueChange(event) {
        this.annualRevenue = event.detail.value;
    }

    handlePhoneChange(event) {
        this.phone = event.detail.value;
    }

    handleWebsiteChange(event) {
        this.website = event.detail.value;
    }

    handleSSNChange(event) {
        this.ssn = event.detail.value;
    }

    handleAddressChange(event) {
        this.street = event.detail.street;
        this.city = event.detail.city;
        this.state = event.detail.province;
        this.zip = event.detail.postalCode;
        this.country = event.detail.country;
    }

    handleCreateCompanyInformation() {
        if (!this.validityCheck()) {
            this.showNotification(
                'ERROR',
                'Please enter missing values or enter values in correct format',
                'error'
            );
            return;
        }

        const fields = {};
        fields[ACCOUNT_NUMBER_FIELD.fieldApiName] = this.accountNumber;
        fields[NAME_FIELD.fieldApiName] = this.companyName;
        fields[NO_OF_EMPLOYEES_FIELD.fieldApiName] = this.noOfEmployees;
        fields[ANNUAL_REVENUE_FIELD.fieldApiName] = this.annualRevenue;
        fields[PHONE_FIELD.fieldApiName] = this.phone;
        fields[WEBSITE_FIELD.fieldApiName] = this.website;
        fields[SSN_FIELD.fieldApiName] = this.ssn;
        fields[STREET_FIELD.fieldApiName] = this.street;
        fields[CITY_FIELD.fieldApiName] = this.city;
        fields[STATE_FIELD.fieldApiName] = this.state;
        fields[ZIP_FIELD.fieldApiName] = this.zip;
        fields[COUNTRY_FIELD.fieldApiName] = this.country;

        const companyInformation = { apiName: COMPANY_INFORMATION_OBJECT.objectApiName, fields };

        createRecord(companyInformation)
            .then(result => {
                this.showNotification(
                    "SUCCESS",
                    "Company Information created successfully",
                    "success"
                );
                this.showNext = true;
                alert('Id: ' + result.id);
                this.recordId = result.id;
            })
            .catch(error => {
                debugger;
                this.showNotification(
                    "ERROR",
                    "Company Information creation failed: "+error.body.message,
                    "error"
                );
            })
    }

    validityCheck() {
        const allValid = [
            ...this.template.querySelectorAll('lightning-input,lightning-input-address'),
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        return allValid;
    }

    showNotification(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message, 
            variant: variant
        });
        this.dispatchEvent(evt);
    }

    handleNextScreen() {
        let nextScreenEvt = new CustomEvent('nextscreen', {detail: this.recordId});
        this.dispatchEvent(nextScreenEvt);
    }
}