import React, {useEffect,useState} from 'react';
import './handleAlert.scss';
function HandleAlert({notification}) {
    useEffect(()=>{
        console.log(notification)
    },[notification])
  return (
        <div className="notification">
           
              <p>{notification.name}</p>
              <p>{notification.last_message.text}</p>
        </div>
  );
}

export default HandleAlert;
