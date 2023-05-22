import React, { Component } from 'react'

 class Classclick extends Component {
   clickhandler(){
     console.log('You click')

   }

  render() {
    return (
      <div>
        <button onClick={this.clickhandler}> Click this</button>
      </div>
    )
  }
}
export default Classclick