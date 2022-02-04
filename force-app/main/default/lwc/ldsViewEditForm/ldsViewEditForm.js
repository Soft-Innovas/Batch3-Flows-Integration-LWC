/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-04-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement , api } from 'lwc';

export default class LdsViewEditForm extends LightningElement {
    @api recordId;
    @api objectApiName;
    showViewPage = true;

    handleEdit(event) {
        this.showViewPage = false;
    }

    handleView(event) {
        console.log(event.detail.success);
        this.showViewPage = true;
    }
}