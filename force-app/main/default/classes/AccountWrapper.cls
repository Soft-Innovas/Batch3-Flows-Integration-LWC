/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-13-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class AccountWrapper{
    @AuraEnabled public String Id;
    @AuraEnabled public String Name;
    @AuraEnabled public Decimal AnnualRevenue;
    @AuraEnabled public String Phone;
    @AuraEnabled public String Industry;
    @AuraEnabled public String CustomerPriority;

    public AccountWrapper(
        String Id, String Name, Decimal AnnualRevenue, 
        String Phone, String Industry, String CustomerPriority
    ){
        this.Id = Id;
        this.Name = Name;
        this.AnnualRevenue = AnnualRevenue;
        this.Phone = Phone;
        this.Industry = Industry;
        this.CustomerPriority = CustomerPriority;
    }

    public static List<AccountWrapper> getWrapperRecords(List<Account> accounts){
        List<AccountWrapper> accountWrapperRecords = new List<AccountWrapper>();
        for(Account acc: accounts){
            AccountWrapper accWrapper = new AccountWrapper(
                acc.Id, acc.Name, acc.AnnualRevenue, acc.Phone, acc.Industry,
                acc.CustomerPriority__c
            );
            accountWrapperRecords.add(accWrapper);
        }
        return accountWrapperRecords;
    }

    public static List<Account> getAccountRecords(List<AccountWrapper> accountWrappers){
        List<Account> accountRecords = new List<Account>();
        for(AccountWrapper accWrap: accountWrappers){
            Account acc = new Account();
            acc.Id = accWrap.Id;
            acc.Name = accWrap.Name;
            acc.AnnualRevenue = accWrap.AnnualRevenue;
            acc.Phone = accWrap.Phone;
            acc.Industry = accWrap.Industry;
            acc.CustomerPriority__c = accWrap.CustomerPriority;
            accountRecords.add(acc);
        }
        return accountRecords;
    }
}