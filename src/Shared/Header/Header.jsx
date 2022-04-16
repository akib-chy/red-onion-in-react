import React from "react";
import logo from "../../images/logo2.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="container d-flex justify-content-between align-items-center py-3">
      <div>
        <img className="nav-logo" src={logo} alt="" />
      </div>
      <div>
        <div className="d-flex align-items-center">
          <div>
            <button className="border-0  bg-transparent mt-2">
              <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
          <div className="ms-3 ">
            <button className="border-0  bg-transparent fs-5">Login</button>
          </div>
          <div className="ms-3">
            <button className="btn btn-danger rounded-pill  px-4">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
