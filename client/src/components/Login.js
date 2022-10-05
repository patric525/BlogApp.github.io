import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate= useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const postdata = async (e) => {
        try {
            e.preventDefault()
            const data = await fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email, password
                })
            })
            const res = await data.json()
            if (res) {
                window.alert(res.message)
                navigate('/addblog')
            }
        } catch (error) {
            console.log(error);
            navigate('/login')
        }
    }
   
    return (
        <div className='outer-login'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 style={{marginBottom:'1rem' ,marginLeft: '4rem'}}>Login</h1>
                <form onSubmit={postdata} >
                    <div className="mb-3">
                        <input type="email" className="form-control form-login" id="email" aria-describedby="emailHelp" placeholder='Email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} style={{marginLeft:'4rem'}}/>
                        <i class="fa-solid fa-envelope email"></i>
                    </div>
                    <div className="mb-3">
                        <input type='password' className="form-control form-login" name='password' value={password} id="password" placeholder='Password' style={{marginLeft:'4rem'}} onChange={(e) => { setPassword(e.target.value) }} />
                        <i class="fa-solid fa-lock password"  ></i>
                    </div>
                    <button type="submit" className="btn" style={{ backgroundColor: 'rgb(0,128,0,0.5)', color: 'white', marginLeft: '7.5rem' }}>Login</button>
                </form>
            </div>
            <div className='login-right d-flex flex-column justify-content-center align-items-center' style={{backgroundColor:'rgb(0, 128, 0, 0.5)' , marginLeft:'3.6rem'}}>
                <h1 style={{fontSize:'1.4rem', color:'white'}}>We will create a beautiful blog for you!</h1>
                <p style={{color:'white'}}>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Sequi eius nam facilis.</p>
            </div>
        </div>
    )
}

export default Login

