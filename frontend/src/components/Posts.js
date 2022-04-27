

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useQuery } from 'react-query';
import View from './View'

const fetcher= url => fetch(url).then(res => res.json());


const likeAPost = (postId) => {
  axios.post(`${process.env.REACT_APP_DATA}/like`, 
  {
    PostId:postId
  },
  {
    headers:{accessToken: sessionStorage.getItem("accessToken")}
  }
  ).then((response) => {

    console.log(response)
    if(response.data.error)
    {
      alert("Log in to like a post ")
    }
    else
    {
      alert(response.data);
    }
    
  })

}

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

<h1>Click below to create a post</h1>

<Link to="/createapost" > Create a Post</Link>

<h2>Click on Post below to add a comment or view previously added comments </h2>

      {data.map((mali) => {
        return (
          
          <div
          





            className="post"



            


          >
            <div className="title"> {mali.title} </div>
            <div className="body"
                        onClick={
                          // ()=>setPostId(mali.id) 
                          () => {navigate(`/Posts/${mali.id}`);}
                        } 
            >{mali.postText}</div>
            <div className="footer">
              {mali.username}
              <button
              
              
              onClick={()=>likeAPost(mali.id)} >
                Like❤️
              </button>


              </div>
            
          </div>
        );
      })}
    </div>
  );
}

export default Posts;


