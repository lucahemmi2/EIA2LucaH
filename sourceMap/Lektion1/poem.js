"use strict";
var RandomPoem;
(function (RandomPoem) {
    let subject = ["Die Katze", "Tante Marianne", "Sabine", "Luca", "Der Bär"];
    let predicate = ["liebt", "hasst", "mag", "vergöttert", "vertilgt"];
    let object = ["Bananen", "Erdbeeren", "die Sonne", "den Regen", "die Deutsche Bahn"];
    /* console.log(subject);
    console.log(predicate);
    console.log(object); */
    for (let i = subject.length; i >= 1; i--) {
        // console.log (i);
        console.log(getVerse(subject, predicate, object));
    }
    function getVerse(_subject, _predicate, _object) {
        let vers = "";
        let randomSubject = Math.floor(Math.random() * _subject.length);
        let randomPredicate = Math.floor(Math.random() * _predicate.length);
        let randomObject = Math.floor(Math.random() * _object.length);
        vers += _subject.splice(randomSubject, 1) + " ";
        vers += _predicate.splice(randomPredicate, 1) + " ";
        vers += _object.splice(randomObject, 1) + " ";
        return vers;
    }
})(RandomPoem || (RandomPoem = {}));
