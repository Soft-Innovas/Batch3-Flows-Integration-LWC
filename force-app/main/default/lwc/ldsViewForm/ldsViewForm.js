/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-15-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement ,api } from 'lwc';

export default class LdsViewForm extends LightningElement {
    @api recordId;
    @api objectApiName;
}