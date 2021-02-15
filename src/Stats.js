import React, { Component } from 'react'

export default class Stats extends Component {
    render() {
        return (
            <div>
                <p>Wins: {this.props.wins}</p>
                <p>Losses: {this.props.losses}</p>
                <p>Draws: {this.props.draws}</p>
            </div>
        )
    }
}
