/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-06-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api } from 'lwc';

export default class LwcChild extends LightningElement {
    @api messageInChild = 'This message is of Child component';

    @api handleParentCall(message) {
        console.log('Received from Parent component: ', message);
    }
}