import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div
        style={{
          boxSizing: "border-box",
          padding: 10,
          borderTop: "1px solid lightgray",
          height: 100,
          backgroundColor: "#1e90ff",
          justifyContent: "space-around",
          display: "flex"
        }}
      >
        <div>
          <div
            style={{ color: "#FFFFFF", fontWeight: "bold", marginBottom: 10 }}
          >
            Buy
          </div>
          <NavLink
            to={"/payment"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(255, 255, 255)"
            }}
            activeStyle={{
              color: "#ffffff",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Terms of payment</div>
          </NavLink>
          <NavLink
            to={"/delivery"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(255, 255, 255)"
            }}
            activeStyle={{
              color: "#ffffff",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Delivery</div>
          </NavLink>
        </div>
        <div>
          <div
            style={{ color: "#FFFFFF", fontWeight: "bold", marginBottom: 10 }}
          >
            About us
          </div>
          <NavLink
            to={"/info"}
            exact
            style={{
              textDecoration: "none",
              color: "rgb(255, 255, 255)"
            }}
            activeStyle={{
              color: "#ffffff",
              textDecoration: "underline"
            }}
          >
            <div className="footerItem">Company Info</div>
          </NavLink>
        </div>
        <div>
          <div
            style={{ color: "#FFFFFF", fontWeight: "bold", marginBottom: 10 }}
          >
            Social Media
          </div>
          <a
            href="http://www.facebook.com"
            target="blank"
            style={{
              textDecoration: "none",
              color: "rgb(255, 255, 255)"
            }}
          >
            <div className="footerItem">Facebook</div>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
