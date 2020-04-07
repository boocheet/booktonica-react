import React from 'react';
import { Badge, Button } from 'reactstrap';

const List = (props) => {
  const {list_name, list_id} = props.list
  return (
    <div>
      <Button  color="info" onClick={ () => props.showBooklist(list_id, list_name)}>
        <Badge color="secondary">{list_name} Book List</Badge>
      </Button>
    </div>
  );
}

export default List;