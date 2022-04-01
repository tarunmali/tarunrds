import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import {Route, Router, Link} from 'react-router-dom'
import Home from './Home'

function Posts() {
  const [listOfPosts, setListOfPosts] = useState([]);

 
  

  useEffect(() => {
    axios.get( `${process.env.REACT_APP_DATA}/posts`).then((response) => {
      setListOfPosts(response.data);
    });
  }, []);
  return (

      


    <div className="App">



      <Link to="/createapost" > Create a Post</Link>



      <h1>Hi</h1>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div className="title"> {value.title} </div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;