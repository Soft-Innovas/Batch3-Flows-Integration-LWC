/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-16-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class AnimalsHttpMockCalloutFailure implements HttpCalloutMock{
    public HttpResponse respond(HttpRequest request){
        //Create a fake response
        HttpResponse response = new HttpResponse();
        response.setHeader('Content-Type','application/json');
        response.setStatusCode(404);
        return response;
    }
}