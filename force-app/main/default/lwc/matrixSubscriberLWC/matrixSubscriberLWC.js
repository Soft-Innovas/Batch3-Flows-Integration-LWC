/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-14-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire } from 'lwc';
import { subscribe, unsubsribe, MessageContext } from 'lightning/messageService';
import MATRIX_MOVIE_DATA from '@salesforce/messageChannel/MatrixMovieData__c';

export default class MatrixSubscriberLWC extends LightningElement {
    @wire(MessageContext)
    messageContext;

    subscription;
    movieData;

    // connectedCallback() {
    //     this.handleSubscribe();
    // }

    handleSubscribe() {
        alert("About to subscribe in LWC");
        if (!this.subscription) {
            alert("No subscription found LWC");
            this.subscription = subscribe(
                this.messageContext,
                MATRIX_MOVIE_DATA,
                movieData => {
                    this.handleMovieData(movieData)
                }
            );
            alert("Subscription complete LWC");
        }
    }

    handleMovieData(movieData) {
        alert("Received in LWC");
        this.movieData = JSON.stringify(movieData);
        alert("Displayed in LWC");
    }

    handleUnsubscribe() {
        alert("About to unsubscribe in LWC");
        if (this.subscription) {
            alert("Subscription found LWC");
            unsubsribe(this.subscription);
            this.subscription = null;
            this.movieData = null;
            alert("Unsubscription complete LWC");
        }
    }
}