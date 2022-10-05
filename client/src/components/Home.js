import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div>
    <img src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg" alt="" style={{height:'34rem' , marginLeft:'17rem'}}/>
    <div className='home'></div>
    </div>
    <Link to='/addblog'>
    <button className='btn2 ' style={{color:'white'}}>Get Started</button>
    </Link>
    </>
  )
}

export default Home
