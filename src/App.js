import React, {useEffect,useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Data from './Components/Data'
function App() {
  
  
 useEffect(()=>{
    
      if(!localStorage.getItem('data')){
        localStorage.setItem('data',JSON.stringify(Data))
        console.log('work')
       
      }
      else return

      
      
    // window.addEventListener('storage',checked_ls)
    // return () =>{
    //   window.removeEventListener('storage',checked_ls)
    // }
    
 },[])
   
 useEffect(()=>{
    window.location.reload(true);
 },[localStorage.getItem('data')])
  return (
    <div className="App">
      <MainPage/>
      <div className="bottom-frame"></div>
    </div>
  );
}

export default App;
