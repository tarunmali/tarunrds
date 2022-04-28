import React, { useEffect, useState } from "react";

import axios from "axios";
import { useJwt } from "react-jwt";

import { useNavigate, Link} from "react-router-dom";

let flag ;

function Profile() {
    


    const viewPassword = () => {
      console.log("clicked");
      flag=!flag;
      console.log(flag);
    }

    const accessToken=sessionStorage.getItem('accessToken');
    const validToken = useJwt(accessToken, "maybegeneraterandomly");
    let pid;

    console.log(validToken)
    if(validToken.decodedToken!=null)
    {
      
       pid=validToken.decodedToken.id;
       console.log(pid)
        console.log(`${process.env.REACT_APP_DATA}/profile/${pid}`)
      
    }
    const [postObject, setPostObject] = useState({});


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DATA}/profile/1`).then((response) => {
      setPostObject(response.data[0]);
    });
  }, []);

 

  return (
    
    <div className="profilePageContainer">
      <div className="basicInfo">
        <h1> Name: {postObject.name} </h1>
        <h1> Email: {postObject.email} </h1>
        <h1> Phone: {postObject.phone} </h1>
        <h1> Work: {postObject.work} </h1>
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