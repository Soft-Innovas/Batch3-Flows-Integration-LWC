/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-29-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import pubsub from 'c/pubSubHost';


export default class LwcEventBubblesChild extends LightningElement {
    msgFromChild = 'This is default Message';
    constructor() {
        super();
        this.template.addEventListener('btnclick', this.handleEvent.bind(this));
    }

    handleClick(event) { //123
        let eventRec = new CustomEvent('btnclick', {
            bubbles: true,
            composed: true,
            detail: 'This is event message'
        });
        let parentDiv = this.template.querySelector('div');
        parentDiv.dispatchEvent(eventRec);

        let eventData = {
            detail: 'This is pub sub data event'
        };

    }

    handleEvent(event) {
        this.msgFromChild = event.detail;
    }
    
}