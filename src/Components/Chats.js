import React,{useState,useEffect} from 'react';
import './Chats.scss';
function Chats({setFriendId,messagess}) {
    const stringToDate = (str) => {
        const [dateValues, timeValues] = str.split(' ');
        const [month, day, year] = dateValues.split('/');
        const [hours, minutes, seconds] = timeValues.split(':');
        const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
        return date;
    }

    const shortText = (text) =>{
        if(text.length >= 15){
            return text.substring(0,20) + '...'
        }
        else return text
    }
  return (
    <div className="chats">
        <div className="title">
            <p>Chats</p>
        </div>
        <div className="friends">
            <div className="overflow">
                
                        {
                            messagess?.sort((a,b)=> stringToDate(b.last_message.date) - stringToDate(a.last_message.date ) ).map((element,index)=>
                                <div className="friend" onClick={()=>setFriendId(element.friendId)} >
                                <div className="container">
                                    <div className="info">
                                        <div className="img">
                                            <img src="https://i.ibb.co/jf1NLfv/viber-2021-09-24-11-01-32-719.png" alt="" />
                                        </div>
                                        <div className="text">
                                            <p className="name">{element.name}</p>
                                            <p className="last-message">  {shortText(element.last_message.text)}</p>
                                        </div>
                                    </div>
                                    <p className="date"> {element.last_message.date}</p> 
                                    </div>
                                </div>
                            )
                        } 
                        
                   
            </div>
        </div>
    </div>
  );
}

export default Chats;
