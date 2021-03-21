import React from 'react'

const Booking = (props) => {
    const details = props.bookInfo
    return(
        <div className="card card-stats mb-4">
          <div className="content stats">
                  <p className="fullname">{details.name}</p>
                  <span className="service">Services</span>
                 <p className="service-title">{details.service}</p>

<div className="user-row mob">
    <div>
    <span className="service">Date</span><br/>
    <span className="service-title">{details.date}</span>
    </div>

    <div>
    <span className="service">Time</span><br/>
    <span className="service-title">{details.time}</span>
    </div>


</div>
<hr/>
            <div className="user-row mob">
                <span className="accept mb-2">Accept Delivery</span>
                <span className="decline">Decline</span>
            </div>

           
                        </div>
             </div>
        
    )
}
export default Booking