/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-12-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';
import pubsub from 'c/pubSubHost';

export default class PubSubSubscriber extends LightningElement {

    name;
    iMDB;
    releaseDate;
    director;

    connectedCallback() {
        //call register in pubsubhost for matrix
        pubsub.register('matrix', this.handleMovieData.bind(this)); //this = 123
        //pubsub.register('matrix', M1);
        //pubsub.register('matrix', M2);
        //pubsub.register('matrix', M3);
        //pubsub.register('matrix', M4);
        //pubsub.register('matrix', M5);
    }
    //Deepak - 123.abc => M1
    //Liz - 456.abc => M2
    //Begench - 789.abc => M3
    //Betul - 246.abc => M4
    //Sean - 357.abc => M5
    handleMovieData(movieData) {
        alert('The moviedata is received');
        console.log('Name: ',movieData.Name);
        console.log('iMDB: ',movieData.iMDB);
        console.log('ReleaseDate: ',movieData.ReleaseDate);
        console.log('Director: ', movieData.Director);
        this.name = movieData.Name;
        this.iMDB = movieData.iMDB;
        this.releaseDate = movieData.ReleaseDate;
        this.director = movieData.Director;
    }

    disconnectedCallback() {
        console.log('Display1'); //ordering
        pubsub.unregister('matrix', this.handleMovieData.bind(this)); //wash hands
        console.log('Display');
        //drinking
        //eating
        //pubsub.unregister('matrix', M1);
        //pubsub.unregister('matrix', M2);
    }
}