import React, { Component } from 'react';

class  BookLibrary extends Component {

  render() {
    return (
      <div className="librayDisplay">
        {this.props.myLibrary.length}
        <div className="libraryImage">
          <img src={"https://st3.depositphotos.com/5338056/18224/v/1600/depositphotos_182243254-stock-illustration-hand-drawn-books-bookshelf-background.jpg"}/>
        </div>
      </div>
    );
  }

}

export default BookLibrary;
