import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./styles/header.css"

class Header extends Component {
    // state = {  }
    render() { 
        return (  
            <nav className="navbar navbar-light bg-light">
                {/* <a className="navbar-brand" href="/Home"></a> */}
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#Projects">Project</a></li>
                    <li><a href="#title">Skills</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
        );
    }
}
 
export default Header;