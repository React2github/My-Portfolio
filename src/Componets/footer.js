import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
        <nav className=" navbar-light bg-light">
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
        </nav>
        </div>

         );
    }
}
 
export default Footer;



