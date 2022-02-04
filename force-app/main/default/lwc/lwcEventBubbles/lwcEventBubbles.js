/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-29-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcEventBubbles extends LightningElement {
    stringValueFromChild;
    connectedCallback() {
        pubsub.register('btnclick', this.handleClick.bind(this));
    }
    //123.handleClick, 456.handleclick
    handleClick(event) {
        this.stringValueFromChild = event.detail;
        console.log('invoked');
    }
}