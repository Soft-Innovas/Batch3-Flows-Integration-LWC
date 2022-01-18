/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-06-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, track, api, wire } from 'lwc';
import { getObjectInfo, getObjectInfos, getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
import LEAD_OBJECT from '@salesforce/schema/Lead';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import LEAD_SOURCE_FIELD from '@salesforce/schema/Contact.LeadSource';
import CITY_FIELD from '@salesforce/schema/Contact.City__c';

export default class LdsWireGet extends LightningElement {
    @track objectInfoProperty;


    @wire(getObjectInfo, { objectApiName: LEAD_OBJECT })
    objectInfoFunction({ error, data }) {
        if (data) {
            this.objectInfoProperty = data;
            // console.log('This is the object Info: ', JSON.stringify(data));
            // console.log('This is the object Prefix: ', data.keyPrefix);
            // console.log('This is the object Label: ', data.label);
            
            // console.log('This is the object\'s field: ', data.fields.AnnualRevenue);
        } else if (error) {
            
        }
    }

    @wire(getObjectInfos, { objectApiNames: [LEAD_OBJECT, CONTACT_OBJECT] })
    objectInfosFunction({ error, data }) {
        if (data) {
            // console.log('This is the objects Info: ', JSON.stringify(data));
            for (let i = 0; i < data.results.length; i++){
                let objectInfo = data.results[i];
                if (objectInfo.statusCode === 200) {
                    let objectResult = objectInfo.result;
                    // console.log('This is the object Prefix: ', objectResult.keyPrefix);
                    // console.log('This is the object Label: ', objectResult.label);
                }
            }
        } else if (error) {
            
        }
    }

    @wire(getPicklistValues, { recordTypeId: '012000000000000AAA', fieldApiName: CITY_FIELD })
    picklistValueInfo({ error, data }) {
        if (data) {
            // console.log('This is the picklist Info: ', JSON.stringify(data));
        } else if (error) {
            // console.log('Error in picklist fetch: ', JSON.stringify(error));
        }
    }

    @wire(getPicklistValuesByRecordType, { objectApiName: CONTACT_OBJECT, recordTypeId: '0125j0000016lozAAA' })
    picklistValueInfoByRecordType({ error, data }) {
        if (data) {
            console.log('This is the picklist by RT Info: ', JSON.stringify(data));
        } else if (error) {
            console.log('Error in picklist by RT fetch: ', JSON.stringify(error));
        }
    }
}