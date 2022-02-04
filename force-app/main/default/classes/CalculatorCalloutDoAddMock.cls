/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-17-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class CalculatorCalloutDoAddMock implements WebServiceMock{
    public void doInvoke(
        Object stub,
        Object request,
        Map<String, Object> response,
        String endpoint,
        String soapAction,
        String requestName,
        String responseNS,
        String responseName,
        String responseType
    ){
        //Create a response variable
        calculatorServices.doAddResponse response_x = new calculatorServices.doAddResponse();
        
        //Assign the addition result
        response_x.return_x = 5.0;
        
        //Put it in callout response map
        response.put('response_x', response_x);
    }
}