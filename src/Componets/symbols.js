import React, { Component } from 'react';
import "./styles/symbols.css";
import img from "./images/express.png";
import img2 from "./images/node-js.jpg";
import img3 from "./images/react-logo.jpg";
import img4 from "./images/redux-logo.png";

class Symbols extends Component {
    state = {  }
    render() { 
        return ( 
 <div class="container">
     <h4 id="title">Skills</h4>
    <div class="row">
        <div class="col">
            <img src={img} width="150" height="75" alt="..." />
        </div>
        <div class="col">
            <img src={img2} width="150" height="75" alt="..." />
            </div>
        <div class="col">
            <img src={img3} width="150" height="80" alt="..." />
            </div>
        <div class="col">
            <img src={img4} width="150" height="70" alt="..." />
            </div>
    </div>
  </div>
         );
    }
}
 
export default Symbols;