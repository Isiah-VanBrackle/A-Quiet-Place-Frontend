import React, { Component } from 'react'
import BookLibrary from '../components/BookLibrary.js'

export default class BooksLibraryContainer extends Component {
  render() {
    return(
      <div>
        <BookLibrary myLibrary={this.props.myLibrary} />
      </div>
    )
  }

} // This closes export default class BooksLibraryContainer extends Component
