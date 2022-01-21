/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-06-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcParent extends LightningElement {
    handleClick() {
        let pTagElementClass = this.template.querySelector(".greencolor");
        let outerTextClass = pTagElementClass.outerText;
        console.log('Query: ', pTagElementClass, '=>ends here');
        console.log('OuterText: ', outerTextClass);

        
        let pTagElement = this.template.querySelector("p");
        let outerText = pTagElement.outerText;
        console.log('Query 2: ', pTagElement, '=>ends here');
        console.log('OuterText 2: ', outerText);
        pTagElement.style = "color:deeppink;";

        let pTagElementData = this.template.querySelector("p[data-firstname=Sara]");
        let outerTextData = pTagElementData.outerText;
        console.log('Query 3: ', pTagElementData, '=>ends here');
        console.log('OuterText 3: ', outerTextData);
        pTagElementData.outerText = 'OuterText changed on button click';

        let pTagElements = this.template.querySelectorAll("p");
        console.log('pTagElements: ', pTagElements, '=>ends here');

        let childComponent = this.template.querySelector("c-lwc-child");
        childComponent.handleParentCall("Parent to Child function call worked");
    }
    //document.querySelector => HTML5.0
}