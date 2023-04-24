// import uniqid from "uniqid";
let myLibrary = []
let count = 0
let section = ['title','author', 'pages','read']
class Book {
    constructor(title, author, pages, read, id){
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.id = id
    }
}

var div = document.querySelector('.collection')
var submit = document.querySelector('.display')
var form = document.querySelector('.popup')
submit.addEventListener('click', () => { 
    //form popus
    form.style.display = 'block'
    submit.style.display = 'none'
});
const removeBook = (id) => {
    count -= 1
    for(let i = id; i < myLibrary.length; i++){
        myLibrary[i].id -= 1
    }
    myLibrary.splice(id,1)
    // console.log(id)
    // console.log(myLibrary)
    resetLibrary()
}
const changeRead = (id) => {
    for(let i  = 0; i < myLibrary.length; i++){
        if(myLibrary[i].id === id){
            myLibrary[i].read = !myLibrary[i].read
            break
        }
    }
    // console.log(myLibrary)
    resetLibrary()
}

const resetBooks = () => {
    
}
function addBook(){
    //form pops back
    form.style.display = 'none'
    submit.style.display = 'block'

    //stores the user's data
    var title = form.querySelector('#title').value
    var author = form.querySelector('#author').value
    var pages = form.querySelector('#page').value
    var readStatus = form.querySelector('#read').checked
    var id = count
    count += 1
    var book = new Book(title, author, pages, readStatus, id)
    myLibrary.push(book)
    resetLibrary()
}

function resetLibrary(){
    var collection = document.querySelector(".collection")
    collection.textContent = ''
    let index = 0
    myLibrary.forEach(book => {
        var card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('id', index)
        //iterate through the form options and displays it on the card
        for (i in section){
            let key = book[section[i]]
            const text = document.createElement('p')
            // text.classList.add(section[i] + count)
            text.textContent = section[i] + ': '+ key
            card.appendChild(text)
        }
    
        //my change readButton
        var readButton = document.createElement('button')
        readButton.innerHTML = 'READ?'
        readButton.addEventListener('click', () => {
            changeRead(book.id)
        });
    
        //remove book button
        var removeButton = document.createElement('button')
        removeButton.innerHTML = 'REMOVE?'
        removeButton.addEventListener('click', () => {
            removeBook(book.id)
        });
        //finally adding the buttons to the card
        card.appendChild(readButton)
        card.appendChild(removeButton)
        div.appendChild(card)

    })
}