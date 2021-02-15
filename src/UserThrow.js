import React, { Component } from 'react'
import './App.css'

export default class UserThrow extends Component {
    render() {
        
        const container = {
            display: 'flex',
            flexDirection:'column'
        }
       
        return (

        <div style={container}>

            {this.props.throws.map(throwObject=>(
            
            <label key={throwObject.id}>
              
                <input type="radio" name="rps" onChange={this.props.handleChange} value={throwObject.value} checked={this.props.currentValue === throwObject.value}/>
                
                <img src={throwObject.src} alt="rock"/>
              
            </label>
          ))}
        </div>

        )
    }
}





                         
                         

