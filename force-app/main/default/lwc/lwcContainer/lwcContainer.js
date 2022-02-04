/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-03-2021
 * @last modified by  : Deepak Pal
**/
import { getRecord } from 'lightning/uiRecordApi';
import { LightningElement } from 'lwc';

export default class LwcContainer extends LightningElement {
    selectedRecordId;

    handleClick(event) {
        this.selectedRecordId = event.detail.data[id];
    }
}