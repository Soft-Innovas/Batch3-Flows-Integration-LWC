/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-26-2021
 * @last modified by  : Deepak Pal
**/
public with sharing class VfPdfController {
    public Account acc;
    public List<Contact> contacts {get; set;}

    public StandardControllerExtension(){
        this.acc = (Account)stdController.getRecord();
        this.contacts = [
            SELECT Id, FirstName, LastName, Email
            FROM Contact
            WHERE AccountId = :this.acc.Id
        ];
        system.debug('contacts: '+contacts);
    }
}
