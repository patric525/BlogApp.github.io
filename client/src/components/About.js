import React, { useEffect, useState } from 'react'

const About = () => {
    const[user, SetUser]=useState('')
    const getdata = async () => {
        try {
            const data = await fetch('/about', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/jaon'
                },
                credentials:'include'
            })
            const res = await data.json()
            if(res){
                console.log(res);
                SetUser(res)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getdata()
    },[])
    return (
        <div>
          {user.name}
          {user.email}
          <img src={user.imagepath} alt="error" style={{height:'4rem' , width:'4rem'}}/>
        </div>
    )
}

export default About
