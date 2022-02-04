/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-18-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class ContactController {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        List<Contact> contacts = [
            SELECT Id, Name, FirstName, LastName
            FROM Contact
            ORDER BY Name ASC
        ];
        return contacts;
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsByKeyword(String keyword){
        String searchTerm = '%'+keyword+'%';
        List<Contact> contacts = [
            SELECT Id, Name
            FROM Contact
            WHERE Name LIKE :searchTerm 
        ];
        return contacts;
    }
}
