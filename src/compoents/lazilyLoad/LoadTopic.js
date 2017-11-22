import React from 'react'
import Bundle from '../commons/Bundle'
import BundleTopic from '../bundleLoader/Topic.bundle.js'

const LoadTopic = (props) => {
  return (
    <Bundle load={BundleTopic}>
      {(Topic) => <Topic {...props}/>}
    </Bundle>
  )
}

export default LoadTopic