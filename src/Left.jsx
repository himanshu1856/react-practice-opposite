import React, { Component } from 'react'

export default class Left extends Component {

    render() {
        return (
            <div className='left'>
                <h1>{this.props.leftCount}</h1>
                <button onClick={
                    () => {
                        console.log("Button clicked")
                        this.props.addRight()
                    }
                } className='increment'>Increment</button>
                <button
                onClick={()=>{
                    this.props.deleteLeft()
                }}
                className='decrement'>Decrement</button>
            </div>
        )
    }
}
