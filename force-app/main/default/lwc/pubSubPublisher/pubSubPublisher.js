/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-13-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import pubsub from 'c/pubSubHost'; 

export default class PubSubPublisher extends LightningElement {
    //netflix is the publisher
    handleMoviePublish(event) {
        let matrixData = {
            MovieId: 'matrix',
            Name : 'The Matrix Resurrections',
            iMDB : 5.7,
            ReleaseDate : '22 March 2022',
            Director : 'Lana Wachowski'
        };
        alert('the movie matrix event wil now be fired');
        pubsub.fire('matrix', matrixData);
    }

    //netflix is the publisher
    handleVenomPublish(event) {
        let matrixData = {
            Name : 'Venom',
            iMDB : 7.7,
            ReleaseDate : '22 March 2022',
            Director : 'XYZ ABC'
        };
        pubsub.fire('venom', matrixData);
    }
}