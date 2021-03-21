import React from 'react'
import { book } from '../Data'
import Icon from '../Image/exclamation.svg'
import Msg from '../Image/mail.svg'

const Reminder = () => {
    return(
        <div className="mt-5">
            <header className="link-info">
                <p className="remind">Reminders</p>
                <a className="view" href="/">View All {'>'} </a>
            </header>
                   
                    { book.map( (note, i ) => 
                                <div className="user-row" key={i}>
                                {note.msg ? 
                                <div className="mr-3 new-msg">
                                    <img className="mail" src={Msg} alt="msg"/>
                                </div>
                                :
                                
                                <img className="mr-3 mb-2" src={Icon} alt="icon"/>
                                 }
                            
                                <span>
                               <span className="book">{note.header}</span>
                               <p className="msg m">Lorem ipsum dolor sit amet, consetetur</p>
                               </span>
                               
                      </div>
                  )}
        </div>
    )
}
export default Reminder