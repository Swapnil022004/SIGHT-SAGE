import { useEffect, useState } from "react";
import axios from "axios";
import REQUEST_URL from "../Utils";
import SetCookie from "../Hooks/setCookie";
import GetCookie from "../Hooks/getCookie";
import { useNavigate } from "react-router-dom";
import main from "../assets/eyecarelogo.jpg"
const LoginComponent = () => {
  const navigate=useNavigate()
    const [Loginemail, setLoginemail] = useState("")
    const [Loginpassword, setLoginpassword] = useState("")
    const LoginsubmitionHandler=async(e)=>{
        e.preventDefault();
        // console.log(Loginemail,Loginpassword)
        const Login_data={
            Email:Loginemail,
            Password:Loginpassword,
            Token:GetCookie()
        }
        const UserLogin=await axios.post(`${REQUEST_URL}/user/login`,Login_data)
        // console.log(UserLogin.data.cookie);
        SetCookie({value:UserLogin.data.cookie})
        console.log(GetCookie())
        console.log(UserLogin.data)
        if(UserLogin.data.logedin==true){
            navigate("/")
        }
    }
    const loginCheck=async()=>{
        // e.preventDefault();
        const UserLogin=await axios.post(`${REQUEST_URL}/user/login`,{
            Token:GetCookie()
        })
        // console.log(UserLogin.data.cookie);
        SetCookie({value:UserLogin.data.cookie})
        console.log(GetCookie())
        console.log(UserLogin.data)
        if(UserLogin.data.logedin==true){
            if(UserLogin.data.role=="user"){
                navigate("/")
            }
            else{
                navigate("/admin")
            }
            
        }
    }
    useEffect(()=>{
        loginCheck()
    },[])
  return ( 
    <div className="LoginComponent">
      <div className="loginportalContainer"> 
      <div className="picturepart">
        <img src={main}/>
      </div>
      
      <div className="leaveform">
        <div className="loginformcontainer"> 
          <h1>LOGIN</h1>
          <form className="form">
            <div className="formInputContainer">
            <label>Email</label>
            <input
              className="login-email-input"
              placeholder="Enter Registerd Email..."
              onChange={(e)=>{
                setLoginemail(e.target.value)
              }}
              ></input>
              </div>
              <div className="formInputContainer">
            <label>Password</label>
            <input
              className="login-password-input"
              placeholder="Enter Password..."
              onChange={(e)=>{
                setLoginpassword(e.target.value)
              }}
              ></input>
              </div>
            <button
              onClick={(e) => {
                LoginsubmitionHandler(e);
              }}
            >
              LogIn
            </button>
          </form>
          <div className="loginfooter">
          <p>Don't have an account?</p>
            <a href="/signup">Sign Up</a>
          </div>
          {/* <span><a>Sign Up</a></span> */}
      </div>
    </div>
    </div>
    </div>
   );
}
 
export default LoginComponent;