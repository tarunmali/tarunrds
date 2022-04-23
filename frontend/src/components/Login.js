import React,{useState} from 'react';
import signinpic from './images/signinpic.svg';
import {Routes, Route,Link, useNavigate, NavLink} from 'react-router-dom';
import zxcvbn from 'zxcvbn';
import confetti from 'canvas-confetti';
import Classroom   from './Classroom';




function Login(props) {
    
    const navigate=useNavigate();

    const[user,setUser]=useState({
        name:"",
        email:"",
        phone:"",
        work:"",
        password:"",
        cpassword:""
    });

    let name,value;
    const handleInputs=(e)=>{
        name=e.target.name;
        value=e.target.value;
        setUser({...user, [name]:value});
    }

    let result=zxcvbn(user.password)

    const PostData=async(e)=>{

        e.preventDefault();
        const {name, email, phone, work, password, cpassword}=user;

        const response= await fetch(`${process.env.REACT_APP_DATA}/Api/signin`,{

            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            
            body:JSON.stringify({name, email, phone, work, password, cpassword})
        })  

        
            

        // //This is how the fetch api works
        const data1=await response.json();
        const data2=response.status;
        

        // console.log(response);



        // console.log(data1);
        // console.log(data2);

        const errata=data1.error;


        console.log(data1.accessToken);
        if(data2==200)
        {
            window.alert("Successfully login")
            
            sessionStorage.setItem("accessToken",data1.accessToken);
            // confetti({
            //     particleCount: 600,
            //     spread:180
            //   });

            navigate('/Dashboard/Classroom')
        }

        else{
            window.alert(errata);
        }



        
        // if(data2===422 ) {
        //     window.alert(data2)
           
        // }else{
        //     window.alert("Successfully registered")
        //     console.log("else reached");

        //     confetti({
        //         particleCount: 600,
        //         spread:180
        //       });
        //     navigate('/login')

        // }


    }




    return (
        <div>
             
             <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                        <div className="signin-form">
                            <h2 className="form-title">Log in</h2>
                            <form method="POST" className="register-form" id="register-form">

        {/* this is how the parameter starts */}




                                <div className='form-group'>
                                    <label htmlFor="email">
                                        <i className='zmdi zmdi-email material-icons-name'></i>
                                    </label>
                                    <input type="email" name="email" id="email" placeholder="Your Email"
                                    value={user.email}
                                    onChange={handleInputs}/>
                                    
                                </div>
                                                                    

                                <div className='form-group'>
                                    <label htmlFor="password">
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>
                                    <input type="password" name="password" id="password" placeholder="Your password"
                                    value={user.password}
                                    onChange={handleInputs}
                                    autoComplete="off"/>
                                    
                                </div>





             
                                {/* <p className='form-group'> Number of guesses to crack password: {result.guesses}</p>
                                <p className='form-group'>Information about your current typed password: </p>
                                <p>{  result.feedback.warning}</p> */}

                               
                                <div className='form-group form-button'>
                                    <input type="submit" name="signin" id="signin" className="form-submit" value="Log In"
                                    onClick={PostData}/>
                                </div>




                            </form>
                            </div>


                              <div className="signin-image">
                                  <figure>
                                      <img src={signinpic} alt="Signin image"/>
                                  </figure>
                                  <NavLink to="/Signup" className="signup-image-link" > Register now</NavLink>
                                </div>  


                            
                                
                            


 
                        ``
                         </div> 
                    
                </div>
                </section>
        </div>
    );
}

export default Login;