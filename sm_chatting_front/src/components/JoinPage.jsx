import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const JoinPage = () => {
  const [passwordType, setPasswordType] = useState({
    type: "password",
    visible: false,
  });

  const handlePasswordType = (e) => {
    setPasswordType(() => {
      if (!passwordType.visible) {
        return { type: "text", visible: true };
      }
      return { type: "password", visible: false };
    });
  };

  const width ={
    width : "480px"
  }

  const fontSize = {
    fontSize: "14px"
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100"> 
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3" style={width}>
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-center">Join us</h3>
            <form action="">
                <div className="mt-4">
                    <div>
                        <label className="block" htmlFor="email">이메일</label>
                                <input type="text" placeholder="Name"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="mt-4">
                        <label className="block" htmlFor="name">이름</label>
                                <input type="text" placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="mt-4">
                        <div className="flex">
                          <label className="block">비밀번호</label>
                          <span className="ml-2" onClick={handlePasswordType}>
                            {passwordType.visible ? (
                              <FontAwesomeIcon icon={faEye} style={fontSize} />
                            ) : (
                              <FontAwesomeIcon icon={faEyeSlash} style={fontSize}/>
                            )}
                          </span>
                        </div>
                                <input type={passwordType.type} placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <div className="mt-4">
                        <label className="block">비밀번호 확인</label>
                                <input type={passwordType.type} placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                    </div>
                    <span className="text-xs text-red-400">비밀번호가 일치하지 않습니다.</span>
                    <div className="mt-4">
                      <button
                      className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      type="submit"
                      >
                        회원가입
                      </button>
                    </div>
                    <div className="flex justify-center mt-6 text-grey-dark">
                        이미 계정이 있으신가요?
                        <a className="text-blue-600 hover:underline ml-4" href="#">
                            로그인
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
  
}

export default JoinPage;