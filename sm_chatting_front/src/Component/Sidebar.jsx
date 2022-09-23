import SideHeader from "../Sidebar/Header.jsx";
import SearchUser from "../Sidebar/SearchUser.jsx";
import ChatList from "../Sidebar/ChatList";
import Users from "../Sidebar/Users.jsx";

const Sidebar = ({ listMsg, chatRoomId, setChatRoomId, client }) => {
 return (
  <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
   <div className="header p-4 flex flex-row justify-between items-center flex-none shadow">{<SideHeader />}</div>
   <div className="search-box p-4 flex-none">{<SearchUser />}</div>
   <div className="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">{<Users />}</div>
   <div className="contacts p-2 flex-1 overflow-y-scroll">{<ChatList listMsg={listMsg} setChatRoomId={setChatRoomId} />}</div>
  </section>
 );
};

export default Sidebar;
