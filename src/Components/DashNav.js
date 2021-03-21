import React from 'react'

const DashNav = () => {
    return(
        <section id="tabs" className="project-tab">
            
                            <div className="dash-nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                <button 
                                className="active nav-it" id="nav-home-tab" data-toggle="tab" role="tab" aria-controls="nav-home" aria-selected="true">Booking</button>
                                <button className="nav-it" id="nav-profile-tab" data-toggle="tab" role="tab" aria-controls="nav-profile" aria-selected="false">Enquiries</button>
                                <button className="nav-it" id="nav-contact-tab" data-toggle="tab" role="tab" aria-controls="nav-contact" aria-selected="false">My Services</button>
                                <span className="line"></span>
                        </div>

</section>
     
    )
}
export default DashNav
/*                   <button className="nav-it">Bookings</button>
                <button className="nav-it">Enquires</button>
                <button className="nav-it">MyServices</button>
                
    </div> */