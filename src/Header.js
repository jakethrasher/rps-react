import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        const header ={
            height: '2.3em',
            textAlign:'center',
            marginBottom: '1em'
        }
        const instructions={
            
            fontSize:'2em'
        }
        return (
            <div style={header}>
                <p style={instructions}>Can you beat the computer? Select Rock, Paper, or Scissors and hit play!
                </p>
            </div>
        )
    }
}
