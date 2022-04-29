import React from 'react';
import ModuleHeader from './ModuleHeader';
import { BrowserRouter , Routes ,Route} from 'react-router-dom';
import Video11 from './Video11';
import DataChartM from './DataChartM';


function Module1(props) {
    return (
        <div>
            
            <ModuleHeader/>
            


            

            <div >
           <h1> &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj; &zwnj;     Summary of module 1 below</h1> 
           <DataChartM/>
 



            </div> 




        </div>
    );
}

export default Module1;