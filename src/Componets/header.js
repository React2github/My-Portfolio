import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./styles/header.css"

class Header extends Component {
    // state = {  }
    render() { 
        return (  

            <nav class="navbar navbar-expand-sm fixed-top navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#Home">Abdella Shukur</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            <div class="collapse navbar-collapse" id="navbar1">
                <ul class="navbar-nav nav nav-fill w-100">
                <li class="nav-item">
                    <a class="nav-link" href="#Projects">Projects</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#title">Skills</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
            // <nav className="navbar navbar-light bg-light">
            //     {/* <a className="navbar-brand" href="/Home"></a> */}
            //     <ul>
            //         <li><a href="#Home">Home</a></li>
            //         <li><a href="#Projects">Project</a></li>
            //         <li><a href="#title">Skills</a></li>
            //         <li><a href="#Contact">Contact</a></li>
            //     </ul>
            // </nav>
        );
    }
}
 
export default Header;