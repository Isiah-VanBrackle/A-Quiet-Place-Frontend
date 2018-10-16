import React, { Component, Fragment } from 'react';
import BooksNavBar from '../components/BooksNavBar.js'

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksQuery: ''
    }
  }

  booksSearchInput = (event) => {
    console.log("users Input", event.target.value);
    this.setState({booksQuery: event.target.value})
    console.log("state post Input", this.state.booksQuery);
  }

  booksHandleSubmit = (event) => {
    console.log("I was submitted", event.target);
  }

  render() {
    console.log(this.state.query);
    return (
      <Fragment>
        <div className="Books">
          <BooksNavBar
            booksSearchInput={this.booksSearchInput}
            booksHandleSubmit={this.booksHandleSubmit}
          />
          <h1>This should appear once books link is clicked it's where i intend to put all my books data   </h1>
        </div>
      </Fragment>
    );
  }

}

export default Books;
