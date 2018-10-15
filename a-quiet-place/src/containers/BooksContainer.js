import React, { Component } from 'react';

import BooksNavBar from './BooksNavBar.js'
class Books extends Component {

  render() {
    return (
      <div className="Books">
        <BooksNavBar />
        <h1>This should appear once books link is clicked it's where i intend to put all my books data   </h1>
      </div>
    );
  }

}

export default Books;
