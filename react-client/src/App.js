import React, { Component } from "react";
import "./App.css";
import { getAllBooks, getBookList, getBooksInList} from "./helpers/booktonica-api-fetcher";
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
      this.setState({ books: books })
    });
    getBookList().then(lists => this.setState({ booklists: lists }));
  }

  selectBookList = (list_id, name) => {
    console.log('app.js selected book list', list_id, this.state.books)
    if(list_id === null){
      getAllBooks().then(books => {
        this.setState({ 
          books: books,
          selectedBookList: list_id 
        })
      });
    }
    getBooksInList(list_id).then(books =>{  
      this.setState({
        selectedBookList: list_id,
        booklistName: name,
        books: books
      })
    })
  }
  render() {
    // console.log(this.state.selectedBookList !== null ? this.state.booklistName : this.state.books.length)
    return (
      <div className="App">
        <Booklists booklists={this.state.booklists} showBooklist={this.selectBookList} />
        <Header booklist={this.state.selectedBookList !== null ? this.state.booklistName : this.state.books.length} />
        <BookCardList books={this.state.books} booklists={this.state.booklists} selectedBookList={this.state.selectedBookList} showBooklist={this.selectBookList.bind(this)}/>
      </div>
    );
  }
}

export default App;