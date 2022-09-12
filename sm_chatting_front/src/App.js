import "./App.css";
import MainPage from "./Router/MainPage.jsx";
import MessengerPage from "./Router/Messenger.jsx";
import JoinPage from "./Router/JoinPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Router/PrivateRoute.jsx";

function App() {
 const access = localStorage.getItem("Token");
 return (
  <Router>
   <Routes>
    <Route path="/" element={<MainPage />}></Route>
    <Route path="/MessengerPage" element={<PrivateRoute authenticated={access} component={<MessengerPage />} />}></Route>
    <Route path="/JoinPage" element={<JoinPage />}></Route>
   </Routes>
  </Router>
 );
}

export default App;
