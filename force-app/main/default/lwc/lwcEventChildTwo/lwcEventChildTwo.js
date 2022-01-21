/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-09-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcEventChildTwo extends LightningElement {
    handleSendChildTwoDataClick(event) {
        let divElement = this.template.querySelector("div[data-id=buttonDiv]");
        divElement.dispatchEvent(new CustomEvent(
            'senddata', {bubbles:true, composed:false}
        ));
    }

    handleSendChildTwoData1(event) {
        console.log('Inside handleSendChildTwoData1');
    }

    handleSendChildTwoData2(event) {
        console.log('Inside handleSendChildTwoData2');
    }

    handleSendChildTwoData3(event) {
        console.log('Inside handleSendChildTwoData3');
    }
}