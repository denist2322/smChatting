import SockJS from "sockjs-client";
import Stomp from "stompjs";
import React, { useState, useEffect } from "react";

const Talk = () => {
  const [msg, setMsg] = useState([]);
  const [content, setContent] = useState("");
  let socket = new SockJS("http:/localhost:8031/chat/chatting");
  let client = Stomp.over(socket);

  useEffect(() => {
    client.connect({}, () => {
      // 연결시 jwt를 보냄
      // client.send("/app/join", {} ,JSON.stringify(localStorage.getItem("Token")))

      // (초기 셋팅)처음 들어오면 DB에 있는 메시지를 추출함
      client.send(`/app/first/3과4`, {}, JSON.stringify("success"));

      //
      client.subscribe("/queue/firstChat/3과4", function (Message) {
        const newMsg = JSON.parse(Message.body).map((a) => a.content);
        setMsg(newMsg);
      });

      client.subscribe("/queue/addChatToClient/3과4", function (Message) {
        const newMsg = JSON.parse(Message.body).content;
        setMsg((prev) => prev.concat(newMsg));
      });
    });
  }, []);

  const handleSubmit = (e, content) => {
    e.preventDefault();
    client.send(`/app/chat/3과4`, {}, JSON.stringify({ content }));
    setContent("");
  };

  return (
    <div>
      <div>채팅</div>
      <form onSubmit={(e) => handleSubmit(e, content)}>
        <div>
          <input
            type="text"
            placeholder="내용을 입력하세요."
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
        </div>
        <button type="submit">제출</button>
        <div>내용</div>
        <div>
          <ul>
            {msg.map((_msg, index) => (
              <li key={index}>{_msg}</li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
};

export default Talk;
