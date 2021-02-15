import React, { Component } from 'react'
import './App.css'
import {getRandomThrow, didUserWin, getImage } from './utils.js'
import throws from './data.js'
import UserThrow from './UserThrow.js'
import Header from './Header.js'

export default class App extends Component {
  state = {
    userThrow: '',
    computerThrow:'',
    computerThrowImage:'./computer.png',
    whoWon:'',
    wins: 0,
    losses:0,
    draws:0,
    totalPlays:0,
  }

  handleClick=(e)=>{
    e.preventDefault();
    let compThrow=getRandomThrow();
    let compImage=getImage(compThrow,throws)
    this.setState({
    computerThrow:compThrow,
    whoWon: didUserWin(this.state.userThrow, compThrow),
    totalPlays: this.state.totalPlays + 1,
    computerThrowImage: compImage
    })
 
  }


  handleChange=(e)=>{
    this.setState({
      userThrow:e.target.value,
      computerThrowImage:'./computer.png',
      whoWon: '',
    })
  }
      
  
  render() {
  

   

    // const computerThrowImage = getImage(this.state.computerThrow, throws)
    
    
    return (
      <div>
        <Header/>
        <div className="set-to-grid">
          <div className="right column">
            <UserThrow currentValue ={this.state.userThrow}
            throws={throws} handleChange={this.handleChange}/>
          </div>

          <div className="middle column">
            <h1 style={{fontSize:'4rem'}}>VS</h1>
            <p className="results">{`${this.state.whoWon}`}</p>
            <button onClick={this.handleClick}>PLAY!</button>
          </div>

          <div className="left column">
          <img className="computer-image"src={this.state.computerThrowImage} alt="computer throw"/>
          {/* <img src={`./${computerThrowImage}`} alt="computer throw"/> */}
          </div>

            {/* <Stats wins={this.state.wins} losses={this.state.losses} draws={this.state.draws}/> */}
        </div>
      </div>
    )
    
  }
}



          
