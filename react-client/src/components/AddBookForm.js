import React, {Component} from 'react';

class AddBookForm extends Component {
  state = {
    value: ''
  };

  handleValueChange = (e) => {
    this.setState({value: e.target.value})
  }

  render(){
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleValueChange}
          placeholder="Enter a book's name"
        />

        <input
          type="submit"
          value="Add Book"
        />
      </form>
    )
  }
}

export default AddBookForm