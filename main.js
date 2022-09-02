class Book{
  constructor(title,author,isbn){
  this.title = title;
  this.author= author;
  this.isbn  = isbn;
}
}

class UI{
      
    
      
    static addBookToList(book){
    const list = document.querySelector("#book-list");
    const row  =document.createElement(`tr`)
    row.innerhtml =`
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a herf = "#" class ="btn btn-danger btn-sm delete">X</a></td>
     `
    // console.log(row)
    list.appendChild(row);
}
static clearAllFields(){
   document.getElementById("title").value ="" ;
   document.getElementById("author").value ="";
   document.getElementById("isbn").value ="";

}
static showalert(msg,className){
  const div = document.createElement("div")
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(msg));
  const container = document.querySelector(".container")
  const form = document.querySelector("#book-form")
  container.insertBefore(div,form)
  setTimeout(()=>{
    document.querySelector(".alert").remove()
  },3000)
}
    static deleteBook(el){
      if(el.classList.contains("delete")){
            if(confirm("Are you sure you want to delete this book")){
              console.log(el.parentElement)
            }
      }
    }
  }
class Store{


}

// Event Add a Book
  document.querySelector("#book-form").addEventListener("submit",(e)=>{e.preventDefault()

const title = document.getElementById("title").Value;
const author = document.querySelector("#author").Value;
const isbn = document.querySelector("#isbn").Value;
// console.log(title,author,isbn)
// const Book = new Book(title,author,isbn)
// console.log(Book)

// console.log("Akhlesh")
if(author=="" || isbn=="" || title==""){
     UI.showalert("Please fill All the Fields","danger")

}else{

  const book =  new Book(title,author,isbn)
  UI.addBookToList(book)
  UI.clearAllFields()
  UI.showalert("Book Added Succesfully","success")
}
  })
 
// Event Delete a  book
document.querySelector("#book-list").addEventListener("click",(e)=>{


  UI.deleteBook(e.target)
})
