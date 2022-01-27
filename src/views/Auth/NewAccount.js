import React from "react";
import Login from "./Login"

const NewAccount = () => {
    return (
        <div className="NewAccount">
            <h1>Sign Up for New Acoount</h1> 
            <input type="text" placeholder="enter your Firstname"></input>
            <input type="text" placeholder="enter your Lastname"></input><br/>
            <input type="email" placeholder="enter your email"></input><br/>
            <input type="password" placeholder="enter your password"></input><br/>
            <input type="password" placeholder="confirm your password"></input><br/>
            <button type="submit" value="submit">go to login</button>
          
            <button type="reset" value="reset">reset</button>
           
  
        </div>
    )
}
export default NewAccount;


