/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-22-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api } from 'lwc';

export default class LwcCompositionChild extends LightningElement {
    @api
    information = 'This information originated in child component - JS binding';
}