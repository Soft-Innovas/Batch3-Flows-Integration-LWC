/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-26-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import pubsub from 'c/pbjs' ; 

export default class ChildTwoPbsb extends LightningElement {
    message;
    connectedCallback(){
        this.regiser();
    }
    regiser(){
        window.console.log('event registered ');
        pubsub.register('simplevt', this.handleEvent.bind(this));
    }
    handleEvent(messageFromEvt){
        window.console.log('event handled ',messageFromEvt);
        this.message = messageFromEvt ? JSON.stringify(messageFromEvt, null, '\t') : 'no message payload';
    }
}