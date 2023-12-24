import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage';
import About from './pages/About';
import Events from './pages/Events';
import MyTicket from './pages/MyTicket';
import Login from './auth/Login';

function App(){
  return(
    <div className='app'>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Events' element={<Events/>}/>
      <Route path='/MyTicket' element={<MyTicket/>}/>
      <Route path='/Login' element={<Login/>}/>

    </Routes>
    </div>
  )
}

export default App;