import React, { Component } from "react";
import "./App.css";
import { getAllBooks, getBookList, addBookToList } from "./helpers/booktonica-api-fetcher";
import BookCardList from './components/BookCardList';
import Booklists from './components/Booklists';
import Header from './components/Header';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      booklists: [],
      selectedBookList: null,
      booklistName: ''
    };
  }
  
  componentDidMount() {
    getAllBooks().then(books => {
      //removes/reduces the duplicate books that belong to many list
      books = Object.values(books.reduce((booklist, book) =>{
        let key = book.book_id
        let listName = book.list_name;
        let listId = book.list_id
        if(key in booklist){
            booklist[key]['listnames'].push({listName: listName, listId: listId})
        } else {
            book['listnames'] = [{listName: listName, listId: listId}]
            booklist[book.book_id] = book
        }
        return booklist
      }, {}));
    // console.log(books)
    this.setState({ books: books })
    });
    getBookList().then(lists => this.setState({ booklists: lists }));
  }

  selectBookList = (list_id, name) => {
    // console.log('selected book list', id)
    this.setState({
      selectedBookList: list_id,
      booklistName: name
    })
  }
  render() {
    // console.log(this.state.selectedBookList !== null ? this.state.booklistName : this.state.books.length)
    return (
      <div className="App">
        <Booklists booklists={this.state.booklists} showBooklist={this.selectBookList} />
        <Header booklist={this.state.selectedBookList !== null ? this.state.booklistName : this.state.books.length} />
        <BookCardList books={this.state.books} booklists={this.state.booklists} selectedBookList={this.state.selectedBookList} showBooklist={this.selectBookList}/>
      </div>
    );
  }
}

export default App;
