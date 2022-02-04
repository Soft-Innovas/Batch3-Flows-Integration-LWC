/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-23-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcErrorChild extends LightningElement {
    constructor() {
        super();
        console.log('This is child constructor');
        throw 'Failing child rendering';
    }
}