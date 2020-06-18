import React, { Component } from 'react';
import "./styles/symbols.css";


class Symbols extends Component {
    state = {  }
    render() { 
        return ( 
 <div class="container pad">
     <h4 id="title">Skills</h4>
    <div class="row">
        <div class="card pad">
            <img src={"/img/express.png"} width="150" height="75" alt="..." />
        </div>
        <div class="card pad">
            <img src={"/img/node-js.jpg"} width="150" height="75" alt="..." />
            </div>
        <div class="card pad">
            <img src={"/img/react-logo.jpg"} width="150" height="80" alt="..." />
            </div>
        <div class="card pad">
            <img src={"/img/redux-logo.png"} width="150" height="70" alt="..." />
            </div>
            <br />
        <div class="card pad">
            <img src={"/img/PGSQL.png"} width="150" height="75" alt="..." />
        </div>
        <div class="card pad">
            <img src={"/img/BS.svg"} width="150" height="75" alt="..." />
            </div>
        <div class="card pad">
            <img src={"/img/git.png"} width="150" height="80" alt="..." />
            </div>
        <div class="card pad">
            <img src={"/img/JQuery.jpg"} width="150" height="80" alt="..." />
            </div>
    </div>
    </div>
         );
    }
}
 
export default Symbols;