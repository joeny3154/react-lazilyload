import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Loading from './Loading'

class LazilyLoad extends Component {
  state = {
    modules: null
  }

  static propTypes = {
    children: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.modules !== this.props.modules) {
      this.load(nextProps)
    }
  }

  load(props) {
    this.setState({ modules: null })
    const { modules } = props
    const keys = Object.keys(modules)
    Promise.all(keys.map(key => modules[key]()))
      .then(values => (keys.reduce((agg, key, index) => {
        agg[key] = values[index]
        return agg
      }, {})))
      .then(
        result => this.setState({modules: result})
      )
  }

  render() {
    if (!this.state.modules) return null
    return React.Children.only(this.props.children(this.state.modules))
  }
}

export const LazilyLoadFactory = (Component, modules) => {
  return (props) => (
    <LazilyLoad modules={modules}>
      {(mods) => <Component {...mods} {...props} />}
    </LazilyLoad>
  )
}

export const importLazy = (promise) => (
  promise.then((result) => result.default)
)

export default LazilyLoad