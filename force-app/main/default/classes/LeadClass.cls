/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-08-2022
 * @last modified by  : Deepak Pal
**/
public with sharing class LeadClass {

    
    /**
    * @description This method returns the list of all Leads in the salesforce org
    * @author Deepak Pal | 01-08-2022 
    * @return List<Lead> 
    **/
    @AuraEnabled(cacheable=true)
    public static List<Lead> fetchLeads(){
        List<Lead> leads = [
            SELECT Email, Phone, Name, AnnualRevenue
            FROM Lead
        ];
        //Integer i = 10/0;
        return leads;
    }
}