import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import { useNavigate } from "react-router-dom";
import Chat from "../Component/Chat.jsx";
import Sidebar from "../Component/Sidebar.jsx";
import "./Messenger.css";

const Messenger = () => {
 const navigate = useNavigate();
 // 채팅 화면에 사용됨
 const [chatMsg, setchatMsg] = useState([]);
 // 사이드바 채팅방 메세지 미리보기에 사용됨
 const [listMsg, setListMsg] = useState([]);
 // 입력된 대화 내용
 const [content, setContent] = useState("");
 const [chatRoomId, setChatRoomId] = useState("");
 // 로그인 되어 있는지 체크한다.
 const isLogined = async (e) => {
  if (localStorage.getItem("Token") === null) {
   navigate("/");
   return;
  }
 };
 // 웹소캣 연결
 const socket = new SockJS("http:/localhost:8031/chat/chatting");
 const client = Stomp.over(socket);
 const userId = localStorage.getItem("id");

 useEffect(() => {
  // 새로 쓸때 input은 아무것도 없어야함.
  setContent("");
  client.connect({}, () => {
   // === 1. 채팅방 셋팅 (send를 통해 웹소캣 연결) ===
   client.send(`/app/chatRoomSetting/'${userId}'`, {});
   // 1-1. 1연결로 얻은 값
   client.subscribe(`/queue/chatRoomSetting/'${userId}'`, function (Message) {
    const newMsg = JSON.parse(Message.body);
    setListMsg(newMsg);
   });
   // 1-2. 채팅방 최신 메시지를 받으면 미리보기로 출력함
   client.subscribe(`/queue/chatList/'${userId}'`, function (Message) {
    const newMsg = JSON.parse(Message.body);
    // 이전 메시지(prev) 를 가져와 새로 도착한 메시지만 출력해서 저장함.
    setListMsg((prev) =>
     [...prev].map((_msg) => (_msg.talkroom_id === newMsg.talkroom_id ? { ..._msg, content: newMsg.content, regdate: newMsg.regdate } : _msg))
    );
   });

   // === 2. 대화내용 셋팅 (send는 사이드바 채팅방을 누르면 실행됨.) ===
   client.send(`/app/first/${chatRoomId}`, {}, JSON.stringify("success"));

   client.subscribe(`/queue/firstChat/${chatRoomId}`, function (Message) {
    const newMsg = JSON.parse(Message.body);
    setchatMsg(newMsg);
   });

   client.subscribe(`/queue/addChatToClient/${chatRoomId}`, function (Message) {
    const newMsg = JSON.parse(Message.body);
    setchatMsg((prev) => [...prev, newMsg]);
   });
  });
  // 채팅방이 생성되면 새로 연결이 필요함. ([]에 내용추가) - 아직 미 구현
 }, [chatRoomId]);

 // 채팅방이 추가되었을 때
 useEffect(() => {}, []);

 return (
  <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden" onLoad={isLogined}>
   <div className="flex-1 flex flex-col">
    <main className="flex-grow flex flex-row min-h-0">
     <Sidebar listMsg={listMsg} chatRoomId={chatRoomId} setChatRoomId={setChatRoomId} client={client} userId={userId} />
     <Chat chatMsg={chatMsg} setchatMsg={setchatMsg} client={client} content={content} setContent={setContent} chatRoomId={chatRoomId} />
    </main>
   </div>
  </div>
 );
};

export default Messenger;
