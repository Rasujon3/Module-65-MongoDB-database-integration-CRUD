import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AddUser from "./components/AddUser/AddUser";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="user/add" element={<AddUser />} />
      </Routes>
    </div>
  );
}

export default App;
