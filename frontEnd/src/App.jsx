import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import AddMembers from './components/members/AddMembers';
import EditMember from './components/members/EditMember';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Member from './components/members/Member';
import Dashboard from './components/Dashboard';
import About from './components/About';
import ContactUs from './components/ContactUs ';
import Footer from './components/Footer';
import Trainer from './components/Trainer';

import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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
        
                 <Route path="/about" element={<About/>} />
<Route path="/contactUs" element={<ContactUs/>} />
<Route path="/trainer" element={<Trainer/>} />


  </Routes>
  <Footer></Footer>
</Router>


      <ToastContainer
        position="top-center"
        autoClose={3000}
        transition={Bounce}  // dounce for toaster
        theme="dark"
      />
</>  )
}

export default App