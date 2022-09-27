const Header = () => {
 const ImgSize = {
  width: "80px",
  height: "64px",
 };

 return (
  <>
   <div className="relative flex flex-shrink-0" style={ImgSize}>
    <img
     alt=""
     src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbvlK8S%2FbtrLQog5d4O%2FZrKWnmHMkH50xmLXJ0J0sk%2Fimg.png"
    />
   </div>
   <p className="text-xl font-bold hidden md:block group-hover:block mr-12">SMhopeTalk</p>
   <p />
  </>
 );
};

export default Header;
