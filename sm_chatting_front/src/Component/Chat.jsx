import ChatFooter from "../Chat/Footer";
import ChatMain from "../Chat/Main.jsx";
import ChatHeader from "../Chat/Header.jsx";

const Chat = ({ chatMsg, client, content, setContent, chatRoomId }) => {
 return (
  <>
   {chatRoomId != "" ? (
    <section className="flex flex-col flex-auto border-l border-gray-800">
     <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">{<ChatHeader />}</div>
     <div className="chat-body p-4 flex-1 overflow-y-scroll">{<ChatMain chatMsg={chatMsg} />}</div>
     <div className="chat-footer flex-none">{<ChatFooter client={client} content={content} setContent={setContent} chatRoomId={chatRoomId} />}</div>
    </section>
   ) : (
    <section className="flex flex-auto border-l border-gray-800 justify-center items-center">안녕하세요</section>
   )}
  </>
 );
};

export default Chat;
