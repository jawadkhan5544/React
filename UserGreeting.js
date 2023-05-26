import React, { Component } from 'react'

 class UserGreeting extends Component {

      constructor(props) {
        super(props)
      
        this.state = {
           isLoggedIn: true
        }
      }
      
    


  render(){
    let message
    if(this.state.isLoggedIn){
    return (
   
      message= <div>  Welcome Brother:</div>
    )
  }
  else {
    return( 
    
  message=  <div> Welocme Ahmad:</div>
    )
  }
  
}}
export default UserGreeting