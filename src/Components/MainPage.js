import React, { useEffect, useState } from 'react';
import './MainPage.scss';
import Chat from './Chat';
import Data from '../../public/Data';
import Sidebar from './Sidebar'
function MainPage() {
  const [friendId,setFriendId] = useState('')
  const [arrayChat, setArrayChat] = useState([])
  const [messagess,setMessagess] = useState([])
  const checked_ls = () =>{
    if(!localStorage.getItem('data')){
      localStorage.setItem('data',JSON.stringify(Data))
    }
    else return
  }
  useEffect(()=>{
    checked_ls()
  },[])
  return (
    <div className="mainpage">
      <Sidebar setFriendId={setFriendId} messagess={messagess} />
      <Chat friendId={friendId} setMessagess={setMessagess}/>
    </div>
  );
}

export default MainPage;
