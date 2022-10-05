import React , {useEffect , useState} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const[co ,setCo]=useState('black')
    const[c,setC]=useState('black')
    const[c2,setC2]=useState('black')
    const[my,setMy]=useState('black')
    const location = useLocation()
    const changeco = ()=>{
        if(location.pathname==='/'){
            setCo('white')
        }
        else{
            setCo('black')
        }
    }
    const changec = ()=>{
        if(location.pathname==='/addblog'){
            setC('white')
        }
        else{
            setC('black')
        }
    }
    const changec2 = ()=>{
        if(location.pathname==='/allblog'){
            setC2('white')
        }
        else{
            setC2('black')
        }
    }
    const changemy = ()=>{
        if(location.pathname==='/myblog'){
            setMy('white')
        }
        else{
            setMy('black')
        }
    }
    const[dis,setDis]=useState('none')
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
                setDis('block')
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getdata()
    },[])
    useEffect(()=>{
     changeco()
     changec()
     changec2()
     changemy()
    })
    return (
        <nav className="navbar navbar-expand-lg " style={{backgroundColor:'rgb(0,128,0,0.3)'}}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" style={{color:co}}>MyBlogApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/allblog" style={{color:c2}}>All Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myblog" style={{color:my}}>My Blogs</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/addblog" style={{color:c}} >Add Blogs</Link>
                        </li>
                    </ul>
                    <Link className='nav-link' to='' style={{ display:dis }}>
                        <img src={user.imagepath} alt='error' style={{height:'2.4rem', width:'2.3rem', borderRadius:'4rem', position:'absolute', left:'65.4rem', top:'0.6rem'}}/>
                        <p style={{textTransform:'capitalize' , position:'absolute' , left:'68rem' , top:'1rem'}}>{`Welcome,${user.name}`}</p>
                    </Link>
                    <Link className='btn mx-2' to='/login' style={{backgroundColor:'rgb(0,128,0,0.5)' , color:'white'}}>Login</Link>
                    <Link className='btn' to='/sign' style={{backgroundColor:'rgb(0,128,0,0.5)' , color:'white'}}>SignUp</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
