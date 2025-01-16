const myLibrary = []
class Book {
    constructor(name, author, pages, read){
        this.name = name
        this.author = author
        this.pages = pages
        this.read = read
    }
}

const tableData = document.querySelector("#data_table tbody")

function display_book(book) {
    const row = document.createElement("tr")

    const name_cell = document.createElement("td")
    name_cell.textContent = book.name
    row.appendChild(name_cell)

    const author_cell = document.createElement("td")
    author_cell.textContent = book.author
    row.appendChild(author_cell)

    const pages_cell = document.createElement("td")
    pages_cell.textContent = book.pages
    row.appendChild(pages_cell)

    const read_cell = document.createElement("td")
    read_cell.textContent = book.read ? "Yes": "No"
    row.appendChild(read_cell)

    const change_cell = document.createElement("td")
    const change_btn = document.createElement("button")
    change_btn.textContent = "Change (Yes/No)"
    change_btn.addEventListener("click", function(event) {
        book.read = !book.read
        read_cell.textContent = book.read ? "Yes": "No"
    })
    change_cell.appendChild(change_btn)
    row.appendChild(change_cell)


    const delete_cell = document.createElement("td")
    const delete_btn = document.createElement("button")
    delete_btn.textContent = "Remove"
    delete_btn.addEventListener("click", function(event) {
        row.remove()
        const index = myLibrary.indexOf(book)
        if(index > -1){
            myLibrary.slice(index, 1)
        }
    })
    delete_cell.appendChild(delete_btn)
    row.appendChild(delete_cell)

    tableData.appendChild(row) 
}

const book_1 = new Book("Thus spoke Zarathustra", "Friendrich Nietzsche", 352, true)
const book_2 = new Book("Capitalist realism: IS there no Alternative", "Mark Fisher", 81, false)
const book_3 = new Book("Discipline and Punish: The birth of the prison", "Micheal Foucault", 333, true)


myLibrary.push(book_1, book_2, book_3)

for(let i = 0; i < myLibrary.length; i++) {
    display_book(myLibrary[i])
}

document.getElementById("book_info").addEventListener("submit", function(event){
    event.preventDefault()

    const name = document.getElementById("name").value
    const author = document.getElementById("author").value
    const pages = document.getElementById("pages").value
    const read = document.getElementById("read").checked

    const new_book = new Book(name, author, pages, read)

    console.log(read)

    myLibrary.push(new_book)
    display_book(new_book)

    document.getElementById("book_info").reset()
})