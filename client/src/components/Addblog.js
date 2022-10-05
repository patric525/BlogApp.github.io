import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addblog = () => {
    const navigate = useNavigate()
    const [user, SetUser] = useState('')
    const [img, setImg] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const postdata = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('img', img)
        formData.append('title', title)
        formData.append('description', description)
        formData.append('username', user)
        axios.post('/addblog', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Accept: 'application/json'
            }
        })
        navigate('/myblog')
    }
    const getname = async () => {
        try {
            const data = await fetch('/about', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/jaon'
                },
                credentials: 'include'
            })
            const res = await data.json()
            if (res) {
                console.log(res);
                SetUser(res.name)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getname()
    })
    return (
        <form onSubmit={postdata} encType='multipart/form-data' className='container my-4'>
            <div class="mb-3">
                <input type="text" class="form-control" onChange={(e) => { setTitle(e.target.value) }} id="exampleInputEmail1" name='title' placeholder='Title to the blog' value={title} aria-describedby="emailHelp" required />
            </div>
            <div class="mb-3">
                <textarea class="form-control" value={description} name='description' placeholder='Description' id="exampleFormControlTextarea1" rows="5" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            <div class="mb-3">
                <input class="form-control" type="file" name='img' onChange={(e) => { setImg(e.target.files[0]) }} id="formFile" required />
            </div>
            <button type="submit" class="btn" style={{backgroundColor:'rgb(0, 128, 0, 0.5)', color:"white"}}>Add Blog</button>
        </form>
    )
}

export default Addblog
