import React from 'react';
import { Badge, Button } from 'reactstrap';

const List = (props) => {
  const {list, list_name, list_id} = props.list
  return (
    <div>
      <Button  outline color="info" onClick={ () => props.showBooklist(list_id, list_name)}>
       {list_name} Book List
      </Button>
    </div>
  );
}

export default List;