import React from "react";
import "./NavIcons.css"
import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import { UilSetting } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home" >
        <img src={Home} alt="" style={{filter: "invert(12%) sepia(0%) saturate(2100%) hue-rotate(205deg) brightness(150%) contrast(90%)"

}}/>
      </Link>
      <UilSetting className="settings" />
      <img className="notifications" src={Noti} alt=""  />
      <Link to="../chat">
        <img  className="chat" src={Comment} alt="" />
      </Link>
    </div>
  );
};

export default NavIcons;
