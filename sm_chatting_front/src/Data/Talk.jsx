import SockJS from 'sockjs-client'
import Stomp from 'stompjs';
import React, { useState, useEffect } from "react";

const Talk = () => {
  const [msg,setMsg] = useState([]);
  const [content,setContent] = useState("");
  let socket = new SockJS('http:/localhost:8031/chat/chatting');
  let client = Stomp.over(socket);

  useEffect(() => {    
    client.connect({}, ()=>{   
      // 연결시 jwt를 보냄
      // client.send("/app/join", {} ,JSON.stringify(localStorage.getItem("Token")))
      client.subscribe("/queue/addChatToClient" , function(Message){
        const newMsg = JSON.parse(Message.body).content;
        console.log("지금 상태는 : " , msg)
        const newMsgs = [...msg];
        newMsgs.push(newMsg);
        setMsg(newMsgs);
      })
    })
  }, [msg]);

 

  const handleSubmit = (e, content) => {
    e.preventDefault();
    console.log("들어옴");
    client.send(`/app/chat` , {}, JSON.stringify({content}))
  }

  let msgList = msg.map((_msg, index) => (<li key={index}>{_msg}</li>))

  return(
    <div>
      <div>채팅</div>
      <form onSubmit={(e) => handleSubmit(e, content)}>
        <div>
          <input 
              type="text"
              placeholder='내용을 입력하세요.' 
              onChange={(e) => {
                setContent(e.target.value)
            }}/>
        </div>
        <button type="submit">제출</button>
        <div>내용</div>
        <div>{msgList}</div>
      </form>
    </div>
  )
}

export default Talk;