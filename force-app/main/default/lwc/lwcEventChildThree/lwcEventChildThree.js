/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-09-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcEventChildThree extends LightningElement {
    handleSendChildThreeDataClick(event) {
        let divElement = this.template.querySelector("div[data-id=buttonDiv]");
        divElement.dispatchEvent(new CustomEvent(
            'senddata', {bubbles:false}
        ));
    }

    handleSendChildThreeData1(event) {
        console.log('Inside handleSendChildThreeData1');
    }

    handleSendChildThreeData2(event) {
        console.log('Inside handleSendChildThreeData2');
    }

    handleSendChildThreeData3(event) {
        console.log('Inside handleSendChildThreeData3');
    }
}