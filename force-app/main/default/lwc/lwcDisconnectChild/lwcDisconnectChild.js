/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-23-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcDisconnectChild extends LightningElement {
    disconnectedCallback() {
        console.log('This is disconnected in Child component');
    }
}