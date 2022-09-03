import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
 const [message, setMessage] = useState("");

 useEffect(() => {
  const getData = async () => {
   const BackData = await axios({
    url: "http://localhost:8031/test",
    method: "GET",
   });
   setMessage(BackData.data);
  };
  getData();
 }, []);

 return (
  <div className="App">
   <h1>{message}</h1>
   <div>안녕</div>
  </div>
 );
}

export default App;
