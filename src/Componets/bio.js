import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./styles/bio.css";

class Bio extends Component {
    state = {  }
    render() { 
        return ( 
 <div className="jumbotron" id="Home">
     <img src={"/img/profile.jpg"} alt="profile pic"></img>
    <h1 className="display-4">Abdella Shukur</h1>
    <p className="lead">A builder and student of technology</p>
    <p>Atlanta, GA | Full-stack developer</p>
    <a className="btn btn-primary btn-lg" href="#Contact" role="button">Contact</a>
</div> 
 );
    }
}
 
export default Bio;