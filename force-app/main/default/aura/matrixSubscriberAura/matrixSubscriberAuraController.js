/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-14-2022
 * @last modified by  : Deepak Pal
**/
({
    handleMovieData : function(component, event, helper) {
        if (event != null && event.getParams != null) {
            let params = event.getParams();
            component.set("v.movieData", JSON.stringify(params));
        }
    }
})
