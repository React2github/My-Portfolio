import React from 'react';


 
const Thumbnail = (props) => {
  return (
    <div className="card-body">
        <img className="card-img-top" src={props.image} alt=""/>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
    </div>
  )
}
 
export default Thumbnail;