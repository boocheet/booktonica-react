import React from 'react';
import { Badge, Button } from 'reactstrap';

 const ListNames = (props) => {
  const {listName, listId} = props.list
  return (
    <div>
      <Button  onClick={ () => props.showBooklist(listId, listName)}>
        <Badge color="light">{listName} Book List</Badge>
      </Button>
    </div>
  );
}

export default ListNames
