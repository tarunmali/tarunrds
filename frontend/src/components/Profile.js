import React, { useEffect, useState, useContext } from "react";
import { useParams, } from "react-router-dom";
import axios from "axios";


function Profile(props) {
  
    
  const [username, setUsername] = useState({});
  const viewPassword = () => {
    console.log("clicked");
    flag=!flag;
    console.log(flag);
  }
  
  
  let flag ;



  useEffect(() => {
  
    axios.get(`http://localhost:3001/profile/${props.pid}`).then((response) => {
        console.log("Use effect");
      setUsername(response.data[0]);
      console.log(response.data[0].name);

    });


  }, []);
  

  return (
    <div className="profilePageContainer">
      <div className="basicInfo">
        
        <h1> Name: {username.name} </h1>
        <h1> Email: {username.email} </h1>
        <h1>Phone: {username.phone}</h1>
        <h1>Work: {username.work}</h1>
        

      </div>

    </div>
  );
}

export default Profile;