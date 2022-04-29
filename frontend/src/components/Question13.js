import React from 'react';
import Cp from './Cp';
import ModuleHeader from './ModuleHeader';
import Posts from './Posts';

function Question13(props) {
    return (
        <div>
            <ModuleHeader/>
            <Cp question="&zwnj;    &zwnj;   &zwnj;   &zwnj;   &zwnj;   &zwnj;   &zwnj;   &zwnj;   &zwnj;   &zwnj;   &zwnj;   &zwnj;     Q Write a program to find factorial"/>
            <Posts/>
        </div>
    );
}

export default Question13;