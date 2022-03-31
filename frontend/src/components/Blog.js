import React from 'react';
import { useQuery } from 'react-query';
import {useState,useEffect} from 'react';
import Post from './Post';



const fetcher= url => fetch(url).then(res => res.json());

function Blog(props) {

    const[postId,setPostId]=useState(null)

    const {isLoading, data}=useQuery('posts',()=>fetcher('https://jsonplaceholder.typicode.com/posts'))
    if(isLoading)   return <h1>Loading.....</h1>


    if(postId!==null)
    {
        return <Post postId={postId} goBack={()=>setPostId(null)} />
    }


    return (
        <div>
            <h1>Testing Blog </h1>
            {data.map(tarun=>{
                return <p >
                    {/* Great application of # */}
                    <a onClick={()=>setPostId(tarun.id)} href="#"> {tarun.id} {tarun.title}   </a>  
                    </p>
            })}
        </div>
    );
}

export default Blog;