import React, {Component} from "react"
class State extends Component{
render(){

   const{name,Group}=this.props
    return <h1>This is state ftn using props {name} and {Group}   </h1>
}


}
export default State