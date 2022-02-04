/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 


 * @last modified on  : 01-08-2022

 * @last modified by  : Deepak Pal
**/
public inherited sharing class AccountController {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        List<Account> accounts = [

            SELECT Id, Name, Website, Type
            FROM Account
            ORDER BY Name ASC
        ];
        //Integer a = 10/0;

            SELECT Name, BillingState, Type, Phone
            FROM Account
        ];

        return accounts;
    }

    @AuraEnabled(cacheable=true)

    public static List<Account> getAccountsByKeyword(String searchTerm){
        String keyword = '%'+searchTerm+'%'; 
        List<Account> accounts = [
            SELECT Id, Name, Website, Type
            FROM Account 
            WHERE Name LIKE :keyword
        ];
        return accounts;
    }
}

    public static List<Account> getAccountByKeyword(String keyword){
        if(String.isBlank(keyword)){
            //keyword == ''
            //keyword == null
            return new List<Account>();
        }
        String queryParameter = '%'+keyword+'%';
        List<Account> accounts = [
            SELECT Name, BillingState, Type, Phone
            FROM Account
            WHERE Name LIKE :queryParameter
        ];
        Integer i = 10/0;
        return accounts;
    }

    @AuraEnabled
    public static void createAccount(String name){
        Account acc = new Account(Name=name);
        insert acc;
    }
}

