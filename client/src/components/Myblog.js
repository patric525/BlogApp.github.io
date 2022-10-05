import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'

const Myblog = () => {
  const navigate = useNavigate()
    const[data,setData]=useState([])
    const getblog= async()=>{
      try {
        const data= await fetch('/myblog', {
            method:'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/jaon'
            },
            credentials:'include'
        })
        const res = await data.json()
        if(res){
            console.log(res);
            setData(res)
        }
      } catch (error) {
        console.log(error);
        navigate('/login')
      }
    }
    useEffect(()=>{
        getblog()
    })
  return (
    <div>
      {data.map((val)=>{
        return(
          <Card
           id={val._id}
           img={val.imagepath}
           title={val.title}
           desc={val.description}
           delete={val.del}
           update={val.create}
          />
        )
      })}
    </div>
  )
}

export default Myblog
