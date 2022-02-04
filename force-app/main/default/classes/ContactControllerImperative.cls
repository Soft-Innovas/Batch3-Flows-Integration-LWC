/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-21-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class ContactControllerImperative {
    @AuraEnabled
    public static Contact upsertContact(
        String firstName,
        String lastName,
        String recordId
    ){
        Contact con = new Contact();
        con.Id = recordId;
        con.FirstName = firstName;
        con.LastName = lastName;
        upsert con;
        return con;
    }
}
