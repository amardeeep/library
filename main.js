//array to store the obejcts created
const myLibrary=[];
function Book(){

}

function addBookToLibrary(bookObject){
    myLibrary.push(bookObject);
}
//objectConstructor
function Books(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){
        if(this.read==true){
            return this.title+" by "+this.author+", read."
        }
        else{
            return this.title+" by "+this.author+", not read yet."
        }
    }
}