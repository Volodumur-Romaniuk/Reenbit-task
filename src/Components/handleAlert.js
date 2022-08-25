import React, {useEffect,useState} from 'react';
import './handleAlert.scss';
function HandleAlert({notification,setAlert}) {

      useEffect(()=>{
        console.log(notification)
         close_alert()
      },[notification])

      const close_alert = () =>{
        setTimeout(()=>setAlert(false),5000)
    }   
    

    const shortText = (text) =>{
      if(text.length >= 30){
          return text.substring(0,40) + '...'
      }
      else return text
  }
  return (
        <div className="notification">
            <div className="image">
              <img src={notification.img} alt="" />
            </div>
            <div className="text">
              <p className="name">{notification.name}</p>
              <p className="text">{shortText(notification.text)}</p>
              <p className="date">Just now</p>
            </div>  
        </div>
  );
}

export default HandleAlert;
