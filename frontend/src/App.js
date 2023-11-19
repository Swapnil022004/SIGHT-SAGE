import "./App.css";
// import HomePage from "./components/homepage";
import LoginComponent from "./components/login";
import {Routes,Route} from "react-router-dom"
import MainPageCompoennt from "./components/mainPage";
import TestPageComponent from "./components/testPage";
import SignUpCompoent from "./components/signup";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<MainPageCompoennt />} />
      <Route exact path="/login" element={<LoginComponent />} />
      <Route exact path="/signup" element={<SignUpCompoent />} />
      <Route exact path="/taketest" element={< TestPageComponent/>} />
      </Routes>
    </div>
  );
}

export default App;
