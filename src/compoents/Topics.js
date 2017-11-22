import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

// import LazilyLoad from '../compoents/commons/LazilyLoad'
import Bundle from '../compoents/commons/Bundle'

import BundleTopic from './bundleLoader/Topic.bundle.js'

// const LoadTopic = (props) => (
//   <LazilyLoad load={() => import('./Topic.js')}>
//     {(Topic) => <Topic {...props}/>}
//   </LazilyLoad>
// )

const Topic = (props) => {
  console.log('Topic props==>', props)
  return (
    <Bundle load={BundleTopic}>
      {(Topic) => <Topic {...props}/>}
    </Bundle>
  )
}

class Topics extends Component {
  render() {
    const { match } = this.props
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/components`}>
              Components
            </Link>
          </li>
          <li>
            <Link to={`${match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>
  
        <Route path={`${match.url}/:topicId`} component={Topic}/>
        {/* <Route path={`${match.url}/:topicId`} component={LoadTopic}/> */}
        <Route exact path={match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    )
  }
  
}

export default Topics