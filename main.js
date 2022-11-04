let collection = []
let section = ['title','author', 'pages','read']
function Book(t,a,p,r){
    this.title = t
    this.author = a
    this.pages = p
    this.read = r
}

function addBook(){
    var a = document.querySelector('#title').value
    var b = document.querySelector('#author').value
    var c = document.querySelector('#page').value
    var d = document.querySelector('#read').checked
    var book = new Book(a, b, c, d)
    collection.push(book)
    var card = document.createElement('div')
    card.classList.add('card')
    for (i in section){
        let key = book[section[i]]
        const text = document.createElement('p')
        text.classList.add(section[i])
        text.textContent = section[i] + ': '+ key
        card.appendChild(text)
    }
    var r = document.createElement('button')
    var remove = document.createElement('button')
    r.innerHTML = 'READ?'
    r.addEventListener('click', function(){
        var read = document.querySelector('.read')
        if (read.innerHTML == 'read: true'){
            read.innerHTML = 'read: false'
            book['read'] = false
        }else{
            read.innerHTML = 'read: true'
            book['read'] = true
        }
    })
    remove.innerHTML = 'REMOVE?'
    remove.setAttribute('onclick','this.parentNode.parentNode.removeChild(this.parentNode);')
    remove.style.marginLeft = '10px'
    card.appendChild(r)
    card.appendChild(remove)
    div.appendChild(card)
}

var div = document.querySelector('.collection')
for (let i in collection){
    var card = document.createElement('div')
    card.classList.add('card')
    for (let j in section){
        let key = i[j]
        const text = document.createElement('p')
        text.textContent = j + ': '+ key
        card.appendChild(text)
    }
    var r = document.createElement('button')
    var remove = document.createElement('button')
    r.setAttribute('onclick','readtoggle()')
    remove.setAttribute('onclick','this.parentNode.parentNode.removeChild(this.parentNode);')
    card.appendChild(r)
    div.appendChild(card)
}