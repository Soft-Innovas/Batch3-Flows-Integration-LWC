/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-29-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement , wire } from 'lwc';
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import userId from '@salesforce/user/Id';

export default class SampleMessageSubscriberWeb extends LightningElement {
    @wire(MessageContext)
    messageContext;

    subscription = null;
    payload = '';

    connectedCallback() {
        this.handleSubscribe();
        console.log(userId);
    }
    
    handleSubscribe() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                SAMPLEMC,
                payload => {
                    this.handleMessage(payload)
                },
                {scope: APPLICATION_SCOPE}
            );
        }
    }

    handleMessage(payload) {
        this.payload = JSON.stringify(payload);
    }

    handleUnsubscribe() {
        if (this.subscription) {
            unsubscribe(this.subscription);
            this.subscription = null;
            this.payload = '';
        }
    }
}