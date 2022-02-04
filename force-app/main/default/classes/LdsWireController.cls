/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-06-2021
 * @last modified by  : Deepak Pal
**/
public inherited sharing class LdsWireController {
    @AuraEnabled(cacheable=true)
    public static List<RecordTypeWrapper> getRecordTypes(){
        List<RecordTypeWrapper> recTypes = new List<RecordTypeWrapper>();
        try {
            Schema.DescribeSObjectResult d = Schema.SObjectType.Contact; 
            Map<Id, Schema.RecordTypeInfo> rtMapById = d.getRecordTypeInfosById();
            for(Id recordTypeId: rtMapById.keySet()){
                Schema.RecordTypeInfo recTypeInfo = rtMapById.get(recordTypeId);
                if(recTypeInfo.isActive() && recTypeInfo.isAvailable() && !recTypeInfo.isMaster()){
                    recTypes.add(new RecordTypeWrapper(recTypeInfo.getName(), recTypeInfo.getRecordTypeId()));
                    // RecordTypeWrapper recTypeWrapper = new RecordTypeWrapper();
                    // recTypeWrapper.label = recTypeInfo.getName();
                    // recTypeWrapper.value = recTypeInfo.getRecordTypeId();
                    // recTypes.add(recTypeWrapper);
                }
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return recTypes;
    }

    public inherited sharing class RecordTypeWrapper{
        @AuraEnabled public String label;
        @AuraEnabled public String value;

        public RecordTypeWrapper(String label, String value){
            this.label = label;
            this.value = value;
        }
    }
}
