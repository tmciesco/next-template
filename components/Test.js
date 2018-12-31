import React, { Component } from 'react'
import { Paragraph } from '../base';

export default class Test extends Component {
    constructor(props) {
        super(props)
        this.state = {isToggleOn: true}
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

  render() {
    return (
      <div>
          <Paragraph color={this.state.isToggleOn ? 'success' : 'danger'}>{this.state.isToggleOn ? 'light theme' : 'dark theme'}</Paragraph>
          <button onClick={this.handleClick}>Change Theme</button>
      </div>
    )
  }
}
