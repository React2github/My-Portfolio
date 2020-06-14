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
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="img/WB.png" width="200px" height="150px" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Sally Sue</h5>
        <p>Abdella is a great developer and an asset!</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/WB.png" width="200px" height="150px" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Mike Johnson</h5>
        <p>He is passionate and diligent</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="img/WB.png" width="200px" height="150px" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h5>Curtis Jackson</h5>
        <p>He goes above and beyond</p>
      </div>
    </div>
  </div>
</div>
     );
  }
}
 
export default recs;