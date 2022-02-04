/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-19-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement , wire , track } from 'lwc';
import { getObjectInfo , getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import STATE_FIELD from '@salesforce/schema/Account.State__c';
import COUNTRY_FIELD from '@salesforce/schema/Account.Country__c';
import CITY_FIELD from '@salesforce/schema/Account.City__c';

export default class LdsPicklist extends LightningElement {

    //undefined
    optionsRecordType;
    optionsCountry;
    optionsState;
    optionsCity;

    stateData;
    cityData;

    selectedRecordType;
    selectedCountry;
    selectedState;
    selectedCity;

    @wire(getObjectInfo, { objectApiName: ACCOUNT_OBJECT })
    getObjectInfoData({ data, error }) {
        if (data) {
            let recordTypeInfos = data.recordTypeInfos;
            let recordTypes = Object.values(recordTypeInfos);
            //intialize
            this.optionsRecordType = [];
            // for (let i = 0; i < recordTypes.length; i++){
            //     let recordType = recordTypes[i];
            //     console.log('recordType: ', recordType);
            //     if (!recordType.master) {
            //         this.optionsRecordType.push({
            //             label: recordType.name,
            //             value: recordType.recordTypeId
            //         });
            //     }
            // }
            recordTypes.forEach(recordType => { 
                if (!recordType.master) {
                    this.optionsRecordType.push({
                        label: recordType.name,
                        value: recordType.recordTypeId
                    });
                }
            });
        } else if (error) {
            console.log('Error getObjectInfo: ', JSON.stringify(error));
        }
    }

    @wire(getPicklistValues, { recordTypeId: '$selectedRecordType', fieldApiName: COUNTRY_FIELD })
    getCountryPicklist({ data, error }) {
        if (data) {
            console.log('Country Picklist=>: ', JSON.stringify(data.values));
            this.optionsCountry = [];
            data.values.forEach(country => {
                this.optionsCountry.push({
                    label : country.label,
                    value : country.value
                });
            });

        } else if (error) {
            console.log('Error Country: ', JSON.stringify(error));
        }
    }

    @wire(getPicklistValues, { recordTypeId: '$selectedRecordType', fieldApiName: STATE_FIELD })
    getStatePicklist({ data, error }) {
        if (data) {
            console.log('State Picklist=>: ', JSON.stringify(data.values));
            this.stateData = data;

        } else if (error) {
            console.log('Error State: ', JSON.stringify(error));
        }
    }

    @wire(getPicklistValues, { recordTypeId: '$selectedRecordType', fieldApiName: CITY_FIELD })
    getCityPicklist({ data, error }) {
        if (data) {
            console.log('City Picklist=>: ', JSON.stringify(data.values));
            this.cityData = data;

        } else if (error) {
            console.log('Error City: ', JSON.stringify(error));
        }
    }

    handleRecordTypeChange(event) {
        console.log(event.detail.value);
        this.selectedRecordType = event.detail.value;
        
        this.optionsCountry = [];
        this.optionsState = [];
        this.optionsCity = [];
    }

    handleCountryChange(event) {
        
        this.optionsState = [];
        this.optionsCity = [];

        //selected country is USA
        let country = event.detail.value;
        console.log('States: ' + JSON.stringify(this.stateData));
        let selectedCountries = new Set();
        //this.stateData.controllerValues[country] will give value as 0 as=> USA:0, Canada:1
        selectedCountries.add(this.stateData.controllerValues[country]);
        //selectedCountries add USA i.e 0 => selectedCountries => [0]
        this.optionsState = [];
        //for all states received for record type iterate
        //1st is Texas
        this.stateData.values.forEach(state => {
            let addInState = false;
            //Check valid countries for Texas
            //Check valid countries for Nova Scotia
            state.validFor.forEach(country => {
                //TEXAS: First country = 0  and is valid => mark addInState as True
                //TEXAS: No second
                //Nova Scotia: First country = 1  and is not valid so addInState remains false 
                if (selectedCountries.has(country)) {
                    addInState = true;
                }
            });
            if (addInState) {
                //For Texas add value as addInState was true for selected country USA:0
                //For Nova Scotia no adding in dropdown as addInState is false for country Canada:1
                this.optionsState.push({
                    label : state.label,
                    value : state.value
                });
            }
        });
    }

    handleStateChange(event) {
        
        this.optionsCity = [];
        
        console.log(event.detail.value);
        //selected state is Texas
        let state = event.detail.value;
        let selectedStates = new Set();
        console.log('States: ' + JSON.stringify(this.cityData));
        //this.stateData.controllerValues[country] will give value as 0 as
        //"Texas": 0,
        // "New York": 1,
        // "California": 2,
        // "British Columbia": 3,
        // "Nova Scotia": 4
        selectedStates.add(this.cityData.controllerValues[state]);
        //selectedStates add Texas i.e 0 => selectedStates => [0]
        this.optionsCity = [];
        //for all cities received for record type iterate
        //1st is Austin
        //2nd is Dallas
        this.cityData.values.forEach(city => { 
            let addInCity = false;
            //Check valid cities for Texas
            city.validFor.forEach(state => {
                //selectedStates = [0]
                //Austin: First state = 0 and is valid => mark addInCity as True valid because selectedStates contains only '0'
                //Dallas: First state = 0 and is valid => mark addInCity as True valid because selectedStates contains only '0'
                //New Your City: First State = 1 and is not valid because selectedStates contains only '0' and not 1
                //San Jose : First State = 2 and is not valid because selectedStates contains only '0' and not 2
                if (selectedStates.has(state)) {
                    addInCity = true;
                }
            });
            if (addInCity) {
                //For Austin add value as addInCity was true for selected state Texas:0
                this.optionsCity.push({
                    label : city.label,
                    value : city.value
                });
            }
        });
    }

    handleCityChange(event) {
        console.log(event.detail.value);
    }
}