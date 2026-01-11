import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import AddMembers from './components/members/AddMembers';
import EditMember from './components/members/EditMember';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Member from './components/members/Member';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
<>
<Router>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/member' element={<Member/>}/>
        <Route path='/addMembers' element={<AddMembers/>}/>
        {/* <Route path='/editMember' element={<EditMember/>}/> */}

<Route path="/editMember/:id" element={<EditMember />} />


        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}/>
        <Route path="/login" element={<Login />} />


  </Routes>
</Router>

</>  )
}

export default App