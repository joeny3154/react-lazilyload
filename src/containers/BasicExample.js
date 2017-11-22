import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Topics from '../compoents/Topics'
import LoadAbout from '../compoents/lazilyLoad/LoadAbout'
import LazilyLoad2, { importLazy } from '../compoents/commons/LazilyLoad2'

const LoadHome = (props) => (
  <LazilyLoad2 modules={{
      Home: () => importLazy(import('../compoents/Home.js')),
      HomeChild: () => importLazy(import('../compoents/HomeChild.js')),
  }}>
  {
    ({ Home, HomeChild }) => {
      return  <Home {...props}><HomeChild/></Home>
    }
  }
  </LazilyLoad2>
)

class BasicExample extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
          </ul>
    
          <hr/>
    
          <Route exact path="/" component={LoadHome}/>
          <Route path="/about" component={LoadAbout}/>
          <Route path="/topics" component={Topics}/>
        </div>
      </Router>
    )
  }
}

export default BasicExample