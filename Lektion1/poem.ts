namespace RandomPoem {

    let subject: string[] = ["Die Katze", "Tante Marianne", "Sabine", "Luca", "Der Bär"];
    let predicate: string[] = ["liebt", "hasst", "mag", "vergöttert", "vertilgt"];
    let object: string[] = ["Bananen", "Erdbeeren", "die Sonne", "den Regen", "die Deutsche Bahn"];
    
    /* console.log(subject);
    console.log(predicate);
    console.log(object); */
    
    for (let i = subject.length; i >= 1; i--) {
    // console.log (i);
    
        console.log(getVerse(subject, predicate, object));
    }  
    
    function getVerse(_subject: string[], _predicate: string[], _object: string[]): string {
    let vers: string = "";
    
    let randomSubject: number = Math.floor(Math.random() * _subject.length);
    let randomPredicate: number = Math.floor(Math.random() * _predicate.length);
    let randomObject: number = Math.floor(Math.random() * _object.length);
    
    vers += _subject.splice(randomSubject, 1) + " ";
    vers += _predicate.splice(randomPredicate, 1) + " ";
    vers += _object.splice(randomObject, 1) + " ";
    
    return vers;
    }
    
    }