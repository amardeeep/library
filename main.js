//array to store the obejcts created
const myLibrary=[];


function addBookToLibrary(bookObject){
    myLibrary.push(bookObject);
    return myLibrary;
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
//create sample book objects to check working of for loop
/*const book1= new Books("title1","author1","pages1",true);
const book2= new Books("title2","author2","pages2",false);
addBookToLibrary(book1);
addBookToLibrary(book2);*/
//function to clear all divs
function clearDivs(){
    const Divs=document.querySelectorAll('.newDiv');
    Divs.forEach(div=>{
        div.remove();
    })
}
/*
function removeBtn(){
    const divs=document.querySelectorAll('.newDiv');
    divs.forEach(div=>{
        const removeBtn=document.createElement('button');
        removeBtn.innerHTML="Remove Button";
        div.appendChild(removeBtn);
        removeBtn.addEventListener("click",()=>{
            const indexToBeRemoved=div.dataset.number;
            myLibrary.splice(indexToBeRemoved,1);
            createBooksDiv(myLibrary);
    
        })
    });
    }*/
//create a loop to iterate through array and display it on a div.
const cardsDiv=document.querySelector(".cards");
function createBooksDiv(myLibrary){
    clearDivs();
    for(let i=0;i<myLibrary.length;i++){
        const newDiv= document.createElement('div');
        cardsDiv.appendChild(newDiv);
        const divTitle= document.createElement('h3');
        const divAuthor= document.createElement('h3');
        const divPages= document.createElement('h3');
        const divRead= document.createElement('h3');
        const divHeader=document.createElement('h1');
        divHeader.innerHTML="Book"+i;
        divTitle.innerHTML=myLibrary[i].title;
        divAuthor.innerHTML=myLibrary[i].author;
        divPages.innerHTML=myLibrary[i].pages;
        divRead.innerHTML=myLibrary[i].read;
        newDiv.appendChild(divHeader);
        newDiv.appendChild(divTitle);
        newDiv.appendChild(divAuthor);
        newDiv.appendChild(divPages);
        newDiv.appendChild(divRead);
        /*divAuthor.dataset.author=myLibrary[i].author;
        divTitle.dataset.title=myLibrary[i].title;
        divPages.dataset.pages=myLibrary[i].pages;
        divRead.dataset.read=myLibrary[i].pages;*/
        newDiv.setAttribute("class","newDiv");
        newDiv.setAttribute("data-number",i)
        const removeBtn=document.createElement("button");
        newDiv.appendChild(removeBtn);
        removeBtn.innerHTML="Remove Button";
        removeBtn.addEventListener("click",()=>{
            const indexToBeRemoved=i;
            myLibrary.splice(indexToBeRemoved,1);
            createBooksDiv(myLibrary);

        })
        const status=document.createElement('button');
        status.innerHTML="Book Status";
        status.addEventListener("click",()=>{
            myLibrary[i].read=!myLibrary[i].read;
            createBooksDiv(myLibrary);
        })
        newDiv.appendChild(status);
        
    }
}

//create NEW BOOK button that displays a modal dialog form that takes input to generate a book object
const dialog= document.querySelector("dialog");
const newBtn= document.querySelector(".newBook");
const closeBtn= document.querySelector(".cancel");
const form=document.querySelector("form");
newBtn.addEventListener("click",()=>{
    dialog.showModal();
})
/*closeBtn.addEventListener("click",()=>{
    dialog.close("No book details were submitted");
})*/
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const title=form.name.value;
    const author=form.author.value;
    const pages=form.pages.value;
    const read=form.read.value;
    const newbook=new Books(title,author,pages,read); 
    createBooksDiv(addBookToLibrary(newbook));
});
Books.prototype.readStatus=function(){

    
}

