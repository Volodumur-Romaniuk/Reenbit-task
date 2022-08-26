import React, {useEffect,useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Data from './Components/Data'
function App() {
  
  
 useEffect(()=>{
    
      if(!localStorage.getItem('data')){
        localStorage.setItem('data',JSON.stringify(Data))
        console.log('work')
        setTimeout(()=>window.location.reload(),1000);
      }
      else return

 },[])
   
 
  return (
    <div className="App">
      <MainPage/>
      <div className="bottom-frame"></div>
    </div>
  );
}

export default App;
