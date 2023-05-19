import React from 'react'

// function Greet(){
//     return <h1>Hello this is Statless Function Components</h1>
// 
const Greet= props =>{
 console.log(props)

return (
    <div> <h1>Hello this is stateless ftn using props {props.name} {props.Group}</h1> 
   {props.children}

</div>
)
}
export default Greet