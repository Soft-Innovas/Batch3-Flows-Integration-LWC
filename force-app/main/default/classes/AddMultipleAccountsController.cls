/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 12-24-2021
 * @last modified by  : Deepak Pal
**/
public class AddMultipleAccountsController {
    public List<Account> accountList {get; set;}
    public String defaultPrint {get; set;}

    public AddMultipleAccountsController(){
        Account acc = new Account();
        //accountList = null
        accountList = new List<Account>();
        //accountList = 123
        accountList.add(acc);
    }

    public void addAccount(){
        Account acc = new Account();
        accountList.add(acc);
    }

    public void saveAccount(){
        if(!accountList.isEmpty()){
            try{
                insert accountList;
                defaultPrint = accountList.size() + ' records inserted';
                clearAccount();
            }catch(Exception ex){
                defaultPrint = 'Exception: '+ex.getMessage();
            }
        }else{
            defaultPrint = 'No records for insert';
        }
    }

    public void clearAccount(){
        accountList.clear();
        accountList = new List<Account>();
        Account acc = new Account();
        accountList.add(acc);
    }
}