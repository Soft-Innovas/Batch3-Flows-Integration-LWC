/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-23-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LoginRegistration extends LightningElement {
    showCompanyScreen = true;
    showCustomerScreen = false;
    showLoginUserScreen = false;

    companyInformationId;
    customerId;
    loginUserId;

    handleCompanyInformation() {
        this.showCompanyScreen = true;
        this.showCustomerScreen = false;
        this.showLoginUserScreen = false;
    }

    handleCustomerScreen(event) {
        this.companyInformationId = event.detail;
        this.showCompanyScreen = false;
        this.showCustomerScreen = true;
        this.showLoginUserScreen = false;
    }

    handleLoginUserRegistration(event) {
        this.showCompanyScreen = false;
        this.showCustomerScreen = false;
        this.showLoginUserScreen = true;
    }

    get companyInformationClass(){
        return this.showCompanyScreen ? 'slds-show' : 'slds-hide';
    }

    get customerRegistrationClass(){
        return this.showCustomerScreen ? 'slds-show' : 'slds-hide';
    }

    get loginUserRegistrationClass(){
        return this.showLoginUserScreen ? 'slds-show' : 'slds-hide';
    }
}