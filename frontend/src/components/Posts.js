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
import { useNavigate, Link } from "react-router-dom";
import { useQuery } from 'react-query';
import View from './View'

const fetcher= url => fetch(url).then(res => res.json());

function Posts() {


  const[postId,setPostId]=useState(null)

  let navigate = useNavigate();

  // useEffect(() => {
  //   axios.get(`${process.env.REACT_APP_DATA}/Api/posts`).then((response) => {
  //     setListOfPosts(response.data);
  //   });
  // }, []);
  
  
  

  const {isLoading, data}=useQuery('post',()=>fetcher(`${process.env.REACT_APP_DATA}/Api/posts`))


  if(isLoading)   return <h1>Loading.....</h1>



  /// this piece of code fixes thwe clicking again bug
  if(postId!==null)
  {
      return <View postId={postId} goBack={()=>setPostId(null)} />
  }

  return (
    <div>
            {/* <h1>Testing Blog </h1>
            {listOfPosts.map(tarun=>{
                return <p >
                
                    <a onClick={()=>setPostId(tarun.id)} href="#"> {tarun.id} {tarun.title}   </a>  
                    <a onClick={() => {navigate(`/Posts/${tarun.id}`);}}> {tarun.id} {tarun.title}   </a>  

                    </p>
            })} */}




<Link to="/createapost" > Create a Post</Link>
      {data.map((mali) => {
        return (
          
          <div
          





            className="post"



            

            onClick={
              // ()=>setPostId(mali.id)
              () => {navigate(`/Posts/${mali.id}`);}
            }
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


