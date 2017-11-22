import React from 'react'
import LazilyLoad from '../commons/LazilyLoad'

const LoadAbout = (props) => (
  <LazilyLoad load={() => import('../About.js')}>
    {
      (About) => <About {...props}/>
    }
  </LazilyLoad>
)


export default LoadAbout