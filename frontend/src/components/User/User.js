import React, { useState } from "react";
import "./User.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function User() {
  const [login, setLogin] = useState(true);
  const[loginData,setloginData] = useState({
    email:"",password:""
  });
  const [signUp,setSignUp]=useState({
    name:"",email:"",password:""
  })

  const handleLoginData = (e)=>{
    setloginData((prevState)=>{
      return {
        ...prevState,[e.target.name]:e.target.value,
      }
    })
  }

  const navigate = useNavigate();

  const handleLogin = async () =>{
    const res = await axios.post('http://localhost:4000/api/v1/user/login',{
      email:loginData.email,
      password:loginData.password
    })
    if(res.data.success){
      localStorage.setItem('user',JSON.stringify(res.data.user));
      navigate('/')
    }
  }

  const handleSignUpData = (e) =>{
    setSignUp((prevState)=>{
      return {
        ...prevState,[e.target.name]:e.target.value
      }
    })
  }

  const handleSignUp = async ()=>{
    const res = await axios.post('http://localhost:4000/api/v1/user/signUp',{
      name:signUp.name,
      email:signUp.email,
      password:signUp.password
    });
    if(res.data.success){
      setSignUp({name:"",email:"",password:""});
      localStorage.setItem('user',JSON.stringify(res.data.user));
      navigate('/')
    }
  }

  return (
    <div className="login-main-container">
      {login ? (
        <div className="login-card-container">
          <h1 className="login-heading">Login</h1>
          <div className="login-input-container">
            <input type="text" placeholder="Email" className="login-input" name="email" onChange={(e)=>handleLoginData(e)}/>
            <input type="password" placeholder="password" className="login-input" name="password" onChange={(e)=>handleLoginData(e)}/>
          </div>
          <div className="login-btn-container">
            <p>
              Not a user ? <span onClick={()=>{setLogin(!login)}}>SignUp</span>
            </p>
            <button className="login-btn" onClick={handleLogin}>Login</button>
          </div>
        </div>
      ) : (
        <div className="login-card-container">
          <h1 className="login-heading">SignUp</h1>
          <div className="login-input-container">
            <input type="text" placeholder="Name" className="login-input" name="name" onChange={(e)=>handleSignUpData(e)}/>
            <input type="text" placeholder="Email" className="login-input" name="email" onChange={(e)=>handleSignUpData(e)}/>
            <input type="password" placeholder="password" className="login-input" name="password" onChange={(e)=>handleSignUpData(e)}/>
          </div>
          <div className="login-btn-container">
            <p>
              Already a user ? <span onClick={()=>{setLogin(!login)}}>Login</span>
            </p>
            <button className="login-btn" onClick={handleSignUp}>SignUp</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default User;
