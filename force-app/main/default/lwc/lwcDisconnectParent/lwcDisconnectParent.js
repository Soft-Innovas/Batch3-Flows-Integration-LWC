/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-23-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcDisconnectParent extends LightningElement {
    showChild = true;
    toggleChild(event) {
        if (this.showChild) {
            this.showChild = false;
        } else {
            this.showChild = true;
        }
        //this.showChild = this.showChild ? false : true;
    }
    disconnectedCallback() {
        console.log('This is inside parent for disconnect');
    }
}