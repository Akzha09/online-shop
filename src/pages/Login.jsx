import React, {useState, useEffect} from 'react'
import "./Login.css"
import { auth } from "../firebase"
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify';


function Login() {
  const [user, setUser] = useState({ email: "", password: "", });
  const [active, setActive] = useState(false)

  function handler(event) {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value })
  }
  async function createUser() {
    try {
      const res = await signInWithEmailAndPassword(auth, user.email, user.password)
      if(res) {
        toast.success("user was success created")
      }
      console.log(res);
    } catch (error) {
      console.log(error);
      toast.error("user alredy in use")
    }
  }
  return (
    <div className='box1'>
      
        <div className='box2'>
            <img src="https://lumpics.ru/wp-content/uploads/2021/11/kak-najti-korzinu-v-samsunge.png" alt="" />

        </div>
            <div className='box-left1'>
            <h1>Create an account</h1>
            <span>Enter your details below</span>
            </div>
        <div className='box-left'>
            <input type="text" placeholder='name' /> 
            <br />
            <input
                type="email"
                placeholder="Email or Phone Number"
                value={user.email}
                name="email"
                onChange={handler}
              />
            <br />
            <input
                type={active? "text" : "password"}
                placeholder="Password"
                value={user.password}
                name="password"
                onChange={handler}
              />
            <br />
            <button onClick={() => createUser()} type="submit">Create Account</button>
           <br />
           
           


        </div>
        <button className='a1'>Sign up with Google</button>
        <p className='a2'>Already have account?</p>
        


    </div>
  )
}

export default Login
