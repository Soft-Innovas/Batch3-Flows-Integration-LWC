/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-17-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class Calculator {
    public static Double addition(Double num1, Double num2){
        //10 things
        calculatorServices.CalculatorImplPort calculatorCalloutVar = new calculatorServices.CalculatorImplPort();

        //get result from integration
        Double result = calculatorCalloutVar.doAdd(num1, num2);
        
        
        System.debug('Result of addition is: '+result);
        return result;
    }
}