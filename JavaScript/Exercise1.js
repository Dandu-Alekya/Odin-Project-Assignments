function book(title, author,noofpages,status){
    this.title=title;
    this.author=author;
    this.noofpages=noofpages;
    this.status=status;
    this.info = function(){
        return title+" by "+author+", "+noofpages+" pages, "+ status;
    }
}

const book1 = new book("The Hobbit","J.R.R Tolien",295, "has read");
console.log(book1.info());