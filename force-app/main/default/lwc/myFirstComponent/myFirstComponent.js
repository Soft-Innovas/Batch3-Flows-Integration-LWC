/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-31-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement , track } from 'lwc';

export default class MyFirstComponent extends LightningElement {
    userName = 'Elvira.Koran.1@email.com';
    @track contact = {
        "FirstName": "Baburbek",
        "LastName": "Chovdurov"
    };
}