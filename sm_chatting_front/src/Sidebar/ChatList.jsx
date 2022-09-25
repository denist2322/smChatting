const ChatList = ({ listMsg, setChatRoomId }) => {
 const changeChatRoomId = (id) => {
  setChatRoomId(id);
 };
 return (
  <>
   {listMsg.map((_msg, index) => (
    <div
     key={index}
     className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg"
     onClick={() => {
      changeChatRoomId(_msg.talkSetting.talkroom_id);
     }}
    >
     <div className="w-16 h-16 flex flex-shrink-0">
      <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/61.jpg" alt="" />
     </div>
     <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
      <p>{_msg.userInfo.username}</p>
      <div className="flex items-center text-sm text-gray-600">
       <div className="min-w-0">
        <p className="truncate">{_msg.talkSetting.content}</p>
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
