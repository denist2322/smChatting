import React, { useEffect, useState } from "react";
import ChatFooter from "../Chat/Footer";
import ChatMain from "../Chat/Main.jsx";
import ChatHeader from "../Chat/Header.jsx";

const Chat = ({ chatMsg, setchatMsg, client, content, setContent, chatRoomId }) => {
  return (
    <section className="flex flex-col flex-auto border-l border-gray-800">
      <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">{<ChatHeader />}</div>
      <div className="chat-body p-4 flex-1 overflow-y-scroll">{<ChatMain chatMsg={chatMsg} setchatMsg={setchatMsg} />}</div>
      <div className="chat-footer flex-none">{<ChatFooter client={client} content={content} setContent={setContent} chatRoomId={chatRoomId} />}</div>
    </section>
  );
};

export default Chat;
