/**
 * @description       : 
 * @author            : Deepak Pal
 * @group             : 
 * @last modified on  : 01-14-2022
 * @last modified by  : Deepak Pal
**/
({
    publishMovieData: function (component, event, helper) {
        alert("Publishing from Aura");
        let matrixData = {
            MovieId: 'matrix',
            Name : 'The Matrix Revolutions',
            iMDB : 6.8,
            ReleaseDate : '27 October 2003',
            Director : 'Lana Wachowski',
            MovieData: {
                MovieId: 'matrix',
                Name : 'The Matrix Revolutions',
                iMDB : 6.8,
                ReleaseDate : '27 October 2003',
                Director : 'Lana Wachowski'
            },
            SourceOfData:'Aura Publisher'
        };
        component.find("matrixMovieDataId").publish(matrixData);
        alert("Publish complete from AURA");
    }
})
