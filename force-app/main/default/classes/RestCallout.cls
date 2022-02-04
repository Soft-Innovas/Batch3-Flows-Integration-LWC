/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-16-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class RestCallout {
    public static HttpResponse makeGetCallout(){
        HttpRequest request = new HttpRequest();
        request.setEndpoint('https://th-apex-http-callout.herokuapp.com/animals');
        request.setMethod('GET');

        Http http = new Http();

        HttpResponse response = http.send(request);

        if(response.getStatusCode() == 200){
            System.debug('Response body: '+response.getBody());
            //Contact con = (Contact)JSON.deserialize(response.getBody(), Contact.class); => if the response of specific type and you know the type
            Map<String, Object> results = (Map<String, Object>)JSON.deserializeUntyped(response.getBody()); //We do not a specific type of response result

            List<Object> animals = (List<Object>)results.get('animals');
            for(Object animal: animals){
                String animalName = (String)animal;
                System.debug('Animal Name: '+animalName);
            }
        }else{
            System.debug('Unable to fetch information');
        }
        return response;
    }
}