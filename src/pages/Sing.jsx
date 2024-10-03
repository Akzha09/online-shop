import React, {useState} from 'react'
import "./Sing.css"
import { Link } from 'react-router-dom'
import aa1 from "../assets/image/aa1.png"  
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {  toast } from 'react-toastify';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

import { signInWithEmailAndPassword } from 'firebase/auth'

function Sing() {
    const [user, setUser] = useState({email:"",  password:""})
    const [active, setActive] = useState(false)

    function handler(event){
        const {value, name} =event.target


        setUser({...user, [name] : value})
    }
    async function createUser(){
        try {
           const res = await createUserWithEmailAndPassword(auth, user.email, user.password) 
           if(res)
            toast.success("user was success created")
        
           console.log(res);
        } catch (error) {
            console.log(error);
            toast.error("user alredy in use")
        }

    }
  return (
    <div className='box1'>
        <div className='box2'>
            <img src={aa1} alt="" />

        </div>
            <div className='box-left1'>
            <h1>Create an account</h1>
            <span>Enter your details below</span>
            </div>
        <div className='box-left'>
            <input type="text" placeholder='name' /> 
            <br />
            <input type="email" placeholder='Email or Phone Number'  value={user.email} name="email" onChange={handler} />
            <div className='inputs' >
            <input type={active ? "text" : "password"} placeholder='Password' value={user.password} name="password" onChange={handler}/>
          {active ? <FaEyeSlash onClick={() => setActive(false)} />: <FaEye onClick={() => setActive(true)}/>}
            </div>

            <br />
            <br />
            <button onClick={() => createUser()}>Create Account</button>
           <br />
           


        </div>
        <button className='a1'>Sign up with Google</button>
        <p className='a2'>Already have account?</p>
        <div className='login'>

        <ul>
            <li>
            <Link to="/login">Login</Link> 
            </li>
        </ul>
        </div>


    </div>
  )
}

export default Sing
