import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";

const fetcher= url => fetch(url).then(res => res.json());


function View(props) {
  let { id } = useParams();
  

  // `http://localhost:3001/posts/byId/${id}`
  // `${process.env.REACT_APP_DATA}/posts`
  // `https://jsonplaceholder.typicode.com/posts/${props.postId}`



  // `http://localhost:3001/Api/Posts/byId/${id}`)

    const {data,isLoading}=useQuery('post',()=>fetcher(`${process.env.REACT_APP_DATA}/Api/posts/byId/${id}`))


    if(isLoading)   return <h1>Loading.....</h1>

    return (
        <div>
          <h1>Testing post</h1> 

          <h2>Post id is {id} </h2> 
            <h2>{data.title}</h2>
            <h3>{data.postText}</h3>

            <a href="#" onClick={props.goBack}>GO BACK!!!</a>   
           
        </div>
    );
}

export default View;


// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function View() {
//   let { id } = useParams();
//   const [postObject, setPostObject] = useState({});

//   useEffect(() => {
//     axios.get(`http://localhost:3001/Api/posts/byId/${id}`).then((response) => {
//       setPostObject(response.data);
//     });
//   });
//   return (
//     <div className="postPage">
//       <div className="leftSide">
//         <div className="post" id="individual">
//           <div className="title"> {postObject.title} </div>
//           <div className="body">{postObject.postText}</div>
//           <div className="footer">{postObject.username}</div>
//         </div>
//       </div>
//       <div className="rightSide">Comment Section</div>
//     </div>
//   );
// }

// export default View;

