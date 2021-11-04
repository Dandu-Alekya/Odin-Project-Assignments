function book(title, author,noofpages,status){
    this.title=title;
    this.author=author;
    this.noofpages=noofpages;
    this.status=status;
    this.info = function(){
        return tittle+" by "+author+", "+noofpages+" pages, "+ status;
    }
}
