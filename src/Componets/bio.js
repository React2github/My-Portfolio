import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./styles/bio.css";
import img from "./images/profile.jpg";

class Bio extends Component {
    state = {  }
    render() { 
        return ( 
 <div className="jumbotron">
     <img src={img} alt="profile pic"></img>
    <h1 className="display-4">Abdella Shukur</h1>
    <p className="lead">A builder and student of technology</p>
    <p>Atlanta, GA | Full-stack developer</p>
    <a className="btn btn-primary btn-lg" href="/Projects" role="button">Learn more</a>
</div> 
 );
    }
}
 
export default Bio;