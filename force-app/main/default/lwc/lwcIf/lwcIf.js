/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-31-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcIf extends LightningElement {
    showSection = false;

    handleClick() {
        this.showSection = this.showSection ? false : true;
        //this.showSection = !this.showSection;
        //this.showSection = (this.showSection == true) ? false : true;

        //if(this.showSection == true)
        //if(this.showSection)
        // if (this.showSection) {
        //     this.showSection = false;
        // } else {
        //     this.showSection = true;
        // }
    }
}