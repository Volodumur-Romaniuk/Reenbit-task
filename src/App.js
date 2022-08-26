import React, {Component, useEffect,useState} from 'react';
import './App.css';
import MainPage from './Components/MainPage';
import Data from './Components/Data'
import { ClipLoader } from 'react-spinners';

class App extends Component {
  constructor(props){
    super(props)
    this.state = props
    this.loading = true
    if(localStorage.length == 0){
      localStorage.setItem('data',JSON.stringify(Data));
      this.loading = false
      console.log('work')
    }
    else  this.loading = false
  }
  
  componentWillUnmount(){
    console.log(this.loading)
    window.location.reload()
  }
//   useEffect(()=>{
    
//     console.log(Data)

//     if(!localStorage.getItem('data')){
     
     
      
//       window.location.reload()
//     }
//     else console.log('not-work')
    
    

// },[])
  render(){
    return (
      <div className="App">
      {this.loading ? <><ClipLoader></ClipLoader></> : <MainPage/> }
        <div className="bottom-frame"></div>
      </div>
    );
  }
   
  
}

export default App;
