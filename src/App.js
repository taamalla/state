import React from 'react'
import {Button} from 'react-bootstrap'
import "./App.css"
import Profile from "./Components/Profile/Profile"
class App extends React.Component{
state={
  show:false
}


  render(){
   
    return (
      <div className="App" >
        <Button variant="secondary" onClick={()=>this.setState({show:!this.state.show})} >show</Button>
     {
       this.state.show &&   <Profile />
     }
      </div>
  
    );
  }
}

export default App

