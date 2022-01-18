/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-26-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import pubsub from 'c/pbjs' ; 

export default class ChildOnePbsb extends LightningElement {
    handleClick(){
        window.console.log('Event Firing..... ');
        let message = {
            "message" : 'Hello PubSub'
        }
        pubsub.fire('simplevt', message );
        window.console.log('Event Fired ');
    }
}