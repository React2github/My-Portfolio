import React from 'react';
import Thumbnail from './thumbnail.js'; // Import the Thumbnail component
import "./styles/cards.css";


function CodeGit() {
  window.open("https://github.com/React2github/BudgetTracker");
}
function CodeGit2() {
  window.open("https://github.com/React2github/COVID19-Testing");
}
function CodeGit3() {
  window.open("https://github.com/React2github/PoliceData");
}

function LiveCode() {
  window.open("https://budget-tracker-node.herokuapp.com/login");
}

 
function Projects() {
  return (
    <div>
        <h4 className="title" id="Projects">Projects</h4>
        <div className="card-group">
            <div className="card">
                <Thumbnail
                link="/twitter"
                image="/img/BT.jpg"
                title="BudgetTracker"
                description="Individuals and families can submit their monthly expenses or bills and 
                track their finances in a visual real-time chart. The data is stored on our servers." 
                />
                <div className="buttons">
                <button onClick={CodeGit.bind(this)}>Code</button>
                <button onClick={LiveCode.bind(this)}>Live Site</button>
                </div>
            </div>
            <div className="card">
                <Thumbnail
                link="/Facebook"
                image="/img/covid19.jpg"
                title="Covid-19 Tracker"
                description="Utilizes Google Maps API to mark hospitals which offer rapid Covid-19 testing."
                />
                <div className="buttons">
                <button onClick={CodeGit2.bind(this)}>Code</button>
                </div>
            </div>
            <div className="card">
                <Thumbnail
                link="/LinkedIn"
                image="/img/PD.png"
                title="PoliceData"
                description="Information about police killings from The WallStreet Journal 
                was imported into a D3 and Victory Chart application to analyze trends based on demographics."
                />
                <div className="buttons">
                <button onClick={CodeGit3.bind(this)}>Code</button>
                </div>
            </div>
      </div>
    </div>
  )
}

 
export default Projects;