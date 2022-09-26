const ChatList = ({ listMsg, setChatRoomId }) => {
 const changeChatRoomId = (id) => {
  setChatRoomId((prev) => [...prev, id]);
 };
 return (
  <>
   {listMsg.map((_msg, index) => (
    <div
     key={index}
     className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800"
     onClick={() => {
      changeChatRoomId(_msg.talkSetting.talkroom_id);
     }}
    >
     <div className="flex flex-shrink-0 w-16 h-16">
      <img className="object-cover w-full h-full rounded-full shadow-md" src="https://randomuser.me/api/portraits/women/61.jpg" alt="" />
     </div>
     <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block group-hover:block">
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
 /* <div className="relative flex items-center justify-between p-3 rounded-lg hover:bg-gray-800">
        <div className="relative flex flex-shrink-0 w-16 h-16">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/men/97.jpg"
            alt=""
          />
          <div className="absolute bottom-0 right-0 p-1 bg-gray-900 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block group-hover:block">
          <p className="font-bold">Tony Stark</p>
          <div className="flex items-center text-sm font-bold">
            <div className="min-w-0">
              <p className="truncate">[광고] 10억이 1000만원이 된 전설!...</p>
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 hidden w-3 h-3 bg-blue-700 rounded-full md:block group-hover:block"></div>
      </div>
      <div className="relative flex items-center justify-between p-3 bg-gray-800 rounded-lg">
        <div className="relative flex flex-shrink-0 w-16 h-16">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/women/33.jpg"
            alt=""
          />
        </div>
        <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block group-hover:block">
          <p>Scarlett Johansson</p>
          <div className="flex items-center text-sm text-gray-600">
            <div className="min-w-0">
              <p className="truncate">이미지</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative flex items-center justify-between p-3 rounded-lg hover:bg-gray-800">
        <div className="relative flex flex-shrink-0 w-16 h-16">
          <img
            className="object-cover w-full h-full rounded-full shadow-md"
            src="https://randomuser.me/api/portraits/women/23.jpg"
            alt="User2"
          />
        </div>
        <div className="flex-auto hidden min-w-0 ml-4 mr-6 md:block group-hover:block">
          <p>Emma Watson</p>
          <div className="flex items-center text-sm text-gray-600">
            <div className="min-w-0">
              <p className="truncate">생각을 해봤는데 미안 우린 좋은 친구..</p>
            </div>
          </div>
        </div>
        <div className="flex flex-shrink-0 hidden w-4 h-4 md:block group-hover:block">
          <img
            className="object-cover w-full h-full rounded-full"
            alt="user2"
            src="https://randomuser.me/api/portraits/women/23.jpg"
          />
        </div>
      </div> */
}
