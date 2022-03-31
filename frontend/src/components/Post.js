import React from 'react';
import { useQuery } from 'react-query';

const fetcher= url => fetch(url).then(res => res.json());


function Post(props) {


    const {data,isLoading}=useQuery('post',()=>fetcher(`https://jsonplaceholder.typicode.com/posts/${props.postId}`))



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

export default Post;