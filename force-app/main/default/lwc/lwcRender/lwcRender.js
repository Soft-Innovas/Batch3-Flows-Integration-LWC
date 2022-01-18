/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-23-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';

export default class LwcRender extends LightningElement {
    
    templateOneHtml = true;

    render() {
        return this.templateOneHtml ? templateOne : templateTwo;
    }

    switchTemplate() {
        this.templateOneHtml = this.templateOneHtml===true ? false : true;
    }
}