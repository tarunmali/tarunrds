import React from 'react';
import Videoplayer from './Videoplayer';
import ModuleHeader from './ModuleHeader';
import Forum from './Forum';

function Video11(props) {
    return (
        <div>
              <ModuleHeader/>  
              <h1>Video 1 on Dynamic programming </h1>
            <Videoplayer url=" https://www.youtube.com/watch?v=6A76FT0axl0&list=PL8ALCSKTY-0tOpEjcjpSl-DZ7TAl2wQtr " />
            <Forum/>
        </div>
    );
}

export default Video11;