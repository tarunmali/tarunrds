// import "./App.css";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import {Route, Router, Link} from 'react-router-dom'
// import Home from './Home'

// function Posts() {
//   const [listOfPosts, setListOfPosts] = useState([]);

 
  

//   useEffect(() => {
//     axios.get( `${process.env.REACT_APP_DATA}/posts`).then((response) => {
//       setListOfPosts(response.data);
//     });
//   }, []);
//   return (

      


//     <div className="App">



//       <Link to="/createapost" > Create a Post</Link>



//       <h1>Hi</h1>
//       {listOfPosts.map((value, key) => {
//         return (
//           <div className="post">
//             <div className="title"> {value.title} </div>
//             <div className="body">{value.postText}</div>
//             <div className="footer">{value.username}</div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Posts;


import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let history = useNavigate();

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DATA}/posts`).then((response) => {
      setListOfPosts(response.data);
    });
  }, []);


  const[postId,setPostId]=useState(null)




  return (
    <div>
            <h1>Testing Blog </h1>
            {listOfPosts.map(tarun=>{
                return <p >
                    {/* Great application of # */}
                    <a onClick={()=>setPostId(tarun.id)} href="#"> {tarun.id} {tarun.title}   </a>  
                    </p>
            })}





      {listOfPosts.map((mali) => {
        return (
          <div






            className="post"





            onClick={() => {
              history.push(`/Posts/${mali.id}`);
            }}
          >
            <div className="title"> {mali.title} </div>
            <div className="body">{mali.postText}</div>
            <div className="footer">{mali.username}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;


