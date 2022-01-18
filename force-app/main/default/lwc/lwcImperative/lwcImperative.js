/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-25-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, track } from 'lwc';
import getOpportunities from '@salesforce/apex/OpportunitiesImperative.getOpportunities';
import saveOpportunities from '@salesforce/apex/OpportunitiesImperative.saveOpportunities';
import sendOpportunitiesToAWS from '@salesforce/apex/OpportunitiesImperative.sendOpportunitiesToAWS';

export default class LwcImperative extends LightningElement {
    @track
    opportunities;

    @track
    error;

    handleLoad() {
        
        getOpportunities()
            .then(result => {
                this.opportunities = result;
                this.error = undefined;
                saveOpportunities();
            })
            .then(result => {
                this.opportunities = result;
                this.error = undefined;
                sendOpportunitiesToAWS();
            })
            .then(result => {
                this.opportunities = result;
                this.error = undefined;
            })
            .catch(error => {
                this.opportunities = undefined;
                this.error = error;
            });
    }
}