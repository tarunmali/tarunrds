// import React, {useEffect, useState} from 'react';
// // import { useQuery } from 'react-query';
// import { useParams } from "react-router-dom";
// import axios from "axios";

// // const fetcher= url => fetch(url).then(res => res.json());


// function View(props) {
//   let { id } = useParams();
//   const [postObject, setPostObject] = useState({});

//   // `http://localhost:3001/posts/byId/${id}`
//   // `${process.env.REACT_APP_DATA}/posts`
//   // `https://jsonplaceholder.typicode.com/posts/${props.postId}`



//   // `http://localhost:3001/Api/Posts/byId/${id}`)


//   useEffect(() => {
//     axios.get(`${process.env.REACT_APP_DATA}/Api/posts/byId/${id}`).then((response) => {
//       setPostObject(response.data);
//     });
//   });

  




//     // const {data,isLoading}=useQuery('post',()=>fetcher(`${process.env.REACT_APP_DATA}/Api/posts/byId/${id}`))


//     // if(isLoading)   return <h1>Loading.....</h1>

//     return (


// <div className="postPage">
//       <div className="leftSide">
//         <div className="post" id="individual">
//           <div className="title"> {postObject.title} </div>
//           <div className="body">{postObject.postText}</div>
//           <div className="footer">{postObject.username}</div>
//         </div>
//       </div>


//       <div className="rightSide">
//         <div className="addCommentContainer">
//           <input
//             type="text"
//             placeholder="Comment..."
//             autoComplete="off"
//             value={newComment}
//             onChange={(event) => {
//               setNewComment(event.target.value);
//             }}
//           />
//           <button onClick={addComment}> Add Comment</button>
//         </div>
//         <div className="listOfComments">
//           {comments.map((comment, key) => {
//             return (
//               <div key={key} className="comment">
//                 {comment.commentBody}
//               </div>
//             );
//           })}
//         </div>
//       </div>
  




//           {/* <h1>Testing post</h1> 

//           <h2>Post id is {id} </h2> 
//             <h2>{data.title}</h2>
//             <h3>{data.postText}</h3>

//             <a href="#" onClick={props}>GO BACK!!!</a>    */}
           
//         </div>
//     );
// }

// export default View;


// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";
// // import axios from "axios";

// // function View() {
// //   let { id } = useParams();
// //   const [postObject, setPostObject] = useState({});

// //   useEffect(() => {
// //     axios.get(`http://localhost:3001/Api/posts/byId/${id}`).then((response) => {
// //       setPostObject(response.data);
// //     });
// //   });
// //   return (
// //     <div className="postPage">
// //       <div className="leftSide">
// //         <div className="post" id="individual">
// //           <div className="title"> {postObject.title} </div>
// //           <div className="body">{postObject.postText}</div>
// //           <div className="footer">{postObject.username}</div>
// //         </div>
// //       </div>
// //       <div className="rightSide">Comment Section</div>
// //     </div>
// //   );
// // }

// // export default View;

// // `${process.env.REACT_APP_DATA}/Api/posts/byId/${id}`

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DATA}/Api/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });

    axios.get(`${process.env.REACT_APP_DATA}/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComment = () => {
    axios
      .post(`${process.env.REACT_APP_DATA}/comments`, {
        commentBody: newComment,
        PostId: id,
      })
      .then((response) => {
        const commentToAdd = { commentBody: newComment };
        setComments([...comments, commentToAdd]);
        setNewComment("");
      });
  };

  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="post" id="individual">
          <div className="title"> {postObject.title} </div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(event) => {
              setNewComment(event.target.value);
            }}
          />
          <button onClick={addComment}> Add Comment</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;