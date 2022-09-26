import axios from "axios";
import { useEffect, useState } from "react";

const UserModal = ({ setUserModal, friend, userId, setActive, searchUserInfo, setSearchModal }) => {
  const [friendConfirm, setFriendConfirm] = useState("");
  const otherOne = friend != null ? friend.user.id : searchUserInfo.id;
  // 친구인지 아닌지 확인한다.
  useEffect(() => {
    console.log("myid " +  userId + " otherOne " + otherOne);
    const ifFriend = async() => {
      const ifFriendData = await axios({
        url:`http://localhost:8031/isFriend`,
        method: "POST",
        data:{
          otherOne,
          myid: userId
        }
      })
      setFriendConfirm(ifFriendData.data);
      console.log(ifFriendData.data)
    }
    ifFriend();
  }, []);

 // 모달창을 닫을 때 사용한다.
  const closeModal = () => {
  setUserModal != null ? setUserModal("False") : setSearchModal("False");
 };
 // 친구를 삭제할 때 사용한다.
 const deleteFriend = async (e) => {
  e.preventDefault();
  const delData = await axios({
   url: `http://localhost:8031/delFriend`,
   method: "POST",
   data: {
    otherOne,
    myid: userId,
   },
  });
  // 성공적으로 작동하면 삭제한 친구를 빼고 화면을 다시 그려줘야한다.
  if (delData.data === "success") {
    setActive("True");
    closeModal();
  }
 };

 // 친구를 추가할 때 사용한다.
 const addFriend = async (e) => {
  e.preventDefault();
  const addFriendData = await axios({
   url: `http://localhost:8031/addFriend`,
   method: "POST",
   data: {
    otherOne,
    myid: userId,
   },
  });
  // 성공적으로 작동하면 추가한 친구를 화면에 다시 그려줘야한다.
  if (addFriendData.data === "success") {
    setActive("True");
    closeModal();
   }
 };

 // ======
 return (
  <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen text-center bg-black bg-opacity-70">
   <div className="w-10/12 bg-white rounded md:w-1/3">
    <div className="flex flex-col p-6 bg-gray-800 border-b">
     <span className="flex justify-start -mt-5 text-2xl cursor-pointer" onClick={closeModal}>
      x
     </span>
     <div className="flex flex-shrink-0 w-32 h-32 mx-auto">
      <img className="object-cover w-full h-full rounded-full shadow-md" src="https://randomuser.me/api/portraits/women/61.jpg" alt="" />
     </div>
     <p className="pt-2 mt-3 text-xl font-semibold text-gray-50">{friend != null ? friend.user.username : searchUserInfo.username}</p>
     <p className="mt-1 text-base text-gray-100">{friend != null ? friend.user.useremail : searchUserInfo.useremail }</p>
    </div>

    <div className="flex justify-between">
     <div className="p-5 text-base text-black cursor-pointer mx">1:1 채팅</div>
     <div
      className="p-5 text-base text-black cursor-pointer"
      onClick={(e) => {friendConfirm === "True" ? deleteFriend(e) : addFriend(e)}}
     >
      {friendConfirm === "True" ? "친구 삭제" : "친구 추가"}
     </div>
    </div>
   </div>
  </div>
 );
};

export default UserModal;
