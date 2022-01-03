import React from "react";
import { Link } from "react-router-dom";
import {
  Home,
  List,
  Copyright,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Call,
  Mail,
  Favorite,
} from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { indigo, blue } from "@material-ui/core/colors";

const Footer = () => {
  return (
    <div className="footer bg-dark">
      <div className="container text-light">
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-12 col-sm-5 col-md-4 ">
            <h4
              className="col-12 col-sm-5"
              style={{
                borderBottom: "2px solid red",
                marginTop: "10%",

                textAlign: "center",
                padding: "5px",
              }}
            >
              Links
            </h4>
            <ul className="list-unstyled p-0">
              <li>
                <Link to="/" className="nav-link text-light">
                  <Home /> Home
                </Link>{" "}
              </li>
              <li>
                <Link to="/menu" className="nav-link text-light">
                  <List /> Menu
                </Link>
              </li>
              <li>
                <Link to="/favourites" className="nav-link text-light">
                  <Favorite /> Favourites
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-md-4  ">
            <h4
              style={{
                borderBottom: "2px solid red",
                marginTop: "10%",
                // width: "300px",
                textAlign: "center",
                padding: "5px",
              }}
            >
              Our Address
            </h4>
            <div className="text-justify ml-1">
              <address>
                XXX XXXXX, XXXXXX XXXXX
                <br />
                Kirtipur-05, Kathmandu <br />
                Bagmati, Nepal
                <br />
                <Call />: +977 981-2314344
                <br />
                <Mail />:{" "}
                <a
                  className="text-light"
                  href="mailto:aadityajha2000@gmail.com"
                >
                  abc@gmail.com
                </a>
              </address>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 ">
            <h4
              style={{
                marginTop: "10%",
                // width: "100px",
                borderBottom: "2px solid red",
                textAlign: "center",
                padding: "5px",
              }}
            >
              Socal Links
            </h4>
            <div className="text-center">
              <IconButton
                size="small"
                className="mr-2"
                style={{
                  backgroundColor: indigo[500],
                  color: "white",
                  padding: "5px",
                }}
                href="https://www.facebook.com/aadijha2057/"
              >
                {" "}
                <Facebook fontSize="small" />{" "}
              </IconButton>
              <IconButton
                size="small"
                className="mr-2"
                style={{
                  backgroundColor: blue[500],
                  color: "white",
                  padding: "5px",
                }}
                href="https://www.twitter.com/"
              >
                {" "}
                <Twitter fontSize="small" />{" "}
              </IconButton>
              <IconButton
                size="small"
                className="mr-2"
                style={{
                  backgroundColor: "#0e76a8",
                  color: "white",
                  padding: "5px",
                }}
                href="https://www.linkedin.com/in/aaditya-jha-267b19118/"
              >
                {" "}
                <LinkedIn fontSize="small" />{" "}
              </IconButton>
              <IconButton
                size="small"
                className="mr-2"
                style={{
                  //   backgroundColor: "#4078c0",
                  color: "white",
                  padding: "5px",
                }}
                href="https://www.github.com/aadi2057"
              >
                {" "}
                <GitHub fontSize="small" />{" "}
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-2 text-light " style={{ backgroundColor: "black" }}>
        <div className="container p-2">
          <div className="row" style={{ justifyContent: "center" }}>
            <span className="text-secondary" style={{ fontSize: "14px" }}>
              <Copyright /> 2020 by MH. All Rights Reserved{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
