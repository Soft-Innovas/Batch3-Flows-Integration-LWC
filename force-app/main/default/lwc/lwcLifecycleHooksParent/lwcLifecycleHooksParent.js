/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-08-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcLifecycleHooksParent extends LightningElement {
    
    showChild = true;

    constructor() {
        super();
        let childComponent = this.template.querySelector('c-lwc-lifecycle-hooks');
        console.log('Parent constructor - childComponent line 14: ',childComponent);
    }

    connectedCallback() {
        let childComponent = this.template.querySelector('c-lwc-lifecycle-hooks');
        console.log('Parent connectedCallback - childComponent line 19: ',childComponent);
    }

    renderedCallback() {
        let childComponent = this.template.querySelector('c-lwc-lifecycle-hooks');
        console.log('Parent renderedCallback - childComponent line 24: ',childComponent);
    }

    handleShowHideChild(event) {
        this.showChild = event.detail.checked;
        //when user checks the box => event.detail.checked == true
        //when user unchecks the box => event.detail.checked == false

    }

    errorCallback(error, stack) {
        console.log('Errorcallback error (stringify and then parsed): ', JSON.parse(JSON.stringify(error)));
        console.log('Errorcallback error: ', error);
        console.log('Error stack: ', stack);
    }
}