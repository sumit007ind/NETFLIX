import React from "react";
import Header from "./Header";
import { useState } from "react";
import { flushSync } from "react-dom";
import axios from "axios";
import API_END_POINT  from "../utils/Constant";

const Login = () => {
  const [islogin, setIslogin] = useState(true);
  const [Fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Loginhandler = () => {
    setIslogin(!islogin);
  };
    const getInputData = async (e) => {
    e.preventDefault();
    if(islogin){
      try {
        const res = await axios.post(`${API_END_POINT}/Login`, {
          Email: email,
          Password: password,
        });
        console.log(res);
        alert("Login successful");
        
      } catch (error) {
        console.error("Error during login:", error);
        
        
      }

    }else{
try {
      const res = await axios.post(`${API_END_POINT}/register`, {
        FullName: Fullname,
        Email: email,
        Password: password,
      }); 
      console.log(res);

      
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
      
    }
    }
    
    
    // setEmail("");
    // setPassword("");        
    // setFullname("");
    }
  return (
    <div className="relative w-full h-screen">
      <Header />

      <img
        className="w-full h-full object-cover absolute top-0 left-0 -z-10"
        src="https://i.pinimg.com/1200x/3b/88/8a/3b888ae33caddd009ea0262a6dace304.jpg"
        alt="background"
      />

      <div className="flex justify-center items-center h-full">
        <form onSubmit={getInputData} className="bg-black opacity-80 backdrop-blur-md p-8 rounded-lg flex flex-col gap-4 w-[300px] text-white shadow-lg">
          <h2 className="text-2xl font-bold text-center">
            {islogin ? "Login" : "Sign up"}
          </h2>

          {!islogin && (
            <input value={Fullname} onChange={(e) => setFullname(e.target.value)}
              type="text"
              placeholder="User Name"
              className="p-2 border border-gray-300 rounded 
             placeholder-gray-400 
             focus:placeholder-white 
             focus:outline-none "
            />
          )}
 
          <input value={email} onChange={(e) => setEmail(e.target.value)}
            type="email" 
            placeholder="Email"
            className="p-2 border border-gray-300 rounded 
             placeholder-gray-400 
             focus:placeholder-white 
             focus:outline-none require"
          />
          <input value={password} onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-2 border border-gray-300 rounded 
             placeholder-gray-400 
             focus:placeholder-white 
             focus:outline-none"
          />
          <div className=" bg-red-600  rounded-lg p-1 text-center mb-1 cursor-pointer hover:bg-red-700 transition-colors duration-200">
            <button className=" ">{islogin? "Login" :"SignUp"}</button>
            </div>
           
          <div className="flex  "> 
           
            <p>
              {islogin ? "New to Netflix? " : "Already have an account :)"}{" "}
            </p>
            <span
              onClick={Loginhandler}
              className="text-blue-600 cursor-pointer ml-1  underline"
            >
              {islogin ? "Singnup" : "Login"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
