/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-17-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, track } from 'lwc';

export default class BindingExample extends LightningElement {
    greetings;
    @track contact = { 'FirstName': 'Deepak' };

    handleInputChange(event) {
        console.log('event value: ', event.target.value);
        this.contact.FirstName = event.target.value;
        //FirstName is second level; contact is @track but not FirstName
    }
}