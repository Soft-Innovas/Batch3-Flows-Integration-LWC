/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-28-2021
 * @last modified by  : Deepak Pal
**/

var callbacks = {};
//callbacks['csvupload'] = [handlecsvbycmp1, handlecsvbycmp2];
//callbacks['imageupload'] = [handleimgbycmp1, handleimgbycmp2, handleimgbycmp3]

const register = (eventName, callback) => {
    if (!callbacks[eventName]) {
        callbacks[eventName] = new Set(); //initilizes 'btnclick' as a set; now this set will hold set of methods that should be invoked when btnclick is fired
    }
    callbacks[eventName].add(callback);
    //callbacks['btnclick'].add(123.handleClickEvent);
};

const unregister = (eventName, callback) => {
    if (callbacks[eventName]) {
        callbacks[eventName].delete(callback);
    }
};

const unregisterAll = () => {
    callbacks = {};
};

const fire = (eventName, payload) => {
    if (callbacks[eventName]) {
        callbacks[eventName].forEach(callback => { //handleClickEvent of subscriber
            try {
                callback(payload); //handleClickEvent(payload)
            } catch (error) {
                console.log(JSON.stringify(error));
            }
            //123.handleclick(payload);
            //456.handleclick(payload);
        });
    }
};

export default { register, unregister, fire , unregisterAll};