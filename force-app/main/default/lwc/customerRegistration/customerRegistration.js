/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-23-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement , api } from 'lwc';  
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import CUSTOMER_OBJECT from '@salesforce/schema/Customer__c';
import NAME_FIELD from '@salesforce/schema/Customer__c.Name';
import TITLE_FIELD from '@salesforce/schema/Customer__c.Title__c';
import PHONE_FIELD from '@salesforce/schema/Customer__c.Phone__c';
import GENDER_FIELD from '@salesforce/schema/Customer__c.Gender__c';
import COMPANY_INFORMATION_FIELD from '@salesforce/schema/Customer__c.Company_Information__c';
import STREET_FIELD from '@salesforce/schema/Customer__c.Street__c';
import STATE_FIELD from '@salesforce/schema/Customer__c.State__c';
import COUNTRY_FIELD from '@salesforce/schema/Customer__c.Country__c';
import BIRTHDATE_FIELD from '@salesforce/schema/Customer__c.Birthdate__c';
import EMAIL_FIELD from '@salesforce/schema/Customer__c.Email__c';
import SSN_FIELD from '@salesforce/schema/Customer__c.SSN__c';
import DEPARTMENT_FIELD from '@salesforce/schema/Customer__c.Department__c';
import CITY_FIELD from '@salesforce/schema/Customer__c.City__c';
import ZIP_CODE_FIELD from '@salesforce/schema/Customer__c.Zip_Code__c';


export default class CustomerRegistration extends LightningElement {
    @api companyInformationId;
    name = NAME_FIELD;
    title = TITLE_FIELD;
    phone = PHONE_FIELD;
    gender = GENDER_FIELD;
    companyInformation = COMPANY_INFORMATION_FIELD;
    street = STREET_FIELD;
    state = STATE_FIELD;
    country = COUNTRY_FIELD;
    birthdate = BIRTHDATE_FIELD;
    email = EMAIL_FIELD;
    ssn = SSN_FIELD;
    department = DEPARTMENT_FIELD;
    city = CITY_FIELD;
    zipCode = ZIP_CODE_FIELD;
    objectApiName = CUSTOMER_OBJECT;
    recordId;

    showSpinner = false;
    showNext = false;

    handleSubmit() {
        this.showSpinner = true;
        alert('Creating record please wait');
    }

    handleSuccess() {
        this.showSpinner = false;
        this.showNotification('SUCCESS', 'Customer created successfully', 'success');
        this.showNext = true;
    }

    handleError() {
        this.showSpinner = false;
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
        let companyScreenEvt = new CustomEvent('previousscreen');
        this.dispatchEvent(companyScreenEvt);
    }

    handleNext() {
        let loginUserScreenEvt = new CustomEvent('nextscreen');
        this.dispatchEvent(loginUserScreenEvt);
    }
}