/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-16-2021
 * @last modified by  : Deepak Pal
**/
@IsTest(seeAllData=false)
public inherited sharing class RestCalloutTest {
    
    @IsTest
    static void makeGetCalloutSuccess(){
        Test.setMock(HttpCalloutMock.class, new AnimalsHttpMockCallout());

        Test.startTest();
        HttpResponse response  = RestCallout.makeGetCallout();
        Test.stopTest();

        System.assertEquals(200, response.getStatusCode(), 'The response should be for success with status code 200');
    }

    @IsTest
    static void makeGetCalloutFailure(){
        Test.setMock(HttpCalloutMock.class, new AnimalsHttpMockCalloutFailure());

        Test.startTest();
        HttpResponse response  = RestCallout.makeGetCallout();
        Test.stopTest();

        System.assertEquals(404, response.getStatusCode(), 'The response should be for failure with status code 404');
    }
}