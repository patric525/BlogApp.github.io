import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Allblog = () => {
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const getblog = async () => {
        try {
            const data = await fetch('/allblog', {
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
                setData(res)
            }
        } catch (error) {
            console.log(error);
            navigate('/login')
        }
    }
    useEffect(() => {
        getblog()
    }, [])
    return (
        <>
            {data.map((val) => {
                return (
                    <div className='card' style={{ marginBottom: "2rem", marginTop: '1rem' }}>
                        <img src={val.imagepath} alt="error" style={{ height: '16rem', width: '26rem' }} />
                        <p style={{ fontSize: "2rem", textAlign: 'center' }}>{val.title}</p>
                        <p style={{ fontSize: "1.2rem", textAlign: 'center' }}>{val.description}</p>
                        <p style={{ textTransform: "capitalize" }}>Created by : {val.username}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Allblog
