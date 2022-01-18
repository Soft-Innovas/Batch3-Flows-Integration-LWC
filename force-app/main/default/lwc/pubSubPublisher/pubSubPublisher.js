/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-29-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import pubsub from 'c/pubSubHost';

export default class PubSubPublisher extends LightningElement {
    handleClick(event) {
        let eventData = {
            detail: 'Avengers EndGame added to collection'
        }
        pubsub.fire('clickevent', eventData);
    }
}