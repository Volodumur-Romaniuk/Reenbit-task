import React, { useEffect, useState } from 'react';
import './Sidebar.scss';
import Search from './Search'
import Chats from './Chats'
function Sidebar({setFriendId,messagess}) {
  return (
    <div className="sidebar">
      <Search/>
      <Chats setFriendId={setFriendId} messagess = {messagess} />
    </div>
  );
}

export default Sidebar;
 