import { Link, useNavigate } from "react-router-dom";
const Header = () => {
 const navigate = useNavigate();
 const Logout = (e) => {
  e.preventDefault();
  localStorage.removeItem("Token");
  navigate("/");
 };

 return (
  <>
   <div className="flex">
    <div className="w-12 h-12 mr-4 flex flex-shrink-0">
     <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/33.jpg" alt="" />
    </div>
    <div className="text-sm">
     <p className="flex font-bold text-base">Scarlett Johansson</p>
    </div>
   </div>
   <div className="flex">
    <button type="button" class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2" onClick={Logout}>
     로그아웃
    </button>
   </div>
  </>
 );
};

export default Header;
