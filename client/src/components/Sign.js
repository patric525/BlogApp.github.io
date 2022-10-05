import React, { useState } from 'react'
import Axios from 'axios'

const Sign = () => {
    const[p, setP]=useState('password')
    const [img, setImg] = useState(null)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const postdata = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('img', img)
        formData.append('name', name)
        formData.append('email', email)
        formData.append('password', password)
        Axios.post('/createuser', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json'
            }
        })
        document.getElementById('img').value = ''
        document.getElementById('name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('password').value = ''
    }
    const show=()=>{
        if(p==='password'){
            setP('text')
        }
        else{
            setP('password')
        }
    }
    return (
        <div className='outer-con'>
            <div className=' d-flex flex-column justify-content-center align-items-center form-con'>
                <h1 style={{fontSize:'30px', marginBottom:'1rem'}}>Hello,friend!</h1>
                <form onSubmit={postdata} encType='multipart/form-data'>
                    <div className="mb-3">
                        <input className="form-control" type="file" name='img' id="img" onChange={(e) => { setImg(e.target.files[0]) }} />
                        <i class="fa-solid fa-id-card"></i>
                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" name='name' value={name} placeholder='Name' onChange={(e) => { setName(e.target.value) }} autoComplete='off' required/>
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name='email' value={email} placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} autoComplete='off' required />
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <div className="mb-3">
                        <input type={p} className="form-control" name='password' value={password} id="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} autoComplete='off' required/>
                        <i class="fa-solid fa-lock" onClick={show} ></i>
                    </div>
                    <button type="submit" className="btn" style={{ backgroundColor: 'rgb(0,128,0,0.5)', color: 'white' , marginLeft:'5.2rem'}}>Create Account</button>
                </form>
            </div>
            <div className='right'>
               <h1>Glad to see you!</h1>
                <p style={{textAlign:'center', fontSize:'20px'}}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quasi quaerat eaque mollitia.</p>
            </div>
        </div>
    )
}

export default Sign
