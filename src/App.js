import React, {useEffect,useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Data from './Components/Data'
function App() {
  
    useEffect(()=>{
      
        if(localStorage.length === 0){
          localStorage.setItem('data',JSON.stringify(Data))
          console.log('work')
        }
        else return
        window.location.reload()
  },[])
   
  
 
  return (
    <div className="App">
      <MainPage/>
      <div className="bottom-frame"></div>
    </div>
  );
}

export default App;
