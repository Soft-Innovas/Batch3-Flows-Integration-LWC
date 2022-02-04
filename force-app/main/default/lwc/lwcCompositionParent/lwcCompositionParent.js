/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-23-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcCompositionParent extends LightningElement {
    
    handleOnclick(event) {
        debugger;
        console.log('QuerySelector: ', this.template.querySelectorAll('.greenBackground'));
    }
}