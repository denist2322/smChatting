import SockJS from "sockjs-client";
import Stomp from "stompjs";

const Talk = () => {
  var sock = new SockJS("http://localhost:8080/chat");
  let client = Stomp.over(sock);

  let msg = "안녕하세요";

  client.connect({}, () => {
    client.send(`/app/chat/1`, {}, JSON.stringify(msg));

    client.subscribe();
  });
};

export default Talk;
