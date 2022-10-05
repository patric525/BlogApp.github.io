import React from 'react'
import { Link } from 'react-router-dom'

const Card = (props) => {
    const del = async()=>{
        const data = await fetch(`/delete/${props.id}`,{
            method:'DELETE',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            credentials:'include'
        })
        const res = await data.json()
        if(res){
            window.alert(res.message)
        }
    }
    return (
        <div className='card' style={{marginBottom:"2rem" , marginTop:'1rem'}}>
            <img src={props.img} alt="Try to upload again" style={{ height: '16rem', width: '26rem' }} />
            <p style={{ fontSize: "2rem", textAlign: 'center' }}>{props.title}</p>
            <p style={{ fontSize: "1.2rem", textAlign: 'center' }}>{props.desc}</p>
            <div className='d-flex  flex-row justify-content-center'>
            <p onClick={del} className='mx-2' style={{color:'white' ,height:"2rem", width:"4rem", backgroundColor:'rgb(0, 128, 0, 0.5)' , cursor:'pointer', borderRadius:"0.4rem", textAlign:'center',paddingTop:"0.2rem"}}>{props.delete}</p>
            <Link to={`/edit/${props.id}`} className='nav-link' >
            <p style={{color:'white' , backgroundColor:'rgb(0, 128, 0, 0.5)' ,height:"2rem", width:"4rem", borderRadius:"0.4rem" , textAlign:'center', paddingTop:"0.2rem"}}>{props.update}</p>
            </Link>
            </div>
        </div>
    )
}

export default Card
