/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-17-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, track, wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';


export default class LwcIfFor extends LightningElement {
    showTrueSection = false;

    @wire(getContacts) contacts;

    @track accounts = [
        {
            'AccountId': '1',
            'Name': 'Google',
            'Location':'California'
        },
        {
            'AccountId': '2',
            'Name': 'Facebook',
            'Location':'Palo Alto'
        },
        {
            'AccountId': '3',
            'Name': 'Microsoft',
            'Location':'San Fransisco'
        }
    ];

    setSectionStatus(event) {
        console.log('Checkbox value: ', event.target.value);
        this.showTrueSection = event.target.checked;
    }
}