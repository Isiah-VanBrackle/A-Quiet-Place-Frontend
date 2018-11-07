import React, { Component, Fragment } from 'react';

import BooksNavBar from '../components/BooksNavBar.js'
import BooksResultsContainer from './BooksResultsContainer.js'
import BookLibrary from '../components/BookLibrary.js'

import gApi from '../google_uris.js'

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksQuery: '',
      books: [],
      myLibrary: []
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
    // .then(books => this.setState({books: books.items}))
    .then(books => {books.items != 0 ? this.setState({books: books.items}) : this.setState({books: []})})

    event.target.reset();
  }

  booksHandleClick = (book) => {
    console.log("I was choosen", book);
    const myLibraryArray = [...this.state.myLibrary, book]
    this.setState({myLibrary: myLibraryArray})
    console.log("My Library", this.state.myLibrary);
  }



  render() {
    console.log(this.state.books);
    return (
      <Fragment>
        <div className="Books">
          <BooksNavBar
            currentUser={this.props.currentUser}
            booksSearchInput={this.booksSearchInput}
            booksHandleSubmit={this.booksHandleSubmit}
          />
          <div id="books-page">
            <BooksResultsContainer books={this.state.books} booksHandleClick={this.booksHandleClick}/>
            <BookLibrary myLibrary={this.state.myLibrary} />
          </div>
        </div>
      </Fragment>
    );
  }

}

export default Books;
