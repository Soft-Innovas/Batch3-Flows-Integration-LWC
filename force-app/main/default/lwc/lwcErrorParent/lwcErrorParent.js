/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-23-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcErrorParent extends LightningElement {
    errorCallback(error, stack) {
        console.log('errorCallback in Parent: ', JSON.parse(JSON.stringify(error)));
        console.log('stack: ', stack);
    }
}