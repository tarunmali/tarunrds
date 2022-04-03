import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from "react-router-dom";

const fetcher= url => fetch(url).then(res => res.json());


function View(props) {
  let { id } = useParams();


  // `http://localhost:3001/posts/byId/${id}`
  // `${process.env.REACT_APP_DATA}/posts`
  // `https://jsonplaceholder.typicode.com/posts/${props.postId}`

    const {data,isLoading}=useQuery('post',()=>fetcher(`http://localhost:3001/posts/byId/${id}`))



    if(isLoading)   return <h1>Loading.....</h1>

    return (
        <div>
          <h1>Testing post</h1> 

          <h2>Post id is {props.postId} </h2> 

          <a href="#" onClick={props.goBack}>GO BACK!!!</a>   


            <h2>{data.title}</h2>
            <h3>{data.body}</h3>
        </div>
    );
}

export default View;