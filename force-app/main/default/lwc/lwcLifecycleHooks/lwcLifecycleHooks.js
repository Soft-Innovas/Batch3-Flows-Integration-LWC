/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-08-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement , api } from 'lwc';

export default class LwcLifecycleHooks extends LightningElement {
    @api publicProperty = 'This is default publicProperty';
    privateProperty = 'This is default privateProperty';

    constructor() {
        super();
        console.log('Child constructor - Public property line 16: ', this.publicProperty);
        this.publicProperty = 'This is publicProperty in constructor';
        console.log('Child constructor - Public property line 18: ', this.publicProperty);

        console.log('Child constructor - Private property line 20: ', this.privateProperty);
    }

    connectedCallback() {
        console.log('Child connectedCallback - publicProperty line 24: ', this.publicProperty);
        this.publicProperty = 'This is publicProperty in connectedCallback';
        console.log('Child connectedCallback - publicProperty line 26: ', this.publicProperty);
    }

    handleChange(event) {
        this.privateProperty = event.detail.value;
        console.log('event in handle change: ', event.target.value);
    }

    renderedCallback() {
        console.log('privateProperty change: ', this.privateProperty);
        //this.privateProperty = this.privateProperty + ' a';
    }

    disconnectedCallback() {
        alert('The child component is removed');
    }

    handleThrowError(event) {
        throw "Throwing error to catch in parent component";
    }
}