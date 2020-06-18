import React, { Component } from 'react';
import "./styles/footer.css"

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
        <nav className=" navbar-light bg-light" id="Contact">
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" href="/Home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Project">Project</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Skills">Skills</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/Contact">Contact</a>
                </li>
            </ul>
            <div id="links">
                <ul>
                    <li>abdella.shukur2@gmail.com</li>
                    <li>github.com/React2Github</li>
                    <li>https://www.linkedin.com/in/abdella-abdushukur-2b7b42144/</li>
                </ul>
            </div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </nav>
        </div>

         );
    }
}
 
export default Footer;



