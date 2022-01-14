/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-17-2021
 * @last modified by  : Deepak Pal
**/
@IsTest(seeAllData = true)
public inherited sharing class CalculatorTest {
    @IsTest 
    public static void doAddTest(){
        Test.setMock(WebServiceMock.class, new CalculatorCalloutDoAddMock());

        Test.startTest();
        Double num1 = 2.0;
        Double num2 = 3.0;
        Double result = Calculator.addition(num1, num2);
        Test.stopTest();
        Double expected = 5.0;
        System.assertEquals(expected, result, 'The result should be 5.0');
    }
}