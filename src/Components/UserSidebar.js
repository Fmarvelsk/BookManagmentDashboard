import react from 'react'
import {Form, FormControl} from 'react-bootstrap'
import Noti from '../Image/Notifications.svg'
import Avatar from '../Image/avatar.svg'
import Search from '../Image/Search.svg'
import Copy from '../Image/copy.svg'
import Upgrade from './Upgrade'
import Reminder from './Reminder'

const User = () => {
    return (
        <div className="user-row">
            <span className="w-70">
            <p className="greet">Hello,</p>
            <p className="name">Jonathan!</p>
            <p className="details">Copy your bio link and paste it in your profile to let people find you. </p>
            </span>
            <span>
                <img src={Avatar} alt="avatar"/>
            </span>
        </div>
    )
}

const UserSidebar = (props) => {
    return(
        <div className={props.toogle ? "show side" : "side"}>
            {console.log(props)}
            <button className="btn-hide" onClick={props.hideBar}>X</button>
            <div className="user-side">
                <div className="search">
                    <div className="search-icon ws">
    <Form.Control type="email" className="w-80" placeholder="Search keyword" />
    <img className="searchline" src={Search} alt="Search"/>
    </div>
    <span className="notification" >
        <img src={Noti} className="not-cen" alt="noti"/>
        <div className="red"></div>
    </span>
  </div>

  <User/>
  <div className="link-info mb-5">
      <span className="search-icon">
  <Form.Control type="email" className="input-link" placeholder="scheddo.com/jonathan" />
  <img className="copy" src={Copy} alt="copy"/>
  </span>
  <span className="span-btn">Edit Link</span>
  </div>

  <Upgrade/>
  <Reminder/>
  
    </div>
    
        </div>
    )
}

export default UserSidebar