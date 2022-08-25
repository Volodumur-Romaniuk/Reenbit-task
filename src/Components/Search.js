import React, { useState } from 'react';
import './Search.scss';
function Search({setRenderChats,setSearchText}) {
    const renderChats = (text) =>{
      
        if (text === ''){
          setRenderChats(false);
        }else 
        {
          setRenderChats(true);
          setSearchText(text)
        }
       
    }

  return (
    <div className="search">
        <div className="icon-profile">

        </div>
        <div className="input-block">
            <input type="search" onChange={(e)=>{ renderChats(e.target.value) }} placeholder="Search or start new chat"/>
        </div>
    </div>
  );
}

export default Search;
