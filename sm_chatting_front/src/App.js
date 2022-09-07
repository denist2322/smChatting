import "./App.css";
import MainPage from "./components/MainPage.jsx";
import MessengerPage from "./components/Messenger.jsx";
import JoinPage from "./components/JoinPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/MessengerPage" element={<MessengerPage />}></Route>
        <Route path="/JoinPage" element={<JoinPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
