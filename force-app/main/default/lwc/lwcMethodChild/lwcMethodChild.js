/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-28-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api } from 'lwc';

export default class LwcMethodChild extends LightningElement {
    methodChangedString = 'This is default in child component';

    @api changeTheString(newStrValue) {
        this.methodChangedString = newStrValue;
    }
}