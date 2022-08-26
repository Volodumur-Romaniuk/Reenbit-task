import React, { useEffect, useState } from 'react';
import './MainPage.scss';
import Chat from './Chat';
import Data from './Data';
import Sidebar from './Sidebar'
import {useMedia} from 'react-use-media'

 
function MainPage() {
  const [friendId,setFriendId] = useState('')
  const [messagess,setMessagess] = useState([])
  const [mediaState,setMediaState] = useState(false)
  const resolution = useMedia('(max-width : 769px)');

  
    

  useEffect(()=>{
    console.log(messagess)
  },[messagess])

    useEffect(()=>{
      console.log(mediaState)
    },[mediaState])
  return (
    
     
      
        !resolution ?
        <div className="mainpage">
          <Sidebar setFriendId={setFriendId} messagess={messagess} />
          <Chat friendId={friendId} setMessagess={setMessagess}/>
        </div>
        :<div className="mainpage">
            <Sidebar setFriendId={setFriendId} messagess={messagess} setMediaState={setMediaState} />
            {mediaState ? <Chat friendId={friendId} setMessagess={setMessagess} setMediaState={setMediaState}/> :<><p></p></>}
          </div>
      
  );
}

export default MainPage;
/*setMediaState */