import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomeContainer from './containers/HomeContainer.js'
import BooksContainer from './containers/BooksContainer.js'

import results from './yelp_data.js'
import gApi from './google_uris.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: results
    }
  }

  componentDidMount() {
    fetch(`${gApi}volumes?q=Six+of+Crows`)
    .then(resp => resp.json())
    .then(console.log)
  }


  render() {
    console.log(this.state);
    return (
      <Router>
        <div className="App">
          <Route exact path='/' component={HomeContainer}/>
          <Route path='/books' component={BooksContainer}/>
        </div>
      </Router>
    );
  }
}

export default App;
