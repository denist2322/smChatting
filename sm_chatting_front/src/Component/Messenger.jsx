import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Messanger/Footer";
import SockJS from "sockjs-client";
import Stomp from "stompjs";
import Talk from "../Messanger/Talk.jsx";

import axios from "axios";
import "./Messenger.css";

const ImgSize = {
  width: "80px",
  height: "64px"
}


const Messenger = () =>{
    const navigate = useNavigate();

    // 로그인 되어 있는지 체크한다.
    const isLogined = async (e) => {
        if(localStorage.getItem("Token") === null){
            console.log("왔음");
            navigate("/");      
            return;  
        }
    }

    const [msg, setMsg] = useState([]);
    const [content, setContent] = useState("");
    let socket = new SockJS("http:/localhost:8031/chat/chatting");
    let client = Stomp.over(socket);
  
    useEffect(() => {
      client.connect({}, () => {
        // 연결시 jwt를 보냄
        // client.send("/app/join", {} ,JSON.stringify(localStorage.getItem("Token")))
  
        // (초기 셋팅)처음 들어오면 DB에 있는 메시지를 추출함
        client.send(`/app/first/1과2`, {}, JSON.stringify("success"));
  
        client.subscribe("/queue/firstChat/1과2", function (Message) {
          const newMsg = JSON.parse(Message.body);
          setMsg(newMsg);
        });
  
        client.subscribe("/queue/addChatToClient/1과2", function (Message) {
          const newMsg = JSON.parse(Message.body);
          setMsg(prev => ([...prev, newMsg]));
        });
      });
    }, []);


    const Logout = (e) =>{
        e.preventDefault();
        localStorage.removeItem("Token");
        navigate("/");
    }

    return (    
        <div className="h-screen w-full flex antialiased text-gray-200 bg-gray-900 overflow-hidden" onLoad={isLogined}>
            <div className="flex-1 flex flex-col">
                <main className="flex-grow flex flex-row min-h-0">
                    <section className="flex flex-col flex-none overflow-auto w-24 hover:w-64 group lg:max-w-sm md:w-2/5 transition-all duration-300 ease-in-out">
                        <div className="header p-4 flex flex-row justify-between items-center flex-none">
                            <div className="relative flex flex-shrink-0" style={ImgSize}>
                                <img alt="" src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvlK8S%2FbtrLQog5d4O%2FZrKWnmHMkH50xmLXJ0J0sk%2Fimg.png"/>
                            </div>
                            <p className="text-xl font-bold hidden md:block group-hover:block mr-12">SMhopeTalk</p>
                            <p/>
                        </div>
                        <div className="search-box p-4 flex-none">
                            <form onSubmit={onsubmit}>
                                <div className="relative">
                                    <label>
                                        <input className="rounded-full py-2 pr-6 pl-10 w-full border border-gray-800 focus:border-gray-700 bg-gray-800 focus:bg-gray-900 focus:outline-none text-gray-200 focus:shadow-md transition duration-300 ease-in"
                                            type="text" value="" placeholder="Search Messenger"/>
                                        <span className="absolute top-0 left-0 mt-2 ml-3 inline-block">
                                            <svg viewBox="0 0 24 24" className="w-6 h-6">
                                                <path fill="#bbb"
                                                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/>
                                            </svg>
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </div>
                        <div className="active-users flex flex-row p-2 overflow-auto w-0 min-w-full">
                            <div className="text-sm text-center mr-4">
                                <button className="flex flex-shrink-0 focus:outline-none block bg-gray-800 text-gray-600 rounded-full w-20 h-20"
                                        type="button">
                                    <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                                        <path d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/>
                                    </svg>
                                </button>
                                <p>Your Story</p>
                            </div>
                            <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
                                <img className="shadow-md rounded-full w-full h-full object-cover"
                                    src="https://randomuser.me/api/portraits/women/12.jpg"
                                    alt=""
                                />
                            </div></div><p>Anna</p></div>
                            <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
                                <img className="shadow-md rounded-full w-full h-full object-cover"
                                    src="https://randomuser.me/api/portraits/men/75.jpg"
                                    alt=""
                                />
                                <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                    <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                </div>
                            </div></div><p>Jeff</p></div>
                            <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-blue-600 rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
                                <img className="shadow-md rounded-full w-full h-full object-cover"
                                    src="https://randomuser.me/api/portraits/women/42.jpg"
                                    alt=""
                                />
                            </div></div><p>Cathy</p></div>
                            <div className="text-sm text-center mr-4"><div className="p-1 border-4 border-transparent rounded-full"><div className="w-16 h-16 relative flex flex-shrink-0">
                                <img className="shadow-md rounded-full w-full h-full object-cover"
                                    src="https://randomuser.me/api/portraits/women/87.jpg"
                                    alt=""
                                />
                                <div className="absolute bg-gray-900 p-1 rounded-full bottom-0 right-0">
                                    <div className="bg-green-500 rounded-full w-3 h-3"></div>
                                </div>
                            </div></div><p>Madona</p></div>
                        </div>
                        <div className="contacts p-2 flex-1 overflow-y-scroll">
                            <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/61.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                                    <p>Angelina Jolie</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">미안 나 남자친구 생겼어</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center p-3 hover:bg-gray-800 rounded-lg relative">
                                <div className="w-16 h-16 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
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
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
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
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/23.jpg"
                                        alt="User2"
                                    />
                                </div>
                                <div className="flex-auto min-w-0 ml-4 mr-6 hidden md:block group-hover:block">
                                    <p>Emma Watson</p>
                                    <div className="flex items-center text-sm text-gray-600">
                                        <div className="min-w-0">
                                            <p className="truncate">생각을 해봤는데 미안 우린 좋은 친구..
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-4 h-4 flex flex-shrink-0 hidden md:block group-hover:block">
                                    <img className="rounded-full w-full h-full object-cover" alt="user2"
                                        src="https://randomuser.me/api/portraits/women/23.jpg"/>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="flex flex-col flex-auto border-l border-gray-800">
                        <div className="chat-header px-6 py-4 flex flex-row flex-none justify-between items-center shadow">
                            <div className="flex">
                                <div className="w-12 h-12 mr-4 relative flex flex-shrink-0">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/33.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="text-sm">
                                    <p className="flex font-bold text-base">Scarlett Johansson</p>
                                </div>
                            </div>
                            <div class="flex">
                            <button 
                                type="button" 
                                class="block rounded-full hover:bg-gray-700 bg-gray-800 w-10 h-10 p-2"
                                onClick={Logout}>
                                로그아웃
                            </button>
                            </div>
                        </div>
                        <div className="chat-body p-4 flex-1 overflow-y-scroll">
                            {/* <div className="flex flex-row justify-start">
                                <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/33.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                                    <div className="flex items-center group">
                                        <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">야 프로필 사진 바꿨는데 어때?</p>
                                        <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                                <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
        M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
        C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="p-4 text-center text-sm text-gray-500">FRI 3:04 PM</p>
                            <div className="flex flex-row justify-end">
                                <div className="messages text-sm text-white grid grid-flow-row gap-2">
                                    <div className="flex items-center flex-row-reverse group">
                                        <p className="px-6 py-3 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">오 별로다! 나도 프로필 사진 바꿀건데 한번 봐죠~</p>
                                        <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                                <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
        M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
        C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
        삭제
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="p-4 text-center text-sm text-gray-500">SAT 2:10 PM</p>
                            <div className="flex flex-row justify-start">
                                <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
                                    <img className="shadow-md rounded-full w-full h-full object-cover"
                                        src="https://randomuser.me/api/portraits/women/33.jpg"
                                        alt=""
                                    />
                                </div>
                                <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
                                    <div className="flex items-center group">
                                        <p className="px-6 py-3 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">아뉘.. 이쁘다고좀 해줘;; 그래서 뭘로 바꿀 건데?</p>
                                        <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                                <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
        M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
        C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
        삭제
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <p className="p-4 text-center text-sm text-gray-500">12:40 PM</p>
                            <div className="flex flex-row justify-end">
                                <div className="messages text-sm text-white grid grid-flow-row gap-2">
                                    <div className="flex items-center flex-row-reverse group">
                                        <a className="block w-64 h-64 relative flex flex-shrink-0 max-w-xs lg:max-w-md" href="#">
                                            <img className="absolute shadow-md w-full h-full rounded-l-lg object-cover" src="https://unsplash.com/photos/8--kuxbxuKU/download?force=true&w=640" alt="hiking"/>
                                        </a>
                                        <button type="button" className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2">
                                            <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
                                                <path d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
        M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
        C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"/>
        삭제
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                       <div className="chat-footer flex-none">
                        {<Footer
                           client = {client}
                           content = {content}
                           setContent = {setContent}  
                        />}
                        </div>

                    </section>
                </main>
            </div>
        </div>
    )
}

export default Messenger;