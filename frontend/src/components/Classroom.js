import React from 'react';
import Tile from './Tile';
import computer from "./images/computer.jpg"

import Module1 from "./images/Module1.svg"
import Module2 from "./images/Module2.svg"
import Module3 from "./images/Module3.svg"
import Module4 from "./images/Module4.svg"
import Module5 from "./images/Module5.svg"
import Module6 from "./images/Module6.svg"




function Classroom(props) {
    return (
        <div>
            


            
        <div className="container" >
           <h3>Classroom: A place where your Modules live</h3> 
            


            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-md-4">

                <div className="card text-center">
                <div className="overflow">
                    <img src={Module1} alt="Image1" className="card-img-top"/>
                </div>


                    <div className="card-body text-dark">
                <h4 className="card-title">
                    Module_1
                        <p className="card-text text-secondary">
                        Data structures and algorithms
                        </p>
                        <a href={`Classroom/Module_1`} className="btn btn-outline-success" > Visit module</a>
                </h4>
            </div>

            </div>

            </div>


                    <div className="col-md-4">

                    <Tile title="Module_2" description="This is the description of the module" 
                        link={Module2} />

                    </div>


                    <div className="col-md-4">
                    <Tile title="Module3" description="This is the description of the module" 
                        link={Module3} />

                    </div>


                    <div className="col-md-4">
                    <Tile title="Module_4" description="This is the description of the module" 
                        link={Module4} />

                    </div>


                    <div className="col-md-4">
                    <Tile title="Module_5" description="This is the description of the module" 
                        link={Module5} />

                    </div>


                    <div className="col-md-4">
                    <Tile title="Module_6" description="This is the description of the module" 
                        link={Module6} />

                    </div>





                    

                



                </div>
            </div>



           
        </div>
        </div>
    );
}

export default Classroom;