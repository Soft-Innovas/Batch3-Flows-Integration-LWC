/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-13-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class DatatableContoller {

    @AuraEnabled(cacheable=true)
    public static List<AccountWrapper> getAccounts(){
        List<Account> accounts =  [
            SELECT Id, Name, AnnualRevenue, 
                Phone, Industry, CustomerPriority__c 
            FROM Account
        ];
        List<AccountWrapper> accountWrapperRecords = 
            AccountWrapper.getWrapperRecords(accounts);
        return accountWrapperRecords;
    }
}