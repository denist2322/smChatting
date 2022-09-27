import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Header = ({ chatRoomId, userId }) => {
 const navigate = useNavigate();
 const [otherOneName, setOtherOneName] = useState("");

 useEffect(() => {
  const getOtherOneName = async () => {
   const otherOne = await axios({
    url: `http://localhost:8031/otherOneName`,
    method: "POST",
    data: {
     myId: userId,
     chatRoomId,
    },
   });
   setOtherOneName(otherOne.data);
  };
  getOtherOneName();
 });

 const Logout = (e) => {
  e.preventDefault();
  localStorage.removeItem("Token");
  navigate("/");
 };

 return (
  <>
   <div className="flex">
    <div className="w-12 h-12 mr-4 flex flex-shrink-0">
     <img
      className="shadow-md rounded-full w-full h-full object-cover"
      src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FIFyGQ%2FbtrM8OsCYqS%2FkyJR43ymFXBqMiLEpTDb20%2Fimg.png"
      alt=""
     />
    </div>
    <div className="text-sm">
     <p className="flex font-bold text-base py-3">{otherOneName}</p>
    </div>
   </div>
   <div className="flex">
    <button type="button" className="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2" onClick={Logout}>
     로그아웃
    </button>
   </div>
  </>
 );
};

export default Header;
