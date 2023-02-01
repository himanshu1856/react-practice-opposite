import './App.css'
import Left from './Left';
import Right from './Right';

import React, { Component } from 'react'

export default class App extends Component {

  state = {
    leftCount : 0,
    rightCount : 0,
  }

  addLeft=()=>{
    this.setState({leftCount : this.state.leftCount + 1})
  }

  deleteLeft=()=>{
    this.setState({leftCount : this.state.leftCount - 1})
  }

  addRight=()=>{
    this.setState({rightCount : this.state.rightCount + 1})
  }

  deleteRight=()=>{
    this.setState({rightCount : this.state.rightCount - 1})
  }

  render() {
    return (
      <div className='app'>
        <Left leftCount={this.state.leftCount}  addRight={this.addRight} deleteLeft={this.deleteLeft}/>
        <Right rightCount={this.state.rightCount} addLeft={this.addLeft} deleteRight={this.deleteRight}/>
      </div>
    )
  }
}