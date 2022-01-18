/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-29-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire, track, api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import { createRecord } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName';
import CLOSE_DATE from '@salesforce/schema/Opportunity.CloseDate';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';


const name = 'dsvhsdbv';

export default class LdsCreateRecord extends NavigationMixin(LightningElement) {
    name;
    stageName;
    closeDate;
    todayDate;


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

    handleCreateOpp(event) {
        if (!this.validityCheck()) {
            return;
        }
        
        //external API hitting SF
        //it provides field values=> integrationRecord
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.name; //integrationRecord.name
        fields[STAGE_NAME.fieldApiName] = this.stageName; //integrationRecord.stageName
        fields[CLOSE_DATE.fieldApiName] = this.closeDate; //integrationRecord.closeDate
        const oppRecord = { apiName: OPPORTUNITY_OBJECT.objectApiName, fields };
        createRecord(oppRecord)
            .then(opportunityRecord => {
                this.showNotification('SUCCESS', 'Opportunity created successfully','success');
                this.navigateToRecordViewPage(opportunityRecord.id);
            })
            .catch(error => {
                this.showNotification('ERROR', 'Opportunity creation failed','error');
                console.log('Error: ', JSON.stringify(error));
            })
    }

    showNotification(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

    validityCheck() {
        const allValid = [
            ...this.template.querySelectorAll(
                'lightning - input, lightning - combobox, lightning - radio - group'
            )
        ];
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

    navigateToRecordViewPage(recordId) {
        // View a custom object record.
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                actionName: 'view'
            }
        });
    }

    get isCreated() {
        if (this.recordId) {
            return true;
        }
        return false;
    }
}