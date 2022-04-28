import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useJwt } from "react-jwt";



function Profile() {
 
    const accessToken=sessionStorage.getItem('accessToken');
    const validToken = useJwt(accessToken, "maybegeneraterandomly");
    let pid;

    console.log(validToken)
    if(validToken.decodedToken!=null)
    {
      
       pid=validToken.decodedToken.id;      
    }
    const [postObject, setPostObject] = useState({});


  useEffect(() => {
    axios.get(`${process.env.REACT_APP_DATA}/profile/${pid}`).then((response) => {
      setPostObject(response.data);
    });
  }, []);



  return (
    
    <div className="profilePageContainer">
      <div className="basicInfo">
        <h1> Name: {postObject[0].name} </h1>
        <h1> Email: {postObject[0].email} </h1>
        <h1> Password: {postObject[0].password} </h1>
        <h1> Phone: {postObject[0].phone} </h1>
        <h1> Work: {postObject[0].work} </h1>
      </div>

    </div>
  );
}

export default Profile;