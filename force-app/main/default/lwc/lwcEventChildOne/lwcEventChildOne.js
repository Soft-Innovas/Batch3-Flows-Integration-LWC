/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-09-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcEventChildOne extends LightningElement {
    handleSendChildOneDataClick(event) {
        let divElement = this.template.querySelector("div[data-id=buttonDiv]");
        divElement.dispatchEvent(new CustomEvent(
            'senddata', {bubbles:true, composed:true}
        ));
    }

    handleSendChildOneData1(event) {
        console.log('Inside handleSendChildOneData1');
    }

    handleSendChildOneData2(event) {
        console.log('Inside handleSendChildOneData2');
    }

    handleSendChildOneData3(event) {
        console.log('Inside handleSendChildOneData3');
    }
}