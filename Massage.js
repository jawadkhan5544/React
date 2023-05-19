import React, {Component} from "react"
class Massage extends Component{

    constructor(){

      super()
      this.state={
      message:'Welcome Vistor'

      }

    }

  changeMessage(){
        this.setState({
        message:'Congraulatin'
        
        })

  }

render(){

    return (
        <div>
         <h1 >{this.state.message}</h1>
         <button onClick={()=>this.changeMessage()}>Subscribe</button>

         </div>
    )

}


}
export default Massage