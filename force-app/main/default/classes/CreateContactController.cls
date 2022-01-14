/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-09-2022
 * @last modified by  : Deepak Pal
**/
public inherited sharing class CreateContactController {
    
    @AuraEnabled
    public static String createContact(
        String firstName, String lastName, String phone
    ){
        Contact con = new Contact();
        con.FirstName = firstName;
        con.LastName = lastName;
        con.Phone = phone;
        insert con;
        return con.Id;
    }
}