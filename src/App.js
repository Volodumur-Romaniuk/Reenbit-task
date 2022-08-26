import React, {useEffect,useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Data from './Components/Data'
function App() {
  const checked_ls = () =>{
    if(!localStorage.getItem('data')){
      localStorage.setItem('data',JSON.stringify(Data))
     
    }
    else return
    window.location.reload();
  }

  useEffect(()=>{
    checked_ls()
  },[])
   
  return (
    <div className="App">
      <MainPage/>
      <div className="bottom-frame"></div>
    </div>
  );
}

export default App;
