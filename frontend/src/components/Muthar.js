// import React from 'react';
// import { useMutation } from 'react-query';


// console.log("Meow")
// const fetcher= url => fetch(url).then(res => res.json());


// function Muthar(props) {

//     const mutation=useMutation(()=>fetcher('https://jsonplaceholder.typicode.com/posts'))
   
//     function callMutation(){
//         console.log("Mutation called")
//         mutation.mutate(null,(
//             onSuccess(data){
//                 console.log("Mutation success")
//             },
//             onError(error){
//                 console.log("Mutation error")
//             }
//             onSettled(data,error)
//             {
//                 console.log("Mutation settled")
//             }
//         )
//         )
        
        
//     }
//         console.log("Post updated")
//     }




//     return (
//         <div>
//            <h1>Test mutation</h1> 
//               {/* <button onClick={()=>mutation.mutate()}>Mutation</button> */}
//               <button onClick={callMutation}></button>
//         </div>
//     );

//     }
// export default Muthar;