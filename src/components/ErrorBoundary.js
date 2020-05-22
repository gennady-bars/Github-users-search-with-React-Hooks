import React, { Component } from 'react'

export default class ErrorBoundary extends Component {

  state = {
    hasError: false
  }
    render() {

      if (this.state.hasError) {
        return <h1>Something went wrong!!!</h1>
      }
      return this.props.children
    }
}