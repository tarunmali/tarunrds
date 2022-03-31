
import ReactPlayer from "react-player";
import React from 'react';

function Videoplayer(props) {
    return (
       
        <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url={props.url}
          width='100%'
          height='100%'
        />
      </div>
            
      
    );
}

export default Videoplayer;