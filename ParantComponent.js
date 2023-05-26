import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

 class ParantComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parantName: 'Parant'
      }
      this.greetparant= this.greetparant.bind(this)
    }
    
    greetparant(){

    alert(`Hello ${this.state.parantName}`)


    }


  render() {
    return (
      <div>
         <ChildComponent greetHandler={this.greetparant} />
      </div>
    )
  }
}
export default ParantComponent