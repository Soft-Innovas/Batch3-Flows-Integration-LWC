/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-06-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, track, api, wire } from 'lwc';
import { getObjectInfo, getObjectInfos, getPicklistValues } from 'lightning/uiObjectInfoApi';
import STATE_FIELD from '@salesforce/schema/Contact.State__c';
import CITY_FIELD from '@salesforce/schema/Contact.City__c';
import getRecordTypes from '@salesforce/apex/LdsWireController.getRecordTypes'

export default class LdsWireGetPiclistSample extends LightningElement {
    recordTypeValue;
    stateValue;
    cityValue;
    @track cityOptions;
    @track stateOptions;
    @track recordTypeOptions;
    cityData;

    // get recordTypeOptions() {
    //     return [
    //         { label: 'East', value: '0125j0000016lozAAA' }, //add your own Contact' recordtype Id
    //         { label: 'West', value: '0125j0000016lp9AAA' }
    //     ];
    // }

    // City__c
    // State__c
    // data.City

    @wire(getRecordTypes)
    recordTypeOptionsInfo({ error, data }) {
        if (data) {
            // console.log('This is the rec type Info: ', JSON.stringify(data));
            this.recordTypeOptions = data;
        } else if (error) {
            // console.log('Error in rec type fetch: ', JSON.stringify(error));
        }
    }

    @wire(getPicklistValues, { recordTypeId: '$recordTypeValue', fieldApiName: STATE_FIELD })
    statePicklistValueInfo({ error, data }) {
        if (data) {
            // console.log('This is the state picklist Info: ', JSON.stringify(data));
            this.stateOptions = [];
            for (let i = 0; i < data.values.length; i++){
                let state = data.values[i];
                this.stateOptions.push({ label: state.label, value: state.value });
            }
        } else if (error) {
            // console.log('Error in state picklist fetch: ', JSON.stringify(error));
        }
    }

    @wire(getPicklistValues, { recordTypeId: '$recordTypeValue', fieldApiName: CITY_FIELD })
    cityPicklistValueInfo({ error, data }) {
        if (data) {
            // console.log('This is the city picklist Info: ', JSON.stringify(data));
            this.cityOptions = [];
            this.cityData = data;
        } else if (error) {
            // console.log('Error in city picklist fetch: ', JSON.stringify(error));
        }
    }

    handleRecordTypeChange(event) {
        this.recordTypeValue = event.detail.value;
        // console.log(this.recordTypeValue);
    }

    handleStateChange(event) {
        // debugger;
        this.cityOptions = [];
        this.stateValue = event.detail.value; //New York    New Jersey  Texas   California
        // console.log(this.stateValue);
        let stateControllerIndex = this.cityData.controllerValues[this.stateValue]; //New York = 1    New Jersey = 0
        
        for (let i = 0; i < this.cityData.values.length; i++){
            let city = this.cityData.values[i];
            for (let j = 0; j < city.validFor.length; j++){
                let controllerIndex = city.validFor[j];
                if (stateControllerIndex === controllerIndex) {
                    this.cityOptions.push({ label: city.label, value: city.value});
                }
            }
        }
    }

    handleCityChange(event) {
        // console.log(event.detail.value);
    }
}