/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-11-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement , api } from 'lwc';

export default class RichTextEditor extends LightningElement {
    @api fieldLevelHelp;
    @api required;
    @api label;
    @api richTextVal;

    handleRichTextChange(event) {
        this.richTextVal = event.detail.value;
    }
}