/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-21-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class OpportunitiesImperative {
    @AuraEnabled
    public static List<Opportunity> getOpportunities(){
        List<Opportunity> oppList = [
            SELECT Id, Name, StageName
            FROM Opportunity
        ];
        return oppList;
    }
}
