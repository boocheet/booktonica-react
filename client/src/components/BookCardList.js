import React, { Component } from "react";
import BookCard from "./BookCard";
import { Row } from "reactstrap";

class BookCardList extends Component {
  render() {
    const { books,  selectedBookList, showBooklist, booklists} = this.props;
    let visibleBooklist = books;
    if (selectedBookList) {
      visibleBooklist = visibleBooklist.filter(booklist => booklist.list_id === selectedBookList);
    }
    // console.log(books)
    return (
      <Row>
        {visibleBooklist.map(book => (
          <BookCard key={book.id} book={book} showBooklist={showBooklist}  booklists={booklists} />
        ))}
      </Row>
    );
  }
}

export default BookCardList;
