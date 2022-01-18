/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 10-31-2021
 * @last modified by  : Deepak Pal
**/
({
    publishMessage : function(component, event, helper) {
        const payload = {
            detail:"This is published inside AURA",
            source:"sampleMessagePublisherAura"
        };
        component.find("sampleMessageChannelId").publish(payload);
    }
})
