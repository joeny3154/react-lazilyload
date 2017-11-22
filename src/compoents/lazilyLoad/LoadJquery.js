import React from 'react'
import { LazilyLoadFactory } from '../commons/LazilyLoad2'

const JqueryDemo = (props) => (
  <div ref={ref => props.$(ref).css('background-color', 'red')}>
    JqueryDemo
  </div>
)


export default LazilyLoadFactory(JqueryDemo, {
  $: () => import('jquery')
})