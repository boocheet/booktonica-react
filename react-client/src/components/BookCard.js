import React, { Component } from "react";
// import ListNames from './ListNames'
import BookListForBook from './BookListForBook'
import {addBookToList} from '../helpers/booktonica-api-fetcher'
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  ButtonDropdown, 
  DropdownItem, 
  DropdownMenu, 
  DropdownToggle, 
  Dropdown
} from "reactstrap";

/**
 * Learn more about reactstrap Card component
 * https://reactstrap.github.io/components/card/
 */
class BookCard extends Component {
  state = {
    booklist: null,
    dropDownOpen: false,
  };

  toggle = () => {
    this.setState({
       dropDownOpen: !this.state.dropDownOpen,
    })
  }

  select = (e) => {
    // console.log('e.val', e.target.value, 'book_id', e.target.value[2], 'list_id', e.target.value[0])
    let list_id = parseInt(e.target.value[0])
    let book_id = parseInt(e.target.value[2])
    let addBook = {book_id: book_id, list_id: list_id}
    return addBookToList(addBook).then(() => window.location.reload())
  }

  render() {
    let {
      book_id,
      cover_image_url,
      summary,
      title,
      author_name,
      publication_date,
      listnames 
    } = this.props.book;
    console.log('bookCard.js:', booklists)
    const {showBooklist, booklists} = this.props;
    return (
      <Col xs="4">
        <Card>
          <CardImg
            className="bookCover"
            src={cover_image_url}
            alt="Book cover"
          />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{author_name}</CardSubtitle>
            <CardSubtitle> 
              book_lists: 
              <BookListForBook book_id={book_id} showBooklist={showBooklist} />
            </CardSubtitle>
              <i>{publication_date}</i> - {summary} <br/> 
              <ButtonDropdown >
                <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} >
                  <DropdownToggle color="info" caret className="dropdown-toggle">
                      Add book To a Book List
                  </DropdownToggle>
                    <DropdownMenu className="bookList">
                      {booklists.map((list, i) => {
                        return (
                            <DropdownItem key={i} onClick={this.select} value={[list.list_id, book_id]}>{list.list_name}</DropdownItem>   
                        )
                      })}
                    </DropdownMenu>
                </Dropdown>
              </ButtonDropdown>  
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default BookCard;
