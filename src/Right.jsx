import React, { Component } from 'react'

export default class Right extends Component {

    render() {
        return (
            <div className='right'>
                <h1>{this.props.rightCount}</h1>
                <button onClick={
                    () => {
                        console.log("Button clicked")
                        this.props.addLeft()
                    }
                } className='increment'>Increment</button>
                <button
                onClick={()=>{
                    this.props.deleteRight()
                }}
                className='decrement'>Decrement</button>
            </div>
        )
    }
}
