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
<div className="containr">
	<div className="screen">
		<div className="screen__content">
			<form className="login" onSubmit={handleSignup}>
      <div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input form-control" id='name' name='name' placeholder="Name" value={credential.name} required onChange={onChange} />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-user"></i>
					<input type="text" className="login__input form-control" id='email' name='email' placeholder="User name / Email" value={credential.email} required onChange={onChange} />
				</div>
				<div className="login__field">
					<i className="login__icon fas fa-lock"></i>
					<input type="password" className="login__input form-control" placeholder="Password" id="password" required name='password' value={credential.password} onChange={onChange} />
				</div>
				<button className="button login__submit" type='submit'>
					<span className="button__text">Create Account</span>
					<i className="button__icon fas fa-chevron-right"></i>
				</button>				
			</form>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>
    </>
  )
}

export default Signup
