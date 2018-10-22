import React, { Component } from 'react'
import HomeResults from '../components/HomeResults.js'

export default class HomeResultsContainer extends Component {

  render(){
    return (
      <div className="HomeResultsContainer">
        {this.props.places.map((result) => <HomeResults result={result}/>)}
      </div>
    )
  }
} // this closes export default class HomeResultsContainer extends Component
