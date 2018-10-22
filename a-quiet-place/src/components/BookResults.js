import React from 'react';
import {Card, CardTitle, Col} from 'react-materialize'

const BookResults = (props) => {
  console.log("book results", props.book.volumeInfo.title);
// make individual books here
// props.book.volumeInfo.imageLinks.smallThumbnail
  return(
    // <div className="card">
    //   <div className="card-image waves-effect waves-block waves-light">
    //     <img className="activator" src={"images/office.jpg"} alt={props.book.volumeInfo.title}/>
    //   </div>
    //   <div className="card-content">
    //     <span className="card-title activator grey-text text-darken-3">Book Title: {props.book.volumeInfo.title} <i className="material-icons right">description</i></span>
    //       Author: {props.book.volumeInfo.authors[0]}
    //       <p><a href="#">This is a link</a></p>
    //   </div>
    //   <div className="card-reveal">
    //     <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
    //     <p>{props.book.volumeInfo.description}</p>
    //   </div>
    // </div>
    <div className="card">
      <Card header={<CardTitle reveal image={props.hasImage(props)} waves='light'/>}
        title={props.book.volumeInfo.title}
        reveal={
          <p>
            Average rating: {props.book.volumeInfo.averageRating}
            <br/>
            {props.hasSnippet(props)}
            <br/>
            <a className="btn-floating btn-tiny waves-effect waves-light right blue-grey" onClick={() => props.booksHandleClick(props.book.volumeInfo)}><i className="material-icons right small">add</i></a>
          </p>
        }>
        <p className="author">Author: {
          props.hasAuthor(props)
        }</p>
      </Card>
    </div>
    // <Col m={7} s={12}>
    //   <Card horizontal header={<CardTitle image={props.book.volumeInfo.imageLinks.smallThumbnail}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
    //     <p>I am a very simple card. I am good at containing small bits of information</p>
    //   </Card>
    // </Col>
  )
}

export default BookResults
