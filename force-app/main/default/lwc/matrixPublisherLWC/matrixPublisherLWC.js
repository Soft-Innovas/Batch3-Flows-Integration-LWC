/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-14-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import MATRIX_MOVIE_DATA from '@salesforce/messageChannel/MatrixMovieData__c';

export default class MatrixPublisherLWC extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handlePublish(event) {
        alert('LWC Publish about to happen');
        let matrixData = {
            MovieId: 'matrix',
            Name : 'The Matrix Reloaded',
            iMDB : 7.2,
            ReleaseDate : '15 May 2003',
            Director : 'Lana Wachowski',
            MovieData: {
                MovieId: 'matrix',
                Name : 'The Matrix Reloaded',
                iMDB : 7.2,
                ReleaseDate : '15 May 2003',
                Director : 'Lana Wachowski'
            },
            SourceOfData:'LWC Publisher'
        };
        publish(this.messageContext, MATRIX_MOVIE_DATA, matrixData);
        alert('LWC Publish completed');
    }
}