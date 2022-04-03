import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {useQuery} from 'react-query';

import "./App.css";


import Todo from './components/Todo';



import Blog from './components/Blog';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';

import Classroom from './components/Classroom';
import Module1 from './components/Module1';
import Profile from './components/Profile';
import Video11 from './components/Video11';
import Subscription from './components/Subscription';
import Question12 from './components/Question12';
import Posts from './components/Posts';

import CreatePost from './components/CreatePost';


import View from './components/View';

// require('dotenv').config()

function App() {

  useQuery('hello')

  return (
    <BrowserRouter>
    <div>
      <Navbar/>



      
        


        

        <Routes>


        <Route path="/Posts/:id" element ={<View/>}></Route>

      <Route path="/createapost" element={<CreatePost/>}></Route>


      <Route path="/Todo" element={<Todo />} />
      <Route path="/Posts" element={<Posts />} />



      <Route path="/Blog" element={<Blog/>} />

      <Route path="/"element={<Home/>} ></Route>
      <Route path="/About"element={<About/>} ></Route>
      <Route path="/Contact"element={<Contact/>} ></Route>
      <Route path="/Login"element={<Login/>} ></Route>
      <Route path="/Signup"element={<Signup/>} ></Route>
      <Route path="/Dashboard/Classroom"element={<Classroom/>} ></Route>
      <Route path="/Profile"element={<Profile/>} ></Route>
      <Route path="/Dashboard/Classroom/Module_1"element={<Module1/>} ></Route>
      <Route path="/Dashboard/Classroom/Module_1/Video11"element={<Video11/>} ></Route>
      <Route path="Subscription"element={<Subscription/>} ></Route>
      <Route path="/Dashboard/Classroom/Module_1/Question12"element={<Question12/>} ></Route>
      <Route path="/contact" element={<Contact/>} />

       </Routes>

    </div>
    </BrowserRouter>
  );
}

export default App;