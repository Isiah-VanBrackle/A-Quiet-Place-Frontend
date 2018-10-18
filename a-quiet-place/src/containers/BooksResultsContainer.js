import React, { Component } from 'react';
import BookResults from '../components/BookResults.js'

export default class BooksResultsContainer extends Component {
// map here

  render(){
    return (
      <div className="BooksResultsContainer">
        {this.props.books.map((book) => <BookResults key={book.id} book={book}/>)}
      </div>
    )
  }
} // this closes export default class BooksResultsContainer extends Component
