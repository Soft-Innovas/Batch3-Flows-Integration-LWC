/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-07-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api, wire, track } from 'lwc';
import { updateRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName';
import CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';
import ID_FIELD from '@salesforce/schema/Opportunity.Id';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';

export default class LdsUpdateRecord extends LightningElement {
    name;
    stageName;
    closeDate;
    todayDate;

    @api
    recordId;

    @track stageOptions;

    connectedCallback() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();

        this.todayDate = mm + '/' + dd + '/' + yyyy;
    }

    @wire(getPicklistValues, { recordTypeId: '012000000000000AAA', fieldApiName: STAGE_NAME })
    stageNamePicklistInfo({ error, data }) {
        if (data) {
            console.log('Data : ', JSON.stringify(data));
            this.stageOptions = [];
            for (let i = 0; i < data.values.length; i++){
                let stage = data.values[i];
                this.stageOptions.push({label: stage.label, value: stage.value});
            }
        } else if (error) {
            console.log('error : ', JSON.stringify(error));
        }
    }

    handleNameChange(event) {
        this.name = event.detail.value;
    }

    handleStageNameChange(event) {
        this.stageName = event.detail.value;
    }

    handleCloseDateChange(event) {
        this.closeDate = event.detail.value;
    }
    
    handleUpdateOpp(event) {
        if (!this.validityCheck()) {
            return;
        }
        //external API hitting SF
        //it provides field values=> integrationRecord
        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.recordId;
        fields[NAME_FIELD.fieldApiName] = this.name; //integrationRecord.name
        fields[STAGE_NAME.fieldApiName] = this.stageName; //integrationRecord.stageName
        fields[CLOSE_DATE.fieldApiName] = this.closeDate; //integrationRecord.closeDate
        const oppRecord = { fields };

        updateRecord(oppRecord)
            .then(() => {
                alert('Record updated');
                window.location.reload();
            })
            .catch(error => {
                alert('Error updating record');
                console.log('Error: ', JSON.stringify(error));
            })
    }

    validityCheck() {
        const allValidInputs = [
            ...this.template.querySelectorAll('lightning-input'), //inputCmp = input[1]
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        const allValidPicklists = [
            ...this.template.querySelectorAll('lightning-combobox'),
        ].reduce((validSoFar, inputCmp) => {
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        if (!allValidInputs || !allValidPicklists) {
            alert('Please fix the issues');
            return false;
        }
        return true;
    }
}