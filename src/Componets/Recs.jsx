import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

class recs extends Component {
  state = {  }
  render() { 
    return ( 

<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" id="recs">
    <div class="carousel-item active">
      <img src="img/WB.png" width="200px" height="350px" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5>Cassie Champagne</h5>
        <p> Abdella was our team leader on a full-stack Node application. He effectively managed a remote group of developers.  
          He ensured our team worked together well and allowed each member to show their strengths. He was also quick to help whenever necessary.  
          He has a strong understanding of web development and would be a excellent asset to any team.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/WB.png" width="200px" height="350px" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5>Kyle Kephart</h5>
        <p>Abdella preformed exceptionally well, he completed every project I tasked him with well ahead of schedule and with absolute professional quality. 
          10/10 I will be recommending him in the future.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/WB.png" width="200px" height="350px" class="d-block w-100" alt="..." />
      <div class="carousel-caption">
        <h5>Sam Chang</h5>
        <p>Abdella is a skilled professional I'd highly recommend. 
          The project I hired him for was completed swiftly, and Abdella was great in making himself available and ready to communicate about the project. 
          Will hire again.</p>
      </div>
    </div>
  </div>
</div>
     );
  }
}
 
export default recs;