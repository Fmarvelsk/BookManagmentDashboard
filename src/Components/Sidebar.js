import React from 'react';
import Logout from '../Image/settings.svg'

const Sidebar = (props) => {

    return(
        <div className="sidebar">
                
                <ul className="nav-dash">

                    {props.dashboard.map( (prop, i) => 
                    <li
                    key={i}
                    className={
                      prop.logo
                        ? "logos"
                        : /*activeRoute(prop.layout + prop.path)*/ "item-list"
                    }
                  >
                    {prop.icon}
                    </li>
                
                ) }
                   <li><img className="logout item-list" src={Logout} alt="logout" /></li> 
                </ul>
                
        </div>
       )
}

export default Sidebar