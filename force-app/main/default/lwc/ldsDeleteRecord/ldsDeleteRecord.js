/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-07-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { deleteRecord } from 'lightning/uiRecordApi';

export default class LdsDeleteRecord extends NavigationMixin(LightningElement) {
    @api recordId;

    handleDeleteOpp(event) {
        deleteRecord(this.recordId)
            .then(() => {
                alert('Opportunity deleted');
                this.navigateToListView();
            })
            .catch(error => {
                alert('Error deleted record');
                console.log('Error: ', JSON.stringify(error));
            })
    }

    navigateToListView() {
        // Navigate to the Contact object's Recent list view.
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            },
            state: {
                // 'filterName' is a property on the page 'state'
                // and identifies the target list view.
                // It may also be an 18 character list view id.
                filterName: 'Recent' // or by 18 char '00BT0000002TONQMA4'
            }
        });
    }
}