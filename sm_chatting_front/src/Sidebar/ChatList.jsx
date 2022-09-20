import React, { useEffect, useState } from "react";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

const ChatList = () => {
 const [msg, setMsg] = useState([]);
 const [subMsg, setSubMsg] = useState({});
 const socket = new SockJS("http:/localhost:8031/chat/chatting");
 const client = Stomp.over(socket);
 const userId = localStorage.getItem("id");

 useEffect(() => {
  client.connect({}, () => {
   // 연결시 jwt를 보냄
   // client.send("/app/join", {} ,JSON.stringify(localStorage.getItem("Token")))

   // (초기 셋팅)처음 들어오면 DB에 있는 메시지를 추출함
   client.send(`/app/chatRoomSetting/'${userId}'`, {});

   client.subscribe(`/queue/chatRoomSetting/'${userId}'`, function (Message) {
    const newMsg = JSON.parse(Message.body);
    setMsg(newMsg);
   });

   client.subscribe(`/queue/chatList/'1'과'2'`, function (Message) {
    const newMsg = JSON.parse(Message.body);
    setSubMsg(newMsg);
   });
  });
 }, []);

 return (
  <>
   {msg.map((_msg, index) => (
    <div key={index} className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
     <div className="w-16 h-16 relative flex flex-shrink-0">
      <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/61.jpg" alt="" />
     </div>
     <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
      <p>Angelina Jolie</p>
      <div className="flex items-center text-sm text-gray-600">
       <div className="min-w-0">
        <p className="truncate">{_msg.talkroom_id === subMsg.talkroom_id ? subMsg.content : _msg.content}</p>
       </div>
      </div>
     </div>
    </div>
   ))}
  </>
 );
};

export default ChatList;

{
 /* <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
        <div className="w-16 h-16 relative flex flex-shrink-0">
          <img
            className="shadow-md rounded-full w-full h-full object-cover"
            src="https://randomuser.me/api/portraits/men/97.jpg"
            alt=""
          />
          <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
            <div className="bg-green-500 rounded-full w-3 h-3"></div>
          </div>
        </div>
        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
          <p className="font-bold">Tony Stark</p>
          <div className="flex items-center text-sm font-bold">
            <div className="min-w-0">
              <p className="truncate">[광고] 10억이 1000만원이 된 전설!...</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-700 w-3 h-3 rounded-full flex flex-shrink-0 hidden md:block group-hover:block"></div>
      </div>
      <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg relative">
        <div className="w-16 h-16 relative flex flex-shrink-0">
          <img
            className="shadow-md rounded-full w-full h-full object-cover"
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt=""
          />
        </div>
        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
          <p>Scarlett Johansson</p>
          <div className="flex items-center text-sm text-gray-600">
            <div className="min-w-0">
              <p className="truncate">이미지</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
        <div className="w-16 h-16 relative flex flex-shrink-0">
          <img
            className="shadow-md rounded-full w-full h-full object-cover"
            src="https://randomuser.me/api/portraits/women/23.jpg"
            alt="User2"
          />
        </div>
        <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
          <p>Emma Watson</p>
          <div className="flex items-center text-sm text-gray-600">
            <div className="min-w-0">
              <p className="truncate">생각을 해봤는데 미안 우린 좋은 친구..</p>
            </div>
          </div>
        </div>
        <div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
          <img
            className="rounded-full w-full h-full object-cover"
            alt="user2"
            src="https://randomuser.me/api/portraits/women/23.jpg"
          />
        </div>
      </div> */
}
