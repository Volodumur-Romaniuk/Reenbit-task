import React,{useState,useEffect} from 'react';
import './Chats.scss';
function Chats({setFriendId,messagess,renderChats,searchText,setMediaState}) {
    const [chatsForName,setChatsForName] = useState([]);
    const [chatsForMessage,setChatsForMessage] = useState([]);
    const [countChats,setCountChats] = useState([])
    useEffect(()=>{
   
        renderChatsForName(messagess);
        renderChatsForMessage(messagess);
        console.log(chatsForName)
        console.log(chatsForMessage)
       
     },[searchText])

     const stringToDate = (str) => {
        const [dateValues, timeValues] = str.split(' ');
        const [month, day, year] = dateValues.split('/');
        const [hours, minutes, seconds] = timeValues.split(':');
        const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);
        return date;
    }
    const shortText = (text) =>{
        if(text.length >= 15){
            return text.substring(0,20) + '...'
        }
        else return text
    }
    
  

 const renderChatsForName = (friends)=>{
    setChatsForName([])
     var arr =[]
     friends.map((element,index)=>{
         if(element.name.includes(searchText)){
              arr.push(element)   
         } 
         
     })
     setChatsForName(arr);
 }
 const renderChatsForMessage = (friends)=>{
    setChatsForMessage([])
    var arr =[]
    var arr_messages = [];
    let count = 0;
    friends.forEach(element => {
        
        element.chat.message.forEach((elem)=>{
            
           if(elem.text.includes(searchText)){   
                arr_messages.push(elem)
           }  
        }
        )
       // element.chat.message=arr_messages;
        arr.push({
            friendId:element.friendId,
            name:element.name,
            imageUrl:element.imageUrl,
            chat:{
                message:arr_messages
            },
            last_message:{
                text: element.last_message.text,
               date: element.last_message.date
              }
            
        })
        arr_messages = [];
    });
    
    setChatsForMessage(arr);
}
  return (
    <div className="chats">
        <div className="title">
            <p>Chats</p>
        </div>
        <div className="friends">
            <div className="overflow">
                {
                    !renderChats ? 
                        messagess?.sort((a,b)=> stringToDate(b.last_message.date) - stringToDate(a.last_message.date ) ).map((element,index)=>
                            <div className="friend" onClick={()=>{setFriendId(element.friendId);setMediaState(true)}} >
                            <div className="container">
                                <div className="info">
                                    <div className="img">
                                    <img src={element.imageUrl}alt="" />
                                    </div>
                                    <div className="text">
                                        <p className="name">{element.name}</p>
                                        <p className="last-message">  {shortText(element.last_message.text)}</p>
                                    </div>
                                </div>
                                <p className="date"> {element.last_message.date}</p> 
                                </div>
                            </div>
                        )
                     :
                        <div className="all-messages">
                            {chatsForName.map((element,index)=>
                                <div className="friend" onClick={()=>{setFriendId(element.friendId); console.log(element.friendId)}} >
                                    <div className="container">
                                        <div className="info">
                                            <div className="img">
                                                <img src={element.imageUrl}alt="" />
                                        </div>
                                            <div className="text">
                                                <p className="name">{element.name}</p>
                                                <p className="last-message">  {shortText(element.last_message.text)}</p>
                                            </div>
                                        </div>
                                        <p className="date"> {element.last_message.date}</p> 
                                    </div>
                                </div>
                            )}

                            <div className="count_messages">
                                <p>{} messages found</p>
                            </div>

                            {chatsForMessage.map((element,index)=>
                                element.chat.message.map((elem)=> 
                                        <div className="friend" onClick={()=>{setFriendId(element.friendId); console.log(element.friendId)}} >
                                        <div className="container">
                                    
                                            <div className="info">
                                                <div className="img">
                                                    <img src="https://i.ibb.co/jf1NLfv/viber-2021-09-24-11-01-32-719.png" alt="" />
                                                </div>
                                                <div className="text">
                                                    <p className="name">{element.name}</p>
                                                    <p className="last-message">  {shortText(elem.text)}</p>
                                                </div>
                                            </div>
                                            <p className="date"> {elem.date_time}</p> 
                                        </div>  
                                        </div>
                                )
                            )}

                        </div>

                    }     
            </div>
        </div>
    </div>
  );
}

export default Chats;
