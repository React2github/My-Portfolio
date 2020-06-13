import React, { Component } from 'react';


class Cards extends Component {
    state = {  }
    render() { 
        return ( 
         
        <div className="card-group">
            <div className="card">
                {/* <img src="..." className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">BudgetTracker</h5>
                    <p className="card-text">Individuals and families can track their finances using a real-time chart.</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">ArabicBabyNames</h5>
                    <p className="card-text">Families can get guidance on finding an arabic name for their new baby</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div className="card">
                {/* <img src="..." class="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <h5 className="card-title">PoliceData</h5>
                    <p className="card-text">This app utlizes data from The Wallstreet Journal to track violence against innocent people by the police</p>
                    <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div> 
      </div>
      );
    }
}
 
export default Cards;