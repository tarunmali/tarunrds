import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { useJwt } from "react-jwt";

import { useNavigate, Link} from "react-router-dom";

import { useQuery } from 'react-query';


const fetcher= url => fetch(url).then(res => res.json());
const viewPassword = () => {
  console.log("clicked");
  flag=!flag;
  console.log(flag);
}


let flag ;
let pid=null;

function Profile() {
  
    const [username, setUsername] =  useState({});
    const accessToken=sessionStorage.getItem('accessToken');
    const validToken = useJwt(accessToken, "maybegeneraterandomly");


    let pid;
    if(validToken.decodedToken!=null)
    {
      
       pid=validToken.decodedToken.id;
    }

    console.log(pid);

    let {isLoading, data}=useQuery('post',()=>fetcher(`${process.env.REACT_APP_DATA}/profile/${pid}`));

    setUsername(data);

    let dn;
    if(data)
    {
      console.log("Hari");
      console.log(username);
       dn=data[0].name;
    }


//     useEffect(() => {

//       if(pid!=null)
// {      axios.get(`${process.env.REACT_APP_DATA}/profile/1`).then((response) => {
//         setUsername(response.data[0].name);  
//       console.log(response.data[0].name);
//       });
//       }
  
//     }, []);  
  
 
  



 

  return (
    
    <div className="profilePageContainer">
      <div className="basicInfo">


 



        <h1> Name:{dn}  </h1>

        <button onClick={viewPassword} style={{ textDecoration: 'none' }} class="nav-link">🔑View password</button>

        {
                flag &&(
                  <>

                  <h1> Password: {postObject.password} </h1>

                 
                  </>
                )
              }
        <button>
  
  <Link  to="/changepassword"  style={{ textDecoration: 'none' }} class="nav-link">Change password</Link>

</button>
        
      


     
      </div>

    </div>
  );
}

export default Profile;