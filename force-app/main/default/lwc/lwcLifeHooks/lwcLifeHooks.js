/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-23-2021
 * @last modified by  : Deepak Pal
**/
import { api, LightningElement } from 'lwc';

export default class LwcLifeHooks extends LightningElement {
    @api
    publicProperty = 'This is original value (lwc-life-hooks)';
    privateProperty = 'This is private original';
    fromHooks = 'This is called from hooks component';
    

    constructor() {
        super();
        console.log('18 public Property: ', this.publicProperty);
        this.publicProperty = 'This is constructor value (lwc-life-hooks)';
        console.log('20 Property 2: ', this.publicProperty);
        
        console.log('22 private Property: ', this.privateProperty);
        this.privateProperty = 'This is constructor private value (lwc-life-hooks)';
        console.log('24 private Property 2: ', this.privateProperty);
    }

    connectedCallback() {
        console.log('28 public property: ', this.publicProperty);
        this.publicProperty = 'Changed public property in line 29';
        console.log('30 public property: ', this.publicProperty);
        console.log('33 child component: ', this.template.querySelector('c-lwc-composition-child'));
    }

    renderedCallback() {
        this.fromHooks = 'Changed value from hooks';
        console.log('39 child component: ', this.template.querySelector('c-lwc-composition-child'));
        let information = this.template.querySelector('c-lwc-composition-child').information;
        console.log('information: ' + information);
    }
}