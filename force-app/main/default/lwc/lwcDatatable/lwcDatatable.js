/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-13-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement, track, wire } from 'lwc';
import getAccounts from '@salesforce/apex/DatatableContoller.getAccounts';

export default class LwcDatatable extends LightningElement {
    showTable = false;
    selectedRows;
    @track tableData;
    @track columns = [
        { label: 'Account Name', fieldName: 'Name' , editable: true},
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue' },
        { label: 'Phone', fieldName: 'Phone' },
        { label: 'Industry', fieldName: 'Industry' },
        { label: 'Customer Priority', fieldName: 'CustomerPriority' }
    ];

    @wire(getAccounts)
    getAccountsHandler({ error, data }) {
        debugger;
        if (data) {
            this.tableData = data;
            this.showTable = true;
        } else if (error) {
            console.log(JSON.stringify(error));
        }
    }

    handleSelectedRow(event) {
        const selectedRows = event.detail.selectedRows;
        this.selectedRows = selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++) {
            console.log('Name at ',i,': ', selectedRows[i].Name);
            console.log('AnnualRevenue at ',i,': ', selectedRows[i].AnnualRevenue);
            console.log('Phone at ',i,': ', selectedRows[i].Phone);
            console.log('Industry at ',i,': ', selectedRows[i].Industry);
            console.log('CustomerPriority at ',i,': ', selectedRows[i].CustomerPriority);
        }
    }

    handleSave(event) {
        const draftValues = event.detail.draftValues;
        for (let i = 0; i < draftValues.length; i++) {
            console.log('------------------OnSave----------------');
            console.log('Draft at', i, ': ', draftValues[i]);
            console.log('Id at ',i,': ', draftValues[i].Id);
            console.log('Name at ',i,': ', draftValues[i].Name);
            console.log('AnnualRevenue at ',i,': ', draftValues[i].AnnualRevenue);
            console.log('Phone at ',i,': ', draftValues[i].Phone);
            console.log('Industry at ',i,': ', draftValues[i].Industry);
            console.log('CustomerPriority at ',i,': ', draftValues[i].CustomerPriority);
        }
    }

}