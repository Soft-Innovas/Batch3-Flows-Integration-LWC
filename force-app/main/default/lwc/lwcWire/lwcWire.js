/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-20-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire, track } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts';
import getContactsByKeyword from '@salesforce/apex/ContactController.getContactsByKeyword';

export default class LwcWire extends LightningElement {
    //This is property
    @wire(getContacts) contacts;
    
    
    //@wire(getContactsByKeyword, { keyword: '$keyword' })
    //contacts;

    @track
    contacts;

    @track
    error;

    searchTerm = '';
    keyword = '';

    handleInputChange(event) {
        this.searchTerm = event.target.value;
    }

    handleClick(event) {
        this.keyword = this.searchTerm;
    }
}