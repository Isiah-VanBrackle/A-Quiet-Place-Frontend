import React, { Component, Fragment } from 'react';

import BooksNavBar from '../components/BooksNavBar.js'
import BooksResultsContainer from './BooksResultsContainer.js'

import gApi from '../google_uris.js'

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksQuery: '',
      books: []
    }
  }

  booksSearchInput = (event) => {
    console.log("users Input", event.target.value);
    this.setState({booksQuery: event.target.value})
    console.log("state post Input", this.state.booksQuery);
  }

  booksHandleSubmit = (event) => {
    event.preventDefault();
    console.log("I was submitted", event.target);
    fetch(`${gApi}volumes?q=${this.state.booksQuery}`)
    .then(resp => resp.json())
    .then(books => this.setState({books: books.items}))
    event.target.reset();
  }

  render() {
    console.log(this.state.books);
    return (
      <Fragment>
        <div className="Books">
          <BooksNavBar
            booksSearchInput={this.booksSearchInput}
            booksHandleSubmit={this.booksHandleSubmit}
          />
          <h1>This should appear once books link is clicked it's where i intend to put all my books data   </h1>
          <BooksResultsContainer books={this.state.books}/>
        </div>
      </Fragment>
    );
  }

}

export default Books;
