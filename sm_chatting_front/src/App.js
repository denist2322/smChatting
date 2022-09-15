import "./App.css";
import MainPage from "./Component/MainPage.jsx";
import MessengerPage from "./Component/Messenger.jsx";
import JoinPage from "./Component/JoinPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Router/PrivateRoute.jsx";
import Talk from "./Data/Talk.jsx";

function App() {
 return (
  // <Router>
  //  <Routes>
  //   <Route path="/" element={<MainPage />}></Route>
  //   <Route path="/MessengerPage" element={<PrivateRoute component={<MessengerPage />} />}></Route>
  //   <Route path="/JoinPage" element={<JoinPage />}></Route>
  //  </Routes>
  // </Router>
  <Talk />
 );
}

export default App;
