/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-21-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcDatatable extends LightningElement {
    columns = [
        {label: 'Opportunity Name', fieldName: 'opportunityName', type:'text'},
        {
            label: 'Confidence',
            fieldName: 'confidence',
            type: 'percent',
            cellAttributes: {
                iconName: { fieldName: 'trendIcon' },
                iconPosition: 'right'
            }
        },
        {
            label: 'Amount',
            fieldName: 'amount',
            type: 'currency',
            typeAttributes: {
                currencyCode: 'USD',
                step: '0.01'
            }
        },
        { label: 'Contact Email', fieldName:'contact', type: 'email' },
        { label: 'Contact Phone', fieldName:'phone', type: 'phone' }
    ];
    
    data = [
        {
            id: 'a',
            opportunityName: 'CloudHub',
            confidence: 0.2,
            amount: 25000,
            contact: 'jrogers@cloudhub.com',
            phone: '2343454567',
            trendIcon: 'utility:down'
        },
        {
            id: 'b',
            opportunityName: 'Quip',
            confidence: 0.78,
            amount: 74000,
            contact: 'quipy@quip.com',
            phone: '9876654321',
            trendIcon: 'utility:up'
        }
    ];

    handleRowSelection(event) {
        const selectedRows = event.detail.selectedRows;
        for (let i = 0; i < selectedRows.length; i++){
            console.log('You selected: ', selectedRows[i].opportunityName);
        }
    }
}