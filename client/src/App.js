import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Addblog from './components/Addblog';
import Allblog from './components/Allblog';
import Myblog from './components/Myblog';
import Sign from './components/Sign';
import Login from './components/Login';
import About from './components/About';
import Navbar from './components/Navbar';
import Edit from './components/Edit';

function App() {
  return (
     <Router>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addblog' element={<Addblog/>}/>
        <Route path='/allblog' element={<Allblog/>}/>
        <Route path='/myblog' element={<Myblog/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
        <Route path='/sign' element={<Sign/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/edit/:id' element={<Edit/>}/>
       </Routes>
     </Router>
  );
}

export default App;
