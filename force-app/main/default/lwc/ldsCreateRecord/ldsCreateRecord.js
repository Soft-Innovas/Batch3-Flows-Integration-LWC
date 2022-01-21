/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-21-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import { createRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';

export default class LdsCreateRecord extends NavigationMixin(LightningElement) {
    oppName;
    oppStage;
    oppCloseDate;
    oppAmount;

    optionsStage;

    /*
    optionsStage = [
        {label:"Prospecting", value:"Prospecting"}
    ];
    */
    //fetch picklist by MASTER if no record type present
    @wire(getPicklistValues, { recordTypeId: '012000000000000AAA', fieldApiName: STAGE_FIELD })
    getStageName({ data, error }) {
        if (data) {
            console.log('STage Name: ', JSON.stringify(data));
            this.optionsStage = [];
            data.values.forEach(stage => {
                this.optionsStage.push({
                    label: stage.label,
                    value: stage.value
                })
            });

        } else if (error) {
            console.log('Error while fetching Stage Name');
        }
    }

    handleNameChange(event) {
        console.log('Name: ', event.detail.value);
        this.oppName = event.detail.value;
    }

    handleStageChange(event) {
        console.log('Stage: ', event.detail.value);
        this.oppStage = event.detail.value;
    }

    handleCloseDateChange(event) {
        console.log('Close Date: ', event.detail.value);
        this.oppCloseDate = event.detail.value;
    }

    handleAmountChange(event) {
        console.log('Amount: ', event.detail.value);
        this.oppAmount = event.detail.value;
    }

    handleCreateOpp() {
        if (!this.validityCheck()) {
            return;
        }
        const fields = {};
        fields[NAME_FIELD.fieldApiName] = this.oppName;
        fields[STAGE_FIELD.fieldApiName] = this.oppStage;
        fields[CLOSE_DATE_FIELD.fieldApiName] = this.oppCloseDate;
        fields[AMOUNT_FIELD.fieldApiName] = this.oppAmount;
        const oppRecord = { apiName: OPPORTUNITY_OBJECT.objectApiName, fields };

        createRecord(oppRecord)
            .then(oppRecord => { 
                console.log('oppRecord: ', oppRecord);
                this.showNotification('SUCCESS', 'Opportunity created with Id: ' + oppRecord.id, 'success');
                this.navigateToRecordPage(oppRecord.id);
            })
            .catch(error => {
                console.log('Errors: ', JSON.stringify(error));
                this.showNotification('ERROR', JSON.stringify(error), 'error');
            })
    }

    validityCheck() {
        const allValid = [
            ...this.template.querySelectorAll(
                'lightning-input, lightning-combobox'
            )
        ].reduce((validSoFar, inputCmp) => { 
            inputCmp.reportValidity();
            return validSoFar && inputCmp.checkValidity();
        }, true);
        return allValid;
    }

    showNotification(title, message, variant) {
        const evt = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(evt);
    }

    navigateToRecordPage(recordId) {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: recordId,
                actionName: 'view'
            }
        });
    }
    
}