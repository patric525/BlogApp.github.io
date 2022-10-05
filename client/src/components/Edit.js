import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
  var url = window.location.pathname;
  var id = url.substring(url.lastIndexOf('/') + 1);
  const navigate = useNavigate()
  const [img, setImg] = useState(null)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const postdata = (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('img', img)
    formData.append('title', title)
    formData.append('description', description)
    axios.put(`/update/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json'
      }
    })
    navigate('/myblog')
  }
  return (
    <div>
      <form onSubmit={postdata} encType='multipart/form-data' className='container my-4'>
        <div class="mb-3">
          <input type="text" class="form-control" onChange={(e) => { setTitle(e.target.value) }} id="exampleInputEmail1" name='title' placeholder='Title' value={title} aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
                <textarea class="form-control" value={description} name='description' placeholder='Description' id="exampleFormControlTextarea1" rows="5" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
        {/* <div class="mb-3">
          <input type="text" class="form-control" value={description} name='description' onChange={(e) => { setDescription(e.target.value) }} id="exampleInputPassword1" />
        </div> */}
        <div class="mb-3">
          <input class="form-control" type="file" name='img' onChange={(e) => {setImg(e.target.files[0]) }} id="formFile" />
        </div>
        <button type="submit" class="btn" style={{backgroundColor:"rgb(0, 128, 0, 0.5)", color:'white'}}>Update Blog</button>
      </form>
    </div>
  )
}

export default Edit
