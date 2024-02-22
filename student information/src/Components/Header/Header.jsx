import React from "react";
import { Link } from "react-router-dom";
import "../Header/header.css";
import {auth} from '../../config/firebase'

function Header() {

  const logOut = () => {
    signOut(auth)
  }

  return (
    <div className="header_component">
      <div className="header_title">
        <h1>
        <Link to="/body"  style={{ textDecoration: 'none', color: "#c4d9ee"}}>
          Student <span id="hub">Info</span>
        </Link>
        </h1>
      </div>
      <div className="header_rest"></div>
      <div className="right">
        <div className="right2">
          <h3>
            <Link to="/discussions"  style={{ textDecoration: 'none', color: "#c4d9ee"}}>DISSCUSIONS</Link>
          </h3>
        </div>
        <div className="right3">
          <h3>
            <Link to="/profile"  style={{ textDecoration: 'none', color: "#c4d9ee"}}>PROFILE</Link>
          </h3>
        </div>
        <div className="right4">
          <h3>
            <Link to="/student-info"  style={{ textDecoration: 'none', color: "#c4d9ee"}}>DATAS</Link>
          </h3>
        </div>
        
        <button className="button-32" onClick={ () => auth.signOut()}>
            <span>
              Log out
            </span>
          </button>
      </div>
    </div>
  );
}

export default Header;
