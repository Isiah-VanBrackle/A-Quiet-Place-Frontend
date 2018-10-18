import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import HomeContainer from './containers/HomeContainer.js'
import BooksContainer from './containers/BooksContainer.js'

import results from './yelp_data.js'
import './App.css'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: results
    }
  }

  componentDidMount() {

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
