import React from 'react'
import { BrowserRouter , Route ,Routes} from 'react-router-dom'

import Chatroom from '../Components/chatroom/Chatroom'
import {Discussions} from '../Components/discussion/Discussions'
import Profile from '../Components/Profile/Profile' 
import StudentInfo from '../Components/student-info/StudentInfo'
import Body from '../Components/Body/Body'
import About from '../Components/about-us/About'
import FullList from '../Components/Full List/fullList'
import Login from '../Components/Login/Login'



function Home() {
  return (
    <div className="content">
       <BrowserRouter>

      
            <Routes>
              <Route path='/' element={<Login/>}></Route>
              <Route path="/body" element={<Body/>} />
              <Route path="/chatroom" element ={<Chatroom/>} />
              <Route path="/chatroom/rooms/:roomId" element ={<Chatroom/>} />
              <Route path="/discussions" element={<Discussions />} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/student-info" element={<StudentInfo />} />
              <Route path="/about-us" element={<About/>} />
              <Route path="/all-student-information-list" element={<FullList />} />
            </Routes>
        </BrowserRouter>   
    </div>
  )
}

export default Home