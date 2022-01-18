/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-20-2021
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
