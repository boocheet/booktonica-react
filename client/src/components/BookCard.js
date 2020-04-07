import React, { Component } from "react";
import ListNames from './ListNames'
import {addBookToList} from '../helpers/booktonica-api-fetcher'
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
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
    dropDownOpen: '',
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

  // handleValueChange = (e) => {
  //    this.setState({value: e.target.value})
  //    let bookId = parseInt(e.target.value[0])
  //    let bookListId = parseInt(e.target.value[1])
  //    let book = {bookId: bookId, bookListId: bookListId}
  //      return addBookToList(book).then(savedBook => {
  //        this.setState({ booklist: this.state.booklist(savedBook) });
  //      });
  //    };

  render() {
    let {
      book_id,
      cover_image_url,
      summary,
      title,
      author_name,
      publication_date,
      list_id,
      listnames 
    } = this.props.book;
    // console.log(this.props.book)
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
              {listnames.map(list => {
                return (
                  <ListNames list={list} showBooklist={showBooklist} />
                 
                )
              })}
            </CardSubtitle>
            <CardText>
              <i>{publication_date}</i> - {summary} <br/> 
              <ButtonDropdown >
                <Dropdown isOpen={this.state.dropDownOpen} toggle={this.toggle} >
                  <DropdownToggle color="primary" caret className="dropdown-toggle">
                      Add book To a Book List
                  </DropdownToggle>
                    <DropdownMenu className="bookList">
                      {booklists.map(list => {
                        return (
                            <DropdownItem onClick={this.select} value={[list.list_id, book_id]}>{list.list_name}</DropdownItem>   
                        )
                      })}
                    </DropdownMenu>
                </Dropdown>
              </ButtonDropdown>  
                
            </CardText>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default BookCard;
