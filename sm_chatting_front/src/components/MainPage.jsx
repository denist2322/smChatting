import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const MainPage = () => {
    const [userEmail,setUserEmail] = useState("");
    const [userPassword,setUserPassword] = useState("");
    const [passwordType, setPasswordType] = useState({
        type: 'password',
        visible: false
    });

    const handlePasswordType = e =>{
        setPasswordType(()=>{
            if(!passwordType.visible){
                return {type: 'text', visible: true};
            }
            return {type: 'password', visible: false};
        })
    };

    const mainImage = {
        backgroundImage: "url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)"
    }

    const onSubmit = async (e) => {
        e.prventDefault();
        await axios({
            url: "http://localhost:8031/login",
            method: "POST",
            data: {
                userEmail : userEmail,
                userPassword : userPassword
            }
        }); 
    }
 
    return(
        <div className="bg-white dark:bg-gray-900">
        <div className="flex justify-center h-screen">
            <div className="hidden bg-cover lg:block lg:w-2/3" style={mainImage}>
                <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-4xl font-bold text-white">SMchatting</h2>
                        
                        <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
                    </div>
                </div>
            </div>
            
            <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
                <div className="flex-1">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">SMchatting</h2>
                    </div>

                    <div className="mt-8">
                        <form onSubmit={onSubmit}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                                <input 
                                    type="email" 
                                    name="userEmail" 
                                    placeholder="example@example.com" 
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                    value={userEmail}
                                    onChange={(e) => {
                                        setUserEmail(e.target.value);
                                    }}
                                    />
                            </div>

                            <div className="mt-6">
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                                    <a href="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">비밀번호를 잊으셨나요?</a>
                                </div>

                                <input 
                                    type={passwordType.type} 
                                    name="userPassword" 
                                    placeholder="Your Password" 
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                    value={userPassword}
                                    onChange={(e) => {
                                        setUserPassword(e.target.value);
                                    }}
                                    />
                                <span onClick={handlePasswordType}>
                                    {passwordType.visible ? <FontAwesomeIcon icon={faEye} className="mt-1" /> : <FontAwesomeIcon icon={faEyeSlash} className="mt-1"/>}
                                </span>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    로그인
                                </button>
                            </div>
                        </form>

                        <p className="mt-6 text-sm text-center text-gray-400">계정이 없으신가요? <a href="" className="text-blue-500 focus:outline-none focus:underline hover:underline">회원가입</a></p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default MainPage;