import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    const [credential,setCredential] =useState({name:"",email:"",password:""});
    let navigate = useNavigate();
    const onChange = (e) => {
        setCredential({...credential,[e.target.name]:e.target.value})
      };
    const handleSignup = async(e)=>{
        e.preventDefault();
       const response = await fetch('http://localhost:5000/api/auth/createuser',{
            method: 'POST',
            headers :{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name: credential.name,
                email: credential.email,
                password: credential.password
            })
        })
        const json = await response.json();
        if(json.success){
            localStorage.setItem('token',json.authtoken);
            props.showAlert('User Created Successfully!','success')
            navigate('/');
        }
        else{
            props.showAlert('User Already Exists!','danger')
        }
        console.log(json);
    }
  return (
    <>
      <div className="container">
      <form onSubmit={handleSignup}>
  <div className="mb-3">
    <label htmlFor="name" className='form-label'>Name</label>
    <input type="text" className='form-control' id='name' name='name' required value={credential.name} onChange={onChange} />
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name='email' value={credential.email} onChange={onChange} aria-describedby="emailHelp" required />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' value={credential.password} onChange={onChange} required />
  </div>
  <button type="submit" className="btn btn-primary" >Sign Up</button>
</form>
</div>
    </>
  )
}

export default Signup
