import React, { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Component/Modal/UserModal.jsx";
const Users = ({ userId, setActive }) => {
 // 친구목록을 받을거다.
 const [friend, setFriend] = useState([]);
 const [userModal, setUserModal] = useState("False");
 // 삭제 동작이 일어나면 발생
 const [delActive, setDelActive] = useState("");
 // 친구를 추가하면 재실행 해야 한다.
 useEffect(() => {
  const userList = async () => {
   const userData = await axios({
    url: `http://localhost:8031/friendList`,
    method: "POST",
    data: {
     myid: userId,
    },
   });
   setFriend(userData.data);
   // user{ id, useremail, username }
  };
  // 함수를 실행해야 작동함.
  userList();
 }, [delActive]);

 return (
  <>
   <div className="text-sm text-center mr-4">
    <button className="flex flex-shrink-0 focus:outline-none block bg-gray-800 text-gray-600 rounded-full w-20 h-20" type="button">
     <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
      <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z" />
     </svg>
    </button>
    <p>Your Story</p>
   </div>
   {friend.map((_friend, index) => (
    <div key={index} className="text-sm text-center mr-4 ">
     <div
      className="p-1 border-4 border-blue-600 rounded-full cursor-pointer"
      onClick={() => {
       setUserModal(_friend.user.id + "True");
      }}
     >
      <div className="w-16 h-16 flex flex-shrink-0">
       <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/12.jpg" alt="" />
      </div>
     </div>
     <p>{_friend.user.username}</p>
     {userModal === _friend.user.id + "True" ? <Modal setUserModal={setUserModal} friend={_friend} userId={userId} setDelActive={setDelActive} /> : null}
    </div>
   ))}
  </>
 );
};

export default Users;

{
 /*<div className="text-sm text-center mr-4">
    <div className="p-1 border-4 border-transparent rounded-full">
     <div className="w-16 h-16 relative flex flex-shrink-0">
      <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/men/75.jpg" alt="" />
      <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
       <div className="bg-green-500 rounded-full w-3 h-3"></div>
      </div>
     </div>
    </div>
    <p>Jeff</p>
   </div>
   <div className="text-sm text-center mr-4">
    <div className="p-1 border-4 border-blue-600 rounded-full">
     <div className="w-16 h-16 relative flex flex-shrink-0">
      <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/42.jpg" alt="" />
     </div>
    </div>
    <p>Cathy</p>
   </div>
   <div className="text-sm text-center mr-4">
    <div className="p-1 border-4 border-transparent rounded-full">
     <div className="w-16 h-16 relative flex flex-shrink-0">
      <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/87.jpg" alt="" />
      <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
       <div className="bg-green-500 rounded-full w-3 h-3"></div>
      </div>
     </div>
    </div>
    <p>Madona</p>
   </div> */
}
