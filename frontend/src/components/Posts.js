

import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useQuery } from 'react-query';
import View from './View'
import { useJwt } from "react-jwt";
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

    
    if(response.data.error)
    {
      alert("Log in to like/dislike a post ")
    }
    else
    {
      alert(response.data);
    }
    
  })

}

function Posts() {

const accessToken=sessionStorage.getItem('accessToken');

const validToken = useJwt(accessToken, "maybegeneraterandomly");

let currentEmail;


console.log(validToken)
if(validToken.decodedToken!=null)
{
  
   currentEmail=validToken.decodedToken.email;

  
}

// if(!validToken)
// {
//   console.log(validToken.decodedToken.email)
//   currentEmail=validToken.decodedToken.email;

// }




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



<h3>Click on the body of post to comment</h3>

<button>
  
  <Link  to="/createapost"  style={{ textDecoration: 'none' }} class="nav-link">Create ✍️ a Post!</Link>

</button>



<h3></h3>

{/* <button  style={{ textDecoration: 'none' }} class="nav-link"> 
  
    Click me to view the most ❤️ post

</button> */}




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

              Author: {mali.username} &zwnj; &zwnj; &#8205; &#8205; &#8205; &#8205;
              <button
              onClick={()=>likeAPost(mali.id)} >
                Like❤️
              </button>
              <div>&#8205; &#8205; &#8205;  &#8205;  &#8205; &#8205; &#8205; 👨   </div>

                <div>{mali.Likes.length}</div>

                { currentEmail==mali.username &&
                <>
                <button>
                  delete 
                </button>
                </>
                }


              </div>
            
          </div>
        );
      })}
    </div>
  );
}

export default Posts;


