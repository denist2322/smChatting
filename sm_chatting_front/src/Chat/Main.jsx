const Main = ({ chatMsg, setChatMsg }) => {
 let userId = parseInt(localStorage.getItem("id"));
 return (
  <>
   {chatMsg.map((_msg, index) =>
    _msg.senduserid === userId ? (
     <div key={index} className="flex flex-row justify-end mt-1">
      <div className="messages text-sm text-white grid grid-flow-row gap-2">
       <div className="flex items-center flex-row-reverse group">
        <p className="px-4 py-2 rounded-t-full rounded-l-full bg-blue-700 max-w-xs lg:max-w-md">{_msg.content}</p>
        <button
         type="button"
         className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
        >
         <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
          <path
           d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
          />
          삭제
         </svg>
        </button>
       </div>
      </div>
     </div>
    ) : (
     <div key={index} className="flex flex-row justify-start mt-1">
      <div className="w-8 h-8 relative flex flex-shrink-0 mr-4">
       <img className="shadow-md rounded-full w-full h-full object-cover" src="https://randomuser.me/api/portraits/women/33.jpg" alt="" />
      </div>
      <div className="messages text-sm text-gray-700 grid grid-flow-row gap-2">
       <div className="flex items-center group">
        <p className="px-4 py-2 rounded-t-full rounded-r-full bg-gray-800 max-w-xs lg:max-w-md text-gray-200">{_msg.content}</p>
        <button
         type="button"
         className="hidden group-hover:block flex flex-shrink-0 focus:outline-none mx-2 block rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-700 bg-gray-800 w-8 h-8 p-2"
        >
         <svg viewBox="0 0 20 20" className="w-full h-full fill-current">
          <path
           d="M10.001,7.8C8.786,7.8,7.8,8.785,7.8,10s0.986,2.2,2.201,2.2S12.2,11.215,12.2,10S11.216,7.8,10.001,7.8z
M3.001,7.8C1.786,7.8,0.8,8.785,0.8,10s0.986,2.2,2.201,2.2S5.2,11.214,5.2,10S4.216,7.8,3.001,7.8z M17.001,7.8
C15.786,7.8,14.8,8.785,14.8,10s0.986,2.2,2.201,2.2S19.2,11.215,19.2,10S18.216,7.8,17.001,7.8z"
          />
         </svg>
        </button>
       </div>
      </div>
     </div>
    )
   )}
  </>
 );
};

export default Main;

{
 /* <div className="flex flex-row justify-start">
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
                            </div> */
}
