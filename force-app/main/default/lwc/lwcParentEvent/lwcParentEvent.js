/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-24-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcParentEvent extends LightningElement {
    firstName = '';
    lastName = '';
    email = '';
    handleChildButtonClick(event) {
        console.log('Child event was caught in parent component');
        this.firstName = event.detail.firstName;
        this.lastName = event.detail.lastName;
        this.email = event.detail.email;
    }
}