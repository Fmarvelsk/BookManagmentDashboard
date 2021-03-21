import React, { Component } from "react";
import Plus from '../Image/increase.svg';
import Minus from '../Image/decrease.svg';

export class StatsCard extends Component {
  render() {
    const Info = this.props.data
    return (
      <div className="card card-stats mb-3">
        <div className="content stats">
               <div className="numbers">
                <p>{Info.statsText}</p>
                <div className="search-icon">
               <p className="bold-stats"> {Info.statsValue}</p>
               {Info.sign ? <img 
               className={Info.sign.includes('+') ? "plus" : "minus" }
               src={Info.sign.includes('+') ? Plus : Minus} /> : '' }
                </div>
                 </div>
           </div>
      </div>
    );
  }
}

export default StatsCard;
