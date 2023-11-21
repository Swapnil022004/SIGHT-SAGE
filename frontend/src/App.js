import "./App.css";
// import HomePage from "./components/homepage";
import LoginComponent from "./components/login";
import {Routes,Route} from "react-router-dom"
import MainPageCompoennt from "./components/mainPage";
import TestPageComponent from "./components/testPage";
import SignUpCompoent from "./components/signup";
import ReportHistory from "./components/history";
import PaymentUpdateComonent from "./components/paymentUpdate";
import DoctorCompoent from "./components/doctorPage";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<MainPageCompoennt />} />
      <Route exact path="/login" element={<LoginComponent />} />
      <Route exact path="/signup" element={<SignUpCompoent />} />
      <Route exact path="/taketest" element={< TestPageComponent/>} />
      <Route exact path="/reporthistory" element={< ReportHistory/>} />
      <Route exact path="/reportupdate/:id" element={< PaymentUpdateComonent/>}/>
      <Route exact path="/doctorList" element={< DoctorCompoent/>}/>
      </Routes>
    </div>
  );
}

export default App;
