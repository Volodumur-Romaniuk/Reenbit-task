import React, {useEffect,useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import handleAlert from './Components/handleAlert';
import moment from 'moment'
function App() {
  
   
  return (
    <div className="App">
      <MainPage/>
      <div className="bottom-frame"></div>
    </div>
  );
}

export default App;
