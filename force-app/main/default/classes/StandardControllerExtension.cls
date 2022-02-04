/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-24-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class StandardControllerExtension {
    public Account acc;
    public List<Contact> contacts {get; set;}

    public StandardControllerExtension(ApexPages.StandardController stdController){
        this.acc = (Account)stdController.getRecord();
        this.contacts = [
            SELECT Id, FirstName, LastName, Email
            FROM Contact
            WHERE AccountId = :this.acc.Id
        ];
        system.debug('contacts: '+contacts);
    }
}