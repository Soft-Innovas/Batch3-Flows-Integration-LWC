/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-31-2021
 * @last modified by  : Deepak Pal
**/
({
    handlePayload : function(component, event, helper) {
        if (event != null && event.getParams() != null) {
            let params = event.getParams();
            component.set("v.recordValue", JSON.stringify(params, null, "\t"));
        }
    },
    sendPayload: function (component, event, helper) {
        let payload = {
            recordId: "001HSGKDHJ6834BHS",
            recordData: {
              accountName: "Deepak Pal"
            },
            source: "Aura Component",
            channel: "AURA"
          };
      
          component.find("MyMessageChannel").publish(payload);
    }
})
