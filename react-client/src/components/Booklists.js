import React, { Component } from "react";
import List from "./List";
import { Row, Button, Badge} from "reactstrap";

class BookLists extends Component {
  render() {
    const { booklists, showBooklist} = this.props;
    return (
      <Row>
        {booklists.map(list => (
          <List key={list.list_id} list={list} showBooklist={showBooklist}/>
        ))}
        <Button outline color="info" onClick={ () => showBooklist(null)}>
          Show All Books 
        </Button>
      </Row>
    );
  }
}

export default BookLists;
