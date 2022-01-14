/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-09-2022
 * @last modified by  : Deepak Pal
**/
import { LightningElement } from 'lwc';

export default class LwcEventChild extends LightningElement {
    handleButtonClick() {
        alert('The child component will now dispatch matrixresurrections event');
        let matrixData = {
            Name : 'The Matrix Resurrections',
            iMDB : 5.7,
            ReleaseDate : '22 December 2021',
            Director : 'Lana Wachowski'
        };
        let customEvent = new CustomEvent(
            'matrixresurrections',
            {
                detail : matrixData
            }
        );
        //By default: bubbles = false; composed=false
        //Only way to catch the events is the parent component where we add child component
        //this  = c-lwc-event-child
        this.dispatchEvent(customEvent);
        //c-lwc-event-child.dispatchEvent();
    }
}