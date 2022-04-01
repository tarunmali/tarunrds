import React,{useState} from 'react';
import signuppage from './images/signuppic.svg';
import {Routes, Route,Link, useNavigate, NavLink} from 'react-router-dom';
// import zxcvbn from 'zxcvbn';
import Login from './Login';
import confetti from 'canvas-confetti';




function Signup(props) {
    
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

    // let result=zxcvbn(user.password)

    const PostData=async(e)=>{

        e.preventDefault();
        const {name, email, phone, work, password, cpassword}=user;


        const response= await fetch(`${process.env.REACT_APP_DATA}/Api/User`,{

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



        if(data2==200)
        {
            window.alert("Successfully registered")
 
            confetti({
                particleCount: 600,
                spread:180
              });

            navigate('/login')
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
             
             <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form method="POST" className="register-form" id="register-form">

        {/* this is how the parameter starts */}


                                <div className='form-group'>
                                    <label htmlFor="name">
                                        <i className='zmdi zmdi-account material-icons-name'></i>
                                    </label>
                                    <input type="text" name="name" id="name" placeholder="Your Name"
                                    value={user.name}
                                    onChange={handleInputs}
                                    />

                                </div>

                                <div className='form-group'>
                                    <label htmlFor="email">
                                        <i className='zmdi zmdi-email material-icons-name'></i>
                                    </label>
                                    <input type="email" name="email" id="email" placeholder="Your Email"
                                    value={user.email}
                                    onChange={handleInputs}/>
                                    
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="phone">
                                        <i className='zmdi zmdi-phone material-icons-name'></i>
                                    </label>
                                    <input type="number" name="phone" id="phone" placeholder="Your phone"
                                    value={user.phone}
                                    onChange={handleInputs}/>
                                    
                                </div>

                                <div className='form-group'>
                                    <label htmlFor="work">
                                        <i className='zmdi zmdi-slideshow material-icons-name'></i>
                                    </label>
                                    <input type="text" name="work" id="work" placeholder="Your profession"
                                    value={user.work}
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



                                <div className='form-group'>
                                    <label htmlFor="cpassword">
                                        <i className='zmdi zmdi-lock material-icons-name'></i>
                                    </label>
                                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirm your password"
                                    value={user.cpassword}
                                    onChange={handleInputs}/>
                                    
                                </div>

             
                                {/* <p className='form-group'> Number of guesses to crack password: {result.guesses}</p>
                                <p className='form-group'>Information about your current typed password: </p>
                                <p>{  result.feedback.warning}</p> */}

                               
                                <div className='form-group form-button'>
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="register"
                                    onClick={PostData}/>
                                </div>




                            </form>
                            </div>


                              <div className="signup-image">
                                  <figure>
                                      <img src={signuppage} alt="signup image"/>
                                  </figure>
                                  <NavLink to="/Login" className="signup-image-link" > I am already registerd</NavLink>
                                </div>  


                            
                                
                            


 
                        ``
                         </div> 
                    
                </div>
                </section>
        </div>
    );
}

export default Signup;