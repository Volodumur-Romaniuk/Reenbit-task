const date = 
    {
      userId:"hgfhfghgf",
      userName:"Vova",
      image:'',
      friends:[
        {
          friendId:'1',
          name:'Maks',
          imageUrl:'',
          chat:{
            message:[
              {
                id:0, //left-message even number
                text:'Hello',
                date_time:'19/08/22 04:34:35'
              },
              {
                id:1, //right-message not-even number
                text:'Hello',
                date_time:'20/08/22 04:34:35'
              },
              {
                id:3, 
                text:'hfgjghjkhljklkjljkljkljklkjljk',
                date_time:'20/08/22 04:34:35'
              },
              {
                id:2, 
                text:'hfgjghjkhljklkjljkljkljklkjljk',
                date_time:'20/08/22 04:34:50'
              }
            ]
          },
          last_message:{
            text:'',
            date:''
          }
        },
        {
          friendId:'2',
          name:'Serik',
          imageUrl:'',
          chat:{
            message:[
              {
                id:0, //left-message even number
                text:'Hello',
                date_time:'19/08/22 04:34:35'
              },
              {
                id:1, //right-message not-even number
                text:'Hello',
                date_time:'20/08/22 04:34:33'
              },
              {
                id:3, //right-message not-even number
                text:'hfgjghjkhljklkjljkljkljklkjljk',
                date_time:'20/08/22 04:34:35'
              },
              {
                id:2, //right-message not-even number
                text:'hfgjghjkhljklkjljkljkljklkjljk',
                date_time:'20/08/22 04:34:50'
              }
            ]
          }
          ,
          last_message:{
            text:'',
            date:''
          }
        }
      ]

    }
  
export default date;