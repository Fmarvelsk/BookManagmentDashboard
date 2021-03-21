import React from 'react'
import Pattern from '../Image/Pattern.svg'

const Upgrade = () => {
    return(
        <div className="search-icon mb-3">
            <img className="img-pro" src={Pattern} alt="upgrade"/>
            <div className="text-upgrade">
                <div>
                <h5 className="pro">Upgrade <br/>to PRO</h5>
                <p className="pro-text">For more Profile Control</p>
                </div>

                <span className="crown">

                </span>
            </div>
        </div>
    )
}
export default Upgrade