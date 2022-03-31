
import 'bootstrap/dist/css/bootstrap.css';
import logo from "./images/logo1.jpg"


import React, { useState } from "react";
import Todo from "./Todo";
import {Link} from 'react-router-dom';

//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import { FaList, FaRegHeart } from "react-icons/fa";
import { FiHome, FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";


//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./Header.css";




function ModuleHeader(props) {


    const [menuCollapse, setMenuCollapse] = useState(true)

      //create a custom function that will change menucollapse state from false to true and true to false
    const menuIconClick = () => {
      //condition checking to change state from true to false and vice versa
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };

    let classActive=false,todoActive=false;

    if(props.active==="Classroom")
    {
      classActive=true;
    }

    else if(props.active==="Todo")
    {
      todoActive=true;
    }


    
    return (
        <div>
                <div>
      <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>



          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p>{menuCollapse ? "Hi again" : "Doing Fine?"}</p>
            </div>

            
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">



              <MenuItem  icon={<FiHome />}>
                Video 1
                <Link to="/Dashboard/Classroom/Module_1/Video11" />
              </MenuItem>



              <MenuItem active={todoActive} icon={<FaList />}>
                Question 1 
                <Link to="/Dashboard/Classroom/Module_1/Question12" />
                </MenuItem>








            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
    </div>
        </div>
    );
}

export default ModuleHeader;