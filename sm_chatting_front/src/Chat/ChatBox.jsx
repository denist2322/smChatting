import { useCallback, useRef, useState, useEffect } from "react";
import Main from "./Main";

const ChatBox = ({ chatMsg }) => {
 const scrollRef = useRef();
 const boxRef = useRef(null);

 const [scrollState, setScrollState] = useState(true); // 자동 스크롤 여부

 const scrollEvent = () => {
  const scrollTop = boxRef.current.scrollTop; // 스크롤 위치
  const clientHeight = boxRef.current.clientHeight; // 요소의 높이
  const scrollHeight = boxRef.current.scrollHeight; // 스크롤의 높이

  // 스크롤이 맨 아래에 있을때
  setScrollState(scrollTop + clientHeight >= scrollHeight - 100 ? true : false);
 };
 const scroll = useCallback(scrollEvent, []);

 useEffect(() => {
  if (scrollState) {
   scrollRef.current.scrollIntoView({ behavior: "smooth" });
   // scrollRef의 element위치로 스크롤 이동 behavior는 전환 에니메이션의 정의
  }
 }, [chatMsg]);

 useEffect(() => {
  boxRef.current.addEventListener("scroll", scroll);
 });

 return (
  <div ref={boxRef}>
   {<Main chatMsg={chatMsg} />}
   <div ref={scrollRef} />
  </div>
 );
};

export default ChatBox;
