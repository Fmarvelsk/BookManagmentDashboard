import React, { useState } from 'react'
import {Form } from 'react-bootstrap'
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

const [text, setText] = useState("scheddo.com/jonathan");
const [sucess, setSucess] = useState(false)
const [edit, setEdit] = useState(true)

let result;
const EditLink = () => {
    setEdit(false)
}
const copyCodToClipboard = () => {
    const el = result;
    el.select()
    document.execCommand("copy")
    setSucess(true)
    setTimeout( () => {
        setSucess(false)
    },1000)
}    

    return(
        <div className={props.toogle ? "show side" : "side"}>
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
  <Form.Control 
  type="text" 
  className="input-link" 
  value={text}
  readOnly={edit}
  onChange={ (e) => setText(e.target.value)}
  ref={(input) =>{
      result = input
  } } />

  <img className="copy" src={Copy} onClick={copyCodToClipboard} alt="copy"/>
  <span className={sucess ? 'feed' : 'dk'}> Copied</span>
  
  </span>
  <button 
  className="span-btn"
  onClick={EditLink}>Edit Link</button>
  </div>
  
  <Upgrade/>
  <Reminder/>
  
    </div>
    
        </div>
    )
}

export default UserSidebar