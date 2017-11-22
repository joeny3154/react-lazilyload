import React from 'react'
import LazilyLoad2, { importLazy } from '../commons/LazilyLoad2'

const LoadHome = (props) => (
  <LazilyLoad2 modules={{
      Home: () => importLazy(import('../Home.js')),
      HomeChild: () => importLazy(import('../HomeChild.js')),
  }}>
  {
    ({ Home, HomeChild }) => {
      return  <Home {...props}><HomeChild/></Home>
    }
  }
  </LazilyLoad2>
)

export default LoadHome