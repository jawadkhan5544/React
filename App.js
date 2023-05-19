
import React, { Component }  from 'react';
import logo from './logo.svg';
import './App.css';
// import Greet from './component/Greet';
// import State from './component/State';
// import Hello from './component/Hello';
import Massage from './component/Massage';


class App extends Component{

render(){
  return (
    <div className="App">
       {/* <Greet name="jawad" Group="Red">
        <p>This is children descripation</p>
       </Greet>
       <Greet name="babar" Group="Yellow" >
       <button>Action</button>
       </Greet>

       <Greet name="Mustafa" Group="Green"/>
      <State name="jawad" Group="Red"/>
      <State name="jawad" Group="blue"/>
      <State name="jawad" Group="green"/> */}
      {/* <Hello /> */} 

      <Massage />
    
    </div>
  );
}
}


export default App;
