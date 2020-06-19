import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./styles/bio.css";


class Bio extends Component {
    state = {  }
    render() { 
        return ( 
 <div className="jumbotron" id="Home">
    <div id="info">
    <img src={"/img/profile.jpg"} alt="profile pic"></img>
    <h1 className="center">Abdella Shukur</h1>
    <p className="lead center">A builder and student of technology</p>
    <p className="center">Atlanta, GA | Full-stack developer</p>
    <a className="btn btn-primary btn-lg" href="#Contact" role="button">Contact</a>
    </div>
</div> 
 );
    }
}
 
export default Bio;