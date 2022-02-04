/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-21-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire , api } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import NAME_FIELD from '@salesforce/schema/Opportunity.Name';
import STAGE_FIELD from '@salesforce/schema/Opportunity.StageName';
import CLOSE_DATE_FIELD from '@salesforce/schema/Opportunity.CloseDate';
import AMOUNT_FIELD from '@salesforce/schema/Opportunity.Amount';
import ID_FIELD from '@salesforce/schema/Opportunity.Id';
import { updateRecord , getRecord , getFieldValue } from 'lightning/uiRecordApi';

export default class LdsUpdateRecord extends LightningElement {
    @api recordId;

    oppName;
    oppStage;
    oppCloseDate;
    oppAmount;

    optionsStage;

    fields = [NAME_FIELD, STAGE_FIELD, CLOSE_DATE_FIELD, AMOUNT_FIELD];

    @wire(getRecord, { recordId: '$recordId', fields:'$fields' })
    getOpportunityFunction({ data, error }) {
        if (data) {
            this.oppName = getFieldValue(data, NAME_FIELD);
            this.oppStage = getFieldValue(data, STAGE_FIELD);
            this.oppCloseDate = getFieldValue(data, CLOSE_DATE_FIELD);
            this.oppAmount = getFieldValue(data, AMOUNT_FIELD);
        } else if (error) {
            console.log('ERROR while fetching opp details: ', JSON.stringify(error))
        }
    }

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

    handleUpdateOpp() {
        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.recordId;
        fields[NAME_FIELD.fieldApiName] = this.oppName;
        fields[STAGE_FIELD.fieldApiName] = this.oppStage;
        fields[CLOSE_DATE_FIELD.fieldApiName] = this.oppCloseDate;
        fields[AMOUNT_FIELD.fieldApiName] = this.oppAmount;

        const oppRecord = { fields };

        updateRecord(oppRecord)
            .then(() => {
                alert('Record Updated');
                window.location.reload();
            })
            .catch(error => {
                alert('Error: ' + JSON.stringify(error));
            })
    }
}