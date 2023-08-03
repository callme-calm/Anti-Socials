import React from "react";
import Logo from "../../img/logo.png";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <img src={Logo} alt="" style={{
        width: '2.3rem',
        height:'2.3rem',
        
        filter: "invert(100%) sepia(0%) saturate(2100%) hue-rotate(210deg) brightness(150%) contrast(90%)"

      }}/>
      <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div>
    </div>
  );
};

export default LogoSearch;
