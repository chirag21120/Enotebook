import React, { useState } from 'react'
import {  useNavigate } from "react-router-dom";
function Login(props) {
    const [credential,setCredential] =useState({email:"",password:""});
    let navigate = useNavigate();
    const onChange = (e) => {
        setCredential({...credential,[e.target.name]:e.target.value})
      };
    const handleLogin = async(e)=>{
        e.preventDefault();
       const response = await fetch('http://localhost:5000/api/auth/login',{
            method: 'POST',
            headers :{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email: credential.email,
                password: credential.password
            })
        })
        const json = await response.json();
        if(json.success){
            localStorage.setItem('token',json.authtoken)
            props.showAlert('Logged In successfull!','success')
            navigate('/');
        }
        else{
            props.showAlert('Enter valid credentials','danger')
        }
        console.log(json);
    }
    return (
    <>
    <div className="container">
      <form onSubmit={handleLogin}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credential.email} required onChange={onChange} aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" required name='password' value={credential.password} onChange={onChange} />
  </div>
  <button type="submit" className="btn btn-primary" >Login</button>
</form>
</div>
    </>
  )
}

export default Login
