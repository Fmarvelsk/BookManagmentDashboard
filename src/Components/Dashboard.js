import React, { useState } from 'react'
import Route from './Route'
import MainContent from './MainContent'
import UserSidebar from './UserSidebar'

const Dashboard = () => {
    const [show, hide] = useState(false)
    
    const showNav = () => {
        hide(!show)
    }
    return (
        <div className="dashboard">
                <Route/>
                    <MainContent/>
                          
  <button className="span-bn" onClick={showNav}>☰</button>    
            <UserSidebar toogle={show} hideBar={showNav}/>
            
        </div>
    )
}
export default Dashboard