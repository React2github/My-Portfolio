import React from 'react';


function CodeGit() {
    window.open("https://github.com/React2github/BudgetTracker");
  }

  function LiveCode() {
    window.open("https://budget-tracker-node.herokuapp.com/login");
  }
const Thumbnail = (props) => {
  return (
    <div className="card-body">
        <img className="card-img-top" src={props.image} alt=""/>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <button onClick={CodeGit.bind(this)}>Code</button>
        <button onClick={LiveCode.bind(this)}>Live Site</button>
    </div>
  )
}

export default Thumbnail;