import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Topics from '../compoents/Topics'
import LoadAbout from '../compoents/lazilyLoad/LoadAbout'
import LoadHome from '../compoents/lazilyLoad/LoadHome'
import LoadJquery from '../compoents/lazilyLoad/LoadJquery'

class BasicExample extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/jquery">jQuery</Link></li>
          </ul>
    
          <hr/>
    
          <Route exact path="/" component={LoadHome}/>
          <Route path="/about" component={LoadAbout}/>
          <Route path="/topics" component={Topics}/>
          <Route path="/jquery" component={LoadJquery}/>
        </div>
      </Router>
    )
  }
}

export default BasicExample