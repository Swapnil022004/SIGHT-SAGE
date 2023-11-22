import { useEffect, useState } from "react";
import axios from "axios";
import REQUEST_URL from "../Utils";
import SetCookie from "../Hooks/setCookie";
import GetCookie from "../Hooks/getCookie";
import { useNavigate } from "react-router-dom";
import main from "../assets/eyecarelogo.jpg"
const SignUpCompoent = () => {
  const navigate=useNavigate()
  document.body.style.backgroundColor = "#232B2B";
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const submitionHandler=async(e)=>{
      e.preventDefault();
      console.log(`${REQUEST_URL}/user`)
      const UserSingup=await axios.post(`${REQUEST_URL}/user/register`,{
          Name,
          Email,
          Password
      })
      console.log(UserSingup);
      navigate("/")
  }

  return ( 
    <div className="LoginComponent">
      <div className="loginportalContainer"> 
      <div className="picturepart">
        <img src={main}/>
      </div>
      
      <div className="leaveform">
        <div className="loginformcontainer"> 
          <h1>SIGN UP</h1>
          <form className="form">
            <div className="formInputContainer">
            <label>Email</label>
            <input
              className="login-email-input"
              placeholder="Enter Registerd Email..."
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
              ></input>
              </div>
              <div className="formInputContainer">
            <label>Password</label>
            <input
              className="login-password-input"
              placeholder="Enter Password..."
              onChange={(e)=>{
                setPassword(e.target.value)
              }}
              ></input>
              </div>
            <button
              onClick={(e) => {
                submitionHandler(e);
              }}
            >
              Sign Up 
            </button>
          </form>
          <div className="loginfooter">
          <p>Already have an account?</p>
            <a href="/">Login</a>
          </div>
      </div>
    </div>
    </div>
    </div>
   );
}
 
export default SignUpCompoent;