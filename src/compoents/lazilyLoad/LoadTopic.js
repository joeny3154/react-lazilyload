import React from 'react'
import LazilyLoad from '../commons/LazilyLoad'

const LoadTopic = (props) => (
  <LazilyLoad load={() => import('../Topic.js')}>
    {
      (Topic) => <Topic {...props}/>
    }
  </LazilyLoad>
)


export default LoadTopic