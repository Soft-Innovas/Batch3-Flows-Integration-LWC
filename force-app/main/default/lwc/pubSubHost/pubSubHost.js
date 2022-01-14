/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-12-2022
 * @last modified by  : Deepak Pal
**/
//accounts
//account
//accounts.add(account)

var subscribers = {};

const register = (movieName, subscriberFunction) => { //M3 or M4 M5
    //matrix => movieName
    //subscribers['matrix'] => undefined => !undefined=  true
    //if (subscribers[movieName] === undefined) {
    alert('We are registering for Matrix');
    if (!subscribers[movieName]) {
        //create a new set for 'matrix'
        alert('Creating entry for Matrix')
        subscribers[movieName] = new Set();
    }
    //the below will always have movieName defined
    alert('Adding handleMovieData in the subscriber list');
    subscribers[movieName].add(subscriberFunction);
}

const unregister = (movieName, subscriberFunction) => {
    if (subscribers[movieName]) {
        //check if matrix movieName is store in the channel
        //if yes delete user Liz from the list
        subscribers[movieName].delete(subscriberFunction);
    }
}

const unregisterAll = () => {
    //reset channel
    subscribers = {};
}

const fire = (movieName, payload) => {
    if (subscribers[movieName]) {
        alert('Entry for matrix exists');
        subscribers[movieName].forEach(subscriberFunction => {
            try {
                alert('invoking handleMovieData after this');
                subscriberFunction(payload);
            } catch (error) {
                console.log(JSON.stringify(error));
            }
        });
    }
}

export {register, unregister, unregisterAll, fire};

// subscribers = {
//     'matrix': [M3, M4, M5]
// };

// var subscribers = {
//     'matrix': [
//         'Begench.handleMovieData'
//     ]
// }; 

//Begench is at 123
//Liz is at 456
//Maral is at 789

//The object contains list of movies for which people have subscribed
//'matrix':['Deepak', 'Maral'];
//'venom':['Deepak', 'Liz'];
//'doctorstrange':['Begench', 'Emir','Servet'];