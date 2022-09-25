import axios from "axios";

const UserModal = ({ setUserModal, friend, userId, setDelActive }) => {
 const closeModal = () => {
  setUserModal("False");
 };
 const deleteFriend = async (e, opponentId) => {
  console.log("들옴");
  e.preventDefault();
  const delData = await axios({
   url: `http://localhost:8031/delFriend`,
   method: "POST",
   data: {
    opponentId,
    myid: userId,
   },
  });
  if (delData.data === "success") {
   setDelActive("True");
  }
 };
 return (
  <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70 text-center">
   <div className="bg-white rounded w-10/12 md:w-1/3">
    <div className="flex flex-col p-6 bg-gray-800 border-b">
     <span className="-mt-5 text-2xl flex justify-start cursor-pointer" onClick={closeModal}>
      x
     </span>
     <div className="w-32 h-32 flex flex-shrink-0 mx-auto">
      <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/61.jpg" alt="" />
     </div>
     <p className="pt-2 mt-3 text-xl font-semibold text-gray-50">{friend.user.username}</p>
     <p className="text-base mt-1 text-gray-100">{friend.user.useremail}</p>
    </div>

    <div className="flex justify-between">
     <div className="p-5 text-base text-black mx cursor-pointer">1:1 채팅</div>
     <div
      className="p-5 text-base text-black cursor-pointer"
      onClick={(e) => {
       deleteFriend(e, friend.user.id);
      }}
     >
      친구삭제
     </div>
    </div>
   </div>
  </div>
 );
};

export default UserModal;
