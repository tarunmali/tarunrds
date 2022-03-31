import React from 'react';


function Tile(props) {
    return (
        <div>
            <div className="card text-center">
                <div className="overflow">
                    <img src={props.link} alt="Image1" className="card-img-top"/>
                </div>

            <div className="card-body text-dark">
                <h4 className="card-title">
                    {props.title}
                        <p className="card-text text-secondary">
                        {props.description}
                        </p>
                        <a href={`Classroom/${props.title}`} className="btn btn-outline-success" > Visit module</a>
                </h4>
            </div>


            </div>

            
        </div>
    );
}

export default Tile;