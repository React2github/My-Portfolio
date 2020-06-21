import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "./styles/bio.css";

function Linkedin() {
    window.open("https://www.linkedin.com/in/abdella-abdushukur-2b7b42144/");
  }
  
  function Github() {
    window.open("https://github.com/React2github");
  }

class Bio extends Component {
    state = {  }
    render() { 
        return ( 
 <div className="jumbotron" id="Home">
    <div id="info">
    <img src={"/img/profile.jpg"} alt="profile pic"></img>
    <h1 className="center">Abdella Shukur</h1>
    <p className="lead center">Building Solutions to Today's Problems</p>
    <p className="center">Atlanta, GA | Full-stack developer</p>
    <button className="btn btn-primary btn-lg" data-toggle="modal" data-target="#exampleModal">Contact</button>
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Let's Grab Coffee</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          Email: abdella.shukur2@gmail.com <br />
          Call: 404-242-3591 <br />
          Reach me on <button onClick={Linkedin.bind(this)}>Linkedin</button> or <button onClick={Github.bind(this)}>Github</button> 
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
 </div>
</div> 
 );
    }
}

export default Bio;