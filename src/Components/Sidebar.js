import React, { useEffect, useState } from 'react';
import './Sidebar.scss';
import Search from './Search'
import Chats from './Chats'
function Sidebar({setFriendId,messagess,setMediaState}) {
  const [renderChats,setRenderChats] = useState(false);
  const [searchText,setSearchText] = useState('')

  return (
    <div className="sidebar">
      <Search setRenderChats={setRenderChats} setSearchText={setSearchText}/>
      <Chats setFriendId={setFriendId} messagess = {messagess} renderChats={renderChats} setMediaState={setMediaState} searchText={searchText}/>
    </div>
  );
}

export default Sidebar;
 