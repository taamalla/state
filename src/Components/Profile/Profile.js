import React, { Component } from 'react'
import './Profile.css'
import P from './p.jpg'
import { Button, Form } from 'react-bootstrap'


class Profile extends Component {
constructor(props){
    super(props);
    this.state={
      FullName :"Hamza Taamallah",
      Prefession:"WebDevlopper"
    }
   
}
// life cycle
componentDidMount(){
    console.log("component did mount")
}

componentDidUpdate(){
    console.log("component did update")
}
componentWillUnmount(){
    console.log("component will un mount")
}






    render() {
    
        return (
            <div className="ProfileContainer" >
                <h1>This is My porfile :</h1>
                <div className="ProfileContent">
                
                    <h2>{this.state.FullName} </h2>
                    <h2>{this.state.Prefession}</h2>
                    <img src={P} />
                </div>
                
            </div>
            
        )
    }

}
export default Profile
