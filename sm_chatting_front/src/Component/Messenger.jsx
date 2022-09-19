import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import ChatFooter from "../Chat/Footer";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import ChatMain from "../Chat/Main.jsx";
import ChatHeader from "../Chat/Header.jsx";
import SideHeader from "../Sidebar/Header.jsx";
import SearchUser from "../Sidebar/SearchUser.jsx";
import ChatList from "../Sidebar/ChatList";
import Users from "../Sidebar/Users.jsx";

import axios from "axios";
import "./Messenger.css";

const Messenger = () => {
  const navigate = useNavigate();

  // 로그인 되어 있는지 체크한다.
  const isLogined = async (e) => {
    if (localStorage.getItem("Token") === null) {
      console.log("왔음");
      navigate("/");
      return;
    }
  };

  const [msg, setMsg] = useState([]);
  const [content, setContent] = useState("");
  let socket = new SockJS("http:/localhost:8031/chat/chatting");
  let client = Stomp.over(socket);

  useEffect(() => {
    client.connect({}, () => {
      // 연결시 jwt를 보냄
      // client.send("/app/join", {} ,JSON.stringify(localStorage.getItem("Token")))

      // (초기 셋팅)처음 들어오면 DB에 있는 메시지를 추출함
      client.send(`/app/first/'1'과'2'`, {}, JSON.stringify("success"));

      client.subscribe("/queue/firstChat/'1'과'2'", function (Message) {
        const newMsg = JSON.parse(Message.body);
        setMsg(newMsg);
      });

      client.subscribe("/queue/addChatToClient/'1'과'2'", function (Message) {
        const newMsg = JSON.parse(Message.body);
        setMsg((prev) => [...prev, newMsg]);
      });
    });
  }, []);

  return (
    <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden" onLoad={isLogined}>
      <div className="flex-1 flex flex-col">
        <main className="flex-grow flex flex-row min-h-0">
          <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
            <div className="header p-4 flex flex-row justify-between items-center flex-none shadow">
              {<SideHeader />}
            </div>
            <div className="search-box p-4 flex-none">{<SearchUser />}</div>
            <div className="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">{<Users />}</div>
            <div className="contacts p-2 flex-1 overflow-y-scroll">{<ChatList />}</div>
          </section>
          <section className="flex flex-col flex-auto border-l border-gray-800">
            <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
              {<ChatHeader />}
            </div>
            <div className="chat-body p-4 flex-1 overflow-y-scroll">{<ChatMain msg={msg} setMsg={setMsg} />}</div>
            <div className="chat-footer flex-none">
              {<ChatFooter client={client} content={content} setContent={setContent} />}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Messenger;
