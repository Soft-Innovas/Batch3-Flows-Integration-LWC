/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 11-28-2021
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {

    connectedCallback() {
        debugger;
        let intVar = 10;
        let stringVar = 'This is my first LWC component';
        let checkUncheck = true;

        let contact = {
            'FirstName': 'Deepak',
            'LastName' : 'Pal'
        };

        let listIntegers = [
            10, 20, 30
        ];

        let listContacts = [
            {
                'FirstName': 'Deepak',
                'LastName': 'Pal',
                'Information': [
                    {
                        'Session' : 'Soft Skills',
                        'Day' : 'Monday'
                    },
                    {
                        'Session' : 'Verbal Comms',
                        'Day' : 'Tuesday'
                    }
                ]
            },
            {
                'FirstName' : 'Adnan',
                'LastName' : 'Ozbey'
            }
        ];

        console.log('intVar: ',intVar);
        console.log('stringVar: ',stringVar);
        console.log('checkUncheck: ',checkUncheck);
        console.log('contact: ',contact);
        console.log('contact.FirstName: ',contact.FirstName);
        console.log('listIntegers: ',listIntegers);
        console.log('listContacts: ',listContacts);
        console.log('listContacts[0]: ',listContacts[0].LastName);
    }
}