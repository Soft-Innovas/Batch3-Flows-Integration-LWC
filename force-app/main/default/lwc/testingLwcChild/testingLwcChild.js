/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-09-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class TestingLwcChild extends LightningElement {
    handleSendData(){
        console.log('Am in child component');        
    }
    
    handleClick(){
        this.template.querySelector('.buttonDiv')
                .dispatchEvent(
                    new CustomEvent('senddata',{bubbles: true, composed: true})
                );
    }
}