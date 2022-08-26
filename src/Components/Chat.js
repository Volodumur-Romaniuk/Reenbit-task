import React,{useState, useEffect, useRef} from 'react';
import axios from 'axios'
import './Chat.scss';
import moment from 'moment';
import {useMedia} from 'react-use-media'
import HandleAlert from './handleAlert';
function Chat({friendId,setMessagess,setMediaState}) {
    const [message,setMessage] = useState('');
    const [notification,setNotification] = useState({});
    const scroll_down = useRef(null)
    const [alert,setAlert] = useState(false)
    const resolution = useMedia('(max-width : 769px)');
   
     const [messages, setMessages]=useState(JSON.parse(localStorage.getItem('data'))?.friends)
    
      useEffect(()=>{
            setMessagess(messages);
           setMessages(JSON.parse(localStorage.getItem('data'))?.friends)    
     },[localStorage.getItem('data')])

     useEffect(()=>{
        setMessages(JSON.parse(localStorage.getItem('data'))?.friends)    
  },[friendId])

      useEffect(()=>{
          scroll_down.current?.scrollIntoView({behavior: 'smooth'})
          set_last_message();
          setMessagess(messages);
     },[messages])

        
     const setFriendMessages = () =>{
        axios.get(`https://api.chucknorris.io/jokes/random`).then(res =>{
            setNotification({
                name:messages.find(x=>x.friendId === friendId)?.name,
                img:messages.find(x=>x.friendId === friendId)?.imageUrl,
                text:res.data.value,
            });
            console.log(res)
            getFriendMessage(res.data.value);
           
            
        })
       
     }
     
     const getFriendMessage = (text) =>{
        const date = new Date();
        setAlert(true)
       
        var moment_date = moment(date).format('DD/MM/YY hh:mm:ss');
        let res_ls =  JSON.parse(localStorage.getItem('data')); 
        let arr_not_enum_id =  res_ls.friends.find(x=>x.friendId === friendId)?.chat.message.filter(elem => elem.id % 2 == 0 )
        let ob={
           id:arr_not_enum_id[arr_not_enum_id.length-1].id+2,
           text:text,
           date_time:moment_date
        };
        
       res_ls.friends.find(x=> x.friendId === friendId).chat.message.push(ob);
        localStorage.setItem('data',JSON.stringify(res_ls)) 
     }

    const onSubmit = (e) =>{

        e.preventDefault();  
        message === '' ? console.log('input empty') : send_message(message); 
        setMessage('')
        setTimeout(setFriendMessages,5000)
    }
    
     const set_last_message = () =>{
        var arr = [];
        
       
        let res_ls = JSON.parse(localStorage.getItem('data'))
        res_ls?.friends?.forEach(el =>{
            el.last_message.text=el.chat.message[el.chat.message.length-1].text
            el.last_message.date=el.chat.message[el.chat.message.length-1].date_time;
            arr.push(el);
        })
        res_ls.friends = arr;
       
        localStorage.setItem('data',JSON.stringify(res_ls)) 
     }
  
   const send_message = (text) =>{
       

       const date = new Date();
       var moment_date = moment(date).format('DD/MM/YY hh:mm:ss');
       let res_ls =  JSON.parse(localStorage.getItem('data')); 
       let arr_not_enum_id =  res_ls.friends.find(x=>x.friendId === friendId)?.chat.message.filter(elem => elem.id % 2 != 0 )
      let ob={
          id:arr_not_enum_id[arr_not_enum_id.length-1].id+2,
          text:text,
          date_time:moment_date
       };
      
      res_ls.friends.find(x=> x.friendId === friendId).chat.message.push(ob);
       localStorage.setItem('data',JSON.stringify(res_ls)) 
   }
   
  return (
      friendId == '' ? <div className="default">
      <p>Choose a friend</p>
  </div> : <div className="chat">
  {alert ? <HandleAlert notification={notification}  setAlert={setAlert} /> : <></>}
  {!resolution ? 
        <div className="title">
            <div className="img">
                <img src={messages?.find(x=>x.friendId === friendId)?.imageUrl} alt="" />
            </div>      
            <p className="p-title"> {messages?.find(x=>x.friendId === friendId)?.name} </p>
        </div>
        :
     <div className="title">
         <button onClick={()=>{setMediaState(false);console.log()}}>back</button>
         <div className="img">
             <img src={messages?.find(x=>x.friendId === friendId)?.imageUrl} alt="" />
         </div>      
         <p className="p-title"> {messages?.find(x=>x.friendId === friendId)?.name} </p>
     </div>}
     
  
 <div className="messages">
 <div className="together">
     { 
        messages?.find(x=>x.friendId === friendId)?.chat.message.map((element,index)=>
         
         +element.id % 2 === 0 ? <div className="left-message">
             <div className="text">
                 <p>{element.text}</p>
             </div>
             <div className="date">
                 <p>{element.date_time}</p>
             </div>
         </div>
         : <div className="right-message">
             <div className="text">
                 <p>{element.text}</p>
             </div>
             <div className="date">
                 <p>{element.date_time}</p>
             </div>
         </div>
     )
     }
     <div ref={scroll_down}></div>
     </div> 
     
 </div>
 <div className="sender">
     <form onSubmit={(e)=>onSubmit(e)} action="">
         <input type="text" onChange={(e)=>setMessage(e.target.value)} placeholder="Type your message" value={message}/>
         <button type='submit' disabled={message === ''}><svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
             <path xmlns="http://www.w3.org/2000/svg" d="M12 2C12.3788 2 12.725 2.214 12.8944 2.55279L21.8944 20.5528C22.067 20.8978 22.0256 21.3113 21.7882 21.6154C21.5508 21.9195 21.1597 22.0599 20.7831 21.9762L12 20.0244L3.21694 21.9762C2.84035 22.0599 2.44921 21.9195 2.2118 21.6154C1.97439 21.3113 1.93306 20.8978 2.10558 20.5528L11.1056 2.55279C11.275 2.214 11.6212 2 12 2ZM13 18.1978L19.166 19.568L13 7.23607V18.1978ZM11 7.23607L4.83402 19.568L11 18.1978V7.23607Z" fill="gray"></path></svg></button>
     </form>
     
 </div>
</div>
    
  );
}

export default Chat;
