/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-28-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, track } from 'lwc';

export default class LwcParentPrimNonPrim extends LightningElement {
    primitiveString = 'This is Wednesday night';

    @track
    contactRec = {
        firstName : 'Deepak',
        lastName : 'Pal'
    }

    handleTextChange(event) {
        this.primitiveString = event.detail.value;
    }
}