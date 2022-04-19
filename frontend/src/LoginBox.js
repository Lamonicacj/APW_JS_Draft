import { useState } from "react";


import "./App.css";
/* import "./SignUp"; */
import SignUp from "./SignUp";
//import { Button } from 'react-bootstrap';



function LoginBox({ logInFunc }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="loginBox">
      <h1>Login page</h1>
      <div>
        Username:{" "}
        <input
          onChange={(event) => {
            setUsername(event.currentTarget.value);
          }}
        />
      </div>
      <div>
        Password:{" "}
        <input
          onChange={(event) => {
            setPassword(event.currentTarget.value);
          }}
        />
      </div>
      <button
        onClick={() => {
          // Make calls to database or whatever
          console.log(
            "The username is " + username + " and the password is " + password
          );
          logInFunc();
        }}
      >
        Submit
     </button>
     <button
          onClick={()=>{
            console.log("test button works") 
          } }
          >
          
          
           
          Sign Up
       </button> 
       
       <button  
          onClick={() => SignUp.push('/SignUp')}>Sign Up
          </button> 
 


         {/*  <form>
            <Button variant="btn btn-success" onClick={() => SignUp.push('/SignUp')}>Click button to view products</Button>
          </form>   */}
    </div>
    
  );
  

  }

  



export default LoginBox;