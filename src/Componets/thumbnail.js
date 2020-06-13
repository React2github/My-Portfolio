import React from 'react';


 
const Thumbnail = (props) => {
  return (
    <div className="card-body">
        <p className="card-text"><img src={props.image} alt=""/></p>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
    </div>
  )
}
 
export default Thumbnail;