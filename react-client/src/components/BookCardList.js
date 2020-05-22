import React, { Component } from "react";
import BookCard from "./BookCard";
import { Row } from "reactstrap";
import {getBooksInList} from "../helpers/booktonica-api-fetcher"

class BookCardList extends Component {
  componentDidMount(){
    console.log('bookCardlist.js props:', this.props)
    getBooksInList()
  }
  render() {
    const { books,  selectedBookList, showBooklist, booklists} = this.props;
    let visibleBooklist = books;
  
    // console.log(books)
    return (
      <Row>
        {visibleBooklist.map(book => (
          <BookCard key={book.book_id} book={book} showBooklist={showBooklist}  booklists={booklists} />
        ))}
      </Row>
    );
  }
}

export default BookCardList;
