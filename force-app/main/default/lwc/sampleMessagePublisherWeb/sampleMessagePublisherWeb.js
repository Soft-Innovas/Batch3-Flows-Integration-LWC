/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-31-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';

export default class SampleMessagePublisherWeb extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handlePublish(event) {
        const payload = {
            detail:"This is published inside LWC",
            source:"sampleMessagePublisherWeb"
        };
        publish(this.messageContext, SAMPLEMC, payload);
    }
}