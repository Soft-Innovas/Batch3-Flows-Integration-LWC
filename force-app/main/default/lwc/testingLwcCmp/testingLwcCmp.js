/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-09-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class TestingLwcCmp extends LightningElement {
    handleSendData(){
        console.log('Am in parent component');        
    }
}