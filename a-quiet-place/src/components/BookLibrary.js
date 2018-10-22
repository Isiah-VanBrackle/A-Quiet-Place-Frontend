import React, { Component } from 'react';

class  BookLibrary extends Component {

  render() {
    return (
      <div>
        {this.props.myLibrary.length}
      </div>
    );
  }

}

export default BookLibrary;
