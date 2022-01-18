/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-17-2021
 * @last modified by  : Deepak Pal
**/

import { LightningElement, api } from 'lwc';

export default class LwcChild extends LightningElement {
    @api strVar = 'This is from child component';

    get countryName() {
        return 'USA';
    }
}