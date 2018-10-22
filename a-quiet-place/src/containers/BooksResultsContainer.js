import React, { Component } from 'react';
import BookResults from '../components/BookResults.js'

export default class BooksResultsContainer extends Component {


  hasAuthor = (props) => {
    if(props.book.volumeInfo.authors){
      return props.book.volumeInfo.authors[0]
    }else{
      return "unknown"
    }
  }

  hasImage = (props) => {
    if(props.book.volumeInfo.imageLinks){
      return props.book.volumeInfo.imageLinks.thumbnail
    }else{
      return "https://mycarlady.com/wp-content/uploads/2016/07/Page-Not-Found-18.jpg"
    }
  }

  hasSnippet = (props) => {
    if(props.book.searchInfo){
      return props.book.searchInfo.textSnippet
    }else{
      return "No information could be found about this book in the known universe, try a parallel one."
    }
  }

  render(){
    return (
      <div className="BooksResultsContainer">
        {this.props.books  ?
          this.props.books.map((book) => <BookResults key={book.id} book={book} hasAuthor={this.hasAuthor} hasImage={this.hasImage} hasSnippet={this.hasSnippet} booksHandleClick={this.props.booksHandleClick}/>)
        :
        <div> NO BOOKS</div>
        }

      </div>
    )
  }
} // this closes export default class BooksResultsContainer extends Component
