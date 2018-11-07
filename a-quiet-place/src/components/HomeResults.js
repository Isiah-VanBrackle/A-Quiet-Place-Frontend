import React from 'react'
import {Card, CardTitle, Col} from 'react-materialize'

const HomeResults = (props) => {

  return (
    <div>
      <Card header={<CardTitle reveal image={props.result.store_image} waves='light'/>}
        title={props.result.name}
        reveal={
          <p>
            Average rating: {props.result.rating}
            <br/>
            {props.result.comment}
            <br/>
            <a className="btn-floating btn-tiny waves-effect waves-light right blue-grey"><i className="material-icons right small">bookmark</i></a>
          </p>
        }>
        <p className="address"> {
          props.result.address
        }</p>
      </Card>
      {/* <Col m={7} s={12}>
        <Card horizontal header={<CardTitle image={props.result.store_image}></CardTitle>} actions={[<a href='#'>This is a link</a>]}>
          <ul>
        <li>{props.result.name}</li>
        <li>{props.result.address}</li>
        <li>{props.result.rating}</li>
        <li>{props.result.comment}</li>
          </ul>
        </Card>
      </Col> */}
    </div>
  )
}

export default HomeResults;
