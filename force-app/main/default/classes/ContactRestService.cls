/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-19-2021
 * @last modified by  : Deepak Pal
**/
@RestResource(urlMapping='/ContactService/*')
global inherited sharing class ContactRestService {
    
    @HttpGet
    global static List<Contact> getContactsByIds(){
        //get the request
        RestRequest request = RestContext.request; 
        //get the URL of the received request
        String requestURI = request.requestURI; 
        //get the starting indes of ID after last slash /
        Integer lastSlashIndex = requestURI.lastIndexOf('/')+1; 
        //Get the remaining string which contains ContactIds
        String contactIds = requestURI.substring(lastSlashIndex); 

        //0035j000008Lx6uAAC&0035j000008Lx6zAAC
        List<String> contactIdList = contactIds.split('&');

        List<Contact> contacts = [
            SELECT FirstName, LastName, MailingStreet, MailingCity, MailingState, MailingCountry
            FROM Contact
            WHERE Id IN :contactIdList
        ];

        return contacts;
    }

    @HttpPost
    global static List<Contact> createContacts(List<Contact> sobjects){
        insert sobjects;
        return sobjects;
    }

    @HttpPut
    global static List<Contact> upsertContacts(List<Contact> sobjects){
        upsert sobjects;
        return sobjects;
    }

    @HttpDelete
    global static List<Contact> deleteContacts(){
        //get the request
        RestRequest request = RestContext.request; 
        //get the URL of the received request
        String requestURI = request.requestURI; 
        //get the starting indes of ID after last slash /
        Integer lastSlashIndex = requestURI.lastIndexOf('/')+1; 
        //Get the remaining string which contains ContactIds
        String contactIds = requestURI.substring(lastSlashIndex); 
        //0035j000008Lx6uAAC&0035j000008Lx6zAAC
        List<String> contactIdList = contactIds.split('&');

        List<Contact> contacts = new List<Contact>();
        for(String contactId: contactIdList){
            Contact contact = new Contact(Id=contactId);
            contacts.add(contact);
        }
        delete contacts;
        return contacts;
    }

    @HttpPatch
    global static Contact updateContact(String MailingCity, String MailingStreet){
        //get the request
        RestRequest request = RestContext.request; 
        //get the URL of the received request
        String requestURI = request.requestURI; 
        //get the starting indes of ID after last slash /
        Integer lastSlashIndex = requestURI.lastIndexOf('/')+1; 
        //Get the remaining string which contains ContactIds
        String contactId = requestURI.substring(lastSlashIndex); 
        
        Contact con = new Contact();
        con.Id = contactId;
        con.MailingStreet = MailingStreet;
        con.MailingCity = MailingCity;
        update con;
        return con;
    }
}