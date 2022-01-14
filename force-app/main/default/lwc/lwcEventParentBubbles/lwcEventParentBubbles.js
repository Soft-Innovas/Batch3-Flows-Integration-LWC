/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-09-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcEventParentBubbles extends LightningElement {
    handleSendDataParent1(event) {
        console.log('Inside handleSendDataParent1');
    }

    handleSendDataParent2(event) {
        console.log('Inside handleSendDataParent2');
    }
}