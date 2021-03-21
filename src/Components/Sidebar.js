import React from 'react';
import Logout from '../Image/log-out.svg'

const Sidebar = (props) => {

  const activeRoute = (routeName) => {
    return window.location.pathname.indexOf(routeName) > -1
      ? "active item-list"
      : "item-list";
  };

    return(
        <div className="sidebar">
                
                <ul className="nav-dash">

                    {props.dashboard.map( (prop, i) => 
                    <li
                    key={i}
                    className={
                      prop.logo
                        ? "logos"
                        : activeRoute(prop.path)
                        
                    }
                    
                  >
                    
                    <a href={prop.path} >{prop.icon}</a>
                    </li>
                
                ) }
                   <li><img className="logout item-list" src={Logout} alt="logout" /></li> 
                </ul>
                
        </div>
       )
}

export default Sidebar