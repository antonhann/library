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
    changeRead(){
        var readHTML = document.querySelector('.read' +this.id)
        if(this.read == true){
            this.read = false
            
        }else{
            this.read = true
        }
        readHTML.innerHTML = 'read: ' + this.read
    }
    removeBook(){
        myLibrary.splice(this.id, 1)
    }
}

var div = document.querySelector('.myLibrary')
var submit = document.querySelector('.display')
var form = document.querySelector('.popup')
submit.addEventListener('click', () => { 
    //form popus
    form.style.display = 'block'
    submit.style.display = 'none'
});

function addBook(){
    //form pops back
    form.style.display = 'none'
    submit.style.display = 'block'

    //stores the user's data
    var title = form.querySelector('#title').value
    var author = form.querySelector('#author').value
    var pages = form.querySelector('#page').value
    var readStatus = form.querySelector('#read').checked
    var book = new Book(title, author, pages, readStatus, count)
    myLibrary.push(book)

    //creates card to display the book
    var card = document.createElement('div')
    card.classList.add('card')
    
    //iterate through the form options and displays it on the card
    for (i in section){
        let key = book[section[i]]
        const text = document.createElement('p')
        text.classList.add(section[i] + count)
        text.textContent = section[i] + ': '+ key
        card.appendChild(text)
    }

    //my change readButton
    var readButton = document.createElement('button')
    readButton.innerHTML = 'READ?'
    readButton.addEventListener('click', () => {
        book.changeRead()   
    });

    //remove book button
    var removeButton = document.createElement('button')
    removeButton.innerHTML = 'REMOVE?'
    removeButton.setAttribute('onclick','this.parentNode.parentNode.removeChild(this.parentNode);')
    removeButton.addEventListener('click', ()=>{
        book.removeBook()
    })

    //finally adding the buttons to the card
    card.appendChild(readButton)
    card.appendChild(remove)
    div.appendChild(card)
}