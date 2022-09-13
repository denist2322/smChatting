// import SockJS from 'sockjs-client'
// import Stomp from 'stompjs';

// const Talk = async () => {
//     let socketJs = new SockJS("http://localhost:8031/chat/chatting");
//     let stompcli = Stomp.over(socketJs);

//     stompcli.send(`/pub/chat/chatting`, {}, JSON.stringify(msg)) //-> 보낼때

//     stompcli.connect({},() => {
//          stompcli.subscribe(`/sub/chatting/room/11`, (data) => // -> 받을때

//     return(
//         <div>{TalkData.data.content}</div>
//     );
// };

// export default Talk;
