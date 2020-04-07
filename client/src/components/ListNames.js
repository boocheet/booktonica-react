import React from 'react';
import { Badge, Button } from 'reactstrap';

 const ListNames = (props) => {
  const {list_name, list_id} = props.list
  // console.log('listNames', props)
  return (
    <div>
      <Button outline color='info' onClick={ () => props.showBooklist(list_id, list_name)}>
        {list_name} Book List
      </Button>
    </div>
  );
}

export default ListNames
