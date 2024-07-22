// Define your Book class here:
class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
       this.title = title;
       this.author = author;
       this.copyright = copyright;
       this.isbn = isbn;
       this.pages = pages;
       this.timesCheckedOut = timesCheckedOut;
       this.discarded = discarded;
    }
    checkout(uses=1) {
        this.timesCheckedOut += uses;
     }
  }  

// Define your Manual and Novel classes here:

class Manual extends Book {
    constructor (title, author, copyrightDate, isbn, numPages, 
        numCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numPages, 
            numCheckedOut, discarded); 
    }
    discardOldManuals () {
    if(this.copyrightDate < 2019){
        this.discarded = 'Yes';
    }
    return this.discarded;
    }
}

class Novel extends Book {
    constructor (title, author, copyrightDate, isbn, numPages, 
        numCheckedOut, discarded) {
        super(title, author, copyrightDate, isbn, numPages, 
            numCheckedOut, discarded);
    }
    over100CheckedOut () {
    if(this.numCheckedOut > 100) {
        this.discarded = "Yes";
    }    
    }
}


// Declare the objects for exercises 2 and 3 here:

let prideNPrejudice = new Novel('Pride and Prejudice','Jane Austen',
1813,1111111111111,432,32,"No");

let makingTheShip = new Manual('Top Secret Shuttle Building Manual', 'Redacted', 2013, '0000000000000', 1147, 1, 'No');


// Code exercises 4 & 5 here:

//console.log(makingTheShip.discardOldManuals());
//console.log(prideNPrejudice.checkOut(5));

goodRead.checkout(5);
goodRead.dispose();