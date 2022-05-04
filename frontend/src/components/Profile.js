import React, { useEffect, useState, useContext } from "react";
import { useParams, } from "react-router-dom";
import axios from "axios";
import { Link} from "react-router-dom";

function Profile(props) {
  
    
  const [username, setUsername] = useState({});

  



  useEffect(() => {
    
    
    axios.get(`${process.env.REACT_APP_DATA}/profile/${props.pid}`).then((response) => {
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
        <button>
  
  <Link  to="/changepassword"  style={{ textDecoration: 'none' }} class="nav-link">🔒Change password🔒</Link>

</button>

      </div>

    </div>
  );
}

export default Profile;