/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-27-2021
 * @last modified by  : Deepak Pal
**/
import { api, LightningElement, track } from 'lwc';

export default class LwcChildPrimNonPrim extends LightningElement {

    /*
        Keep the usage of @api and @track different
        Use @api only to catch values from parent components and dont use it if you are expecting 
           the property to change like @track
        Use @track only to make dynamic changes in html
        DO NOT create properties which you would like to have as reactive(@track) 
            and public(@api) at the same time
    */


    @api
    publicProperty; //This doesnt have a default
    
    @api
    publicPropertyObject; //This doesnt have a default

    showPublicProperty = false;
    showPublicPropertyObject = false;

    @track listAccount = [];

    connectedCallback() {
        if (this.publicPropertyObject) {
            this.showPublicPropertyObject = true;
            console.log('36 public property Object: ', JSON.parse(JSON.stringify(this.publicPropertyObject)));
        }
        if (this.publicProperty) {
            this.showPublicProperty = true;
            console.log('40 public property: ', this.publicProperty);
        }
    }
}