/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-08-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire } from 'lwc';
import fetchLeads from '@salesforce/apex/LeadClass.fetchLeads';

export default class LeadListLwc extends LightningElement {
    //Wire function
    leadsData;
    leadsError;

    //Imperative
    leadsResult;
    leadsCatch;

    connectedCallback() {
        fetchLeads()
            .then(result => { 
                this.leadsResult = result;
                this.leadsCatch = null;
            })
            .catch(error => {
                this.leadsResult = null;
                this.leadsCatch = error;
            })
    }

    @wire(fetchLeads)
    leadsFunction({ data, error }) {
        alert('Server call complete');
        if (data) {
            this.leadsData = data;
            this.leadsError = undefined;
            console.log('Data received');
        } else if (error) {
            this.leadsError = error;
            this.leadsData = undefined;
            console.log('Error occured');
        }
    }

    @wire(fetchLeads)
    leads;

    //leads => property
    //leads.data => will have all the leads in the system
    //leads.error=> will have the error occurred during server call
    //when data is success, error is null => leads.data !=null; leads.error == null
    //when data is failure, data is null => leads.data ==null; leads.error != null
    //System will crash is leads == null as JS cannot have NULL.data -> Exception
}