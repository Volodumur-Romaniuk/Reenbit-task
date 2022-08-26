import React, {useEffect,useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Data from './Components/Data'

function App() {
  const [loading, setLoading] = useState(true);
    useEffect(()=>{
      
        if(localStorage.length === 0){
          localStorage.setItem('data',JSON.stringify(Data))
          console.log('work')
          setLoading(false)
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
