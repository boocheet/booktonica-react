import React, { Component } from "react";
import ListNames from "./ListNames";
import {getListBooksBelongTo} from "../helpers/booktonica-api-fetcher";
import { Row, Button, Badge} from "reactstrap";

class BookListForBook extends Component {
  state = {
    listnames: []
  }
  componentDidMount(){
    let id = this.props.book_id
    getListBooksBelongTo(id).then(lists =>{
      // console.log('booklistforbooks', lists)
      this.setState({listnames: lists})
    })
  }
  render() {
    return (
      this.state.listnames.map( (list, i) => {
        return (
          <ListNames key={i} list={list} showBooklist={this.props.showBooklist} />
        )
      })
    )
  }
}

export default BookListForBook;