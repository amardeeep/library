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
    
}
Books.prototype.toggleRead=function(){
    this.read=!this.read;
        
}


//function to clear all divs
function clearDivs(){
    const Divs=document.querySelectorAll('.newDiv');
    Divs.forEach(div=>{
        div.remove();
    })
}

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
        divHeader.innerHTML="Book-"+(i+1);
        divTitle.innerHTML="Title-"+myLibrary[i].title;
        divAuthor.innerHTML="Author-"+myLibrary[i].author;
        divPages.innerHTML="Number of Pages-"+myLibrary[i].pages;
        if(myLibrary[i].read){
            divRead.innerHTML="Status-Finished!";
        }
        else{
            divRead.innerHTML="Status-Reading!"
        }
        newDiv.appendChild(divHeader);
        newDiv.appendChild(divTitle);
        newDiv.appendChild(divAuthor);
        newDiv.appendChild(divPages);
        newDiv.appendChild(divRead);
       
        newDiv.setAttribute("class","newDiv");
        newDiv.setAttribute("data-number",i)
        const removeBtn=document.createElement("button");
        const divButton=document.createElement("div");
        newDiv.appendChild(divButton);
        divButton.appendChild(removeBtn);
        removeBtn.innerHTML="Remove Button";
        removeBtn.setAttribute("class","divButtons");
        removeBtn.addEventListener("click",()=>{
            const indexToBeRemoved=i;
            myLibrary.splice(indexToBeRemoved,1);
            createBooksDiv(myLibrary);

        })
        const status=document.createElement('button');
        status.innerHTML="Book Status";
        status.setAttribute("class","divButtons")
        status.addEventListener("click",()=>{
            myLibrary[i].toggleRead();
            createBooksDiv(myLibrary);
        });
        divButton.appendChild(status);
        
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
    dialog.close();
});

