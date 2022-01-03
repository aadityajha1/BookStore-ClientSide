import React from "react";
import {
  Search,
  CardGiftcard,
  Book,
  Stars,
  ArrowForwardIos,
} from "@material-ui/icons";
import {
  IconButton,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Button,
} from "@material-ui/core";
import { blue, lightBlue, grey } from "@material-ui/core/colors";
import { Media } from "reactstrap";

function Home(props) {
  return (
    <div>
      <div id="home">
        <div className="container">
          <div className="row">
            <h2
              id="hero"
              className="text-center d-block col"
              style={{
                fontFamily: "Tahoma, Arial, sans-serif",
                letterSpacing: "10px",
                fontWeight: "900",
                fontSize: "8vw",
              }}
            >
              BOOK HUB
            </h2>
          </div>
          <div
            id="sub-header"
            className="row"
            style={{ justifyContent: "center" }}
          >
            <hr
              className="col col-md-2 d-none d-sm-block"
              style={{
                // width: "100px",
                border: "2px solid white",
                // marginInline: "20px",
                marginInlineEnd: "10px",
              }}
            />{" "}
            <h3 className="col-12 col-sm-8 col-md-6 col-lg-4 text-center">
              BEST BOOKS AVAILABLE
            </h3>{" "}
            <hr
              className="col col-md-2 d-none d-sm-block"
              style={{
                border: "2px solid white",

                marginInlineStart: "10px",
              }}
            />
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-12 col-sm-10 col-md-8 text-light text-center">
              <p id="supporting-para" className="text-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
          <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-12 col-sm-8">
              <div className="input-group">
                <input
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "0px",
                    opacity: 0.7,
                    borderStartStartRadius: "2rem",
                    borderEndStartRadius: "2rem",
                    boxShadow: "1px 3px 2px #25bdc2",
                  }}
                  type="text"
                  className="form-control border-rounded p-4"
                  placeholder="Enter Book Title to Search"
                ></input>
                <div
                  className="input-group-append  px-2 "
                  style={{
                    borderEndEndRadius: "50%",
                    borderStartEndRadius: "50%",
                    backgroundColor: lightBlue[600],
                    boxShadow: "1px 3px 2px black",
                  }}
                >
                  <IconButton size="small">
                    <Search style={{ color: "white" }} />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron mb-0">
        <div className="row ">
          <h1 className="col text-center">THE BOOK HUB ONLINE BOOK STORE</h1>
        </div>
        <div className="row ">
          <hr
            className=" text-light text-center"
            style={{ width: "100px", border: "3px solid cyan" }}
          />
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <p className="col-9 text-secondary">
            The Online Books Guide is the biggest big store and the biggest
            books library in the world that has alot of the popular and the most
            top category books presented here. Top Authors are here just
            subscribe your email address and get updated with us.
          </p>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <Card id="card" className="col-10 mt-4 col-sm-4 col-md-3">
            <CardHeader
              style={{ marginLeft: "30%" }}
              avatar={
                <Avatar
                  aria-label="services"
                  style={{ padding: "5px", width: "60px", height: "60px" }}
                >
                  <Book fontSize="large" style={{ color: grey[800] }} />
                </Avatar>
              }
            />
            <h4 className="text-center">Best Selling Books</h4>{" "}
            <hr style={{ border: "1px solid grey", width: "40%" }} />
            <CardContent style={{ justifyContent: "center" }}>
              <p
                className="text-center d-block text-secondary"
                style={{ fontSize: "14px" }}
              >
                Free gift wrapping on all purchases. Wrapping includes a blue
                box with your choice with Ribbon.
              </p>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginLeft: "25%" }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
          <Card id="card" className="col-10 mt-4 col-sm-4 col-md-3 ml-3">
            <CardHeader
              style={{ marginLeft: "30%" }}
              avatar={
                <Avatar
                  aria-label="services"
                  style={{ padding: "5px", width: "60px", height: "60px" }}
                >
                  <Stars fontSize="large" style={{ color: grey[800] }} />
                </Avatar>
              }
            />
            <h4 className="text-center">Top Rated Books</h4>{" "}
            <hr style={{ border: "1px solid grey", width: "40%" }} />
            <CardContent style={{ justifyContent: "center" }}>
              <p
                className="text-center d-block text-secondary"
                style={{ fontSize: "14px" }}
              >
                Free gift wrapping on all purchases. Wrapping includes a blue
                box with your choice with Ribbon.
              </p>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginLeft: "25%" }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
          <Card id="card" className="col-10 mt-4 col-sm-4 col-md-3 ml-3">
            <CardHeader
              style={{ marginLeft: "30%" }}
              avatar={
                <Avatar
                  aria-label="services"
                  style={{ padding: "5px", width: "60px", height: "60px" }}
                >
                  <CardGiftcard fontSize="large" style={{ color: grey[800] }} />
                </Avatar>
              }
            />
            <h4 className="text-center">Free Gift Wrap</h4>{" "}
            <hr style={{ border: "1px solid grey", width: "40%" }} />
            <CardContent style={{ justifyContent: "center" }}>
              <p
                className="text-center d-block text-secondary"
                style={{ fontSize: "14px" }}
              >
                Free gift wrapping on all purchases. Wrapping includes a blue
                box with your choice with Ribbon.
              </p>
              <Button
                variant="outlined"
                color="secondary"
                style={{ marginLeft: "25%" }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <div id="middle-section"></div>
      <div className="jumbotron mb-0">
        <div className="row mt-5" style={{ justifyContent: "center" }}>
          <h5 className="col-12 text-center display-4">
            Best Online Book Store
          </h5>
          <div className="col-12">
            <hr
              style={{ display: "block", border: "3px solid cyan" }}
              className="col-1"
            />
          </div>

          <p className="col-12 col-sm-9 text-center text-secondary mb-5 ">
            We’re breaking new ground in online bookselling. We believe that
            education and access to books are basic human rights. That's why
            books sold on BetterWorldBooks.com help fund high-impact literacy
            projects in the United States and around the world.
          </p>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-12 col-sm-8">
            <Media tag="li" id="media">
              <Media
                left
                id="media-image"
                className="align-self-center mr-sm-2 d-none d-sm-block"
              >
                {/* <img
                  // src="images/profile1.jpg"
                  alt="Imaeg"
                  className="img-fluid align-self-center"
                  height="100"
                  width="100"
                  style={{ borderRadius: "70%" }}
                /> */}
              </Media>
              <Media body>
                <Media heading>Notes from Top Professionals</Media>
                <p className="text-justify text-secondary">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book.
                </p>
              </Media>
              <Media right className="align-self-center ml-2 ">
                <IconButton
                  // color="primary"
                  style={{
                    backgroundColor: blue[500],
                    color: "white",
                    boxShadow: "3px 3px 5px grey",
                  }}
                >
                  {" "}
                  <ArrowForwardIos />
                </IconButton>
              </Media>
            </Media>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-12 col-sm-8">
            <Media tag="li" id="media">
              <Media
                left
                className="align-self-center mr-sm-2 d-none d-sm-block"
              >
                {/* <img
                  src="images/profile.png"
                  alt="Imaeg"
                  className="img-fluid align-self-center"
                  height="100"
                  width="100"
                /> */}
              </Media>
              <Media body>
                <Media heading>Notes from Top Professionals</Media>
                <p className="text-justify text-secondary">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book.
                </p>
              </Media>
              <Media right className="align-self-center ml-2">
                <IconButton
                  // color="primary"
                  style={{
                    backgroundColor: blue[500],
                    color: "white",
                    boxShadow: "3px 3px 5px grey",
                  }}
                >
                  {" "}
                  <ArrowForwardIos />
                </IconButton>
              </Media>
            </Media>
          </div>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-12 col-sm-8">
            <Media tag="li" id="media">
              <Media left className="align-self-center mr-2 d-none d-sm-block">
                {/* <img
                  src="images/profile.png"
                  alt="Imaeg"
                  className="img-fluid align-self-center"
                  height="100"
                  width="100"
                /> */}
              </Media>
              <Media body>
                <Media heading>Notes from Top Professionals</Media>
                <p className="text-justify text-secondary">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs. The passage
                  is attributed to an unknown typesetter in the 15th century who
                  is thought to have scrambled parts of Cicero's De Finibus
                  Bonorum et Malorum for use in a type specimen book.
                </p>
              </Media>
              <Media right className="align-self-center ml-2 ">
                <IconButton
                  // color="primary"
                  style={{
                    backgroundColor: blue[500],
                    color: "white",
                    boxShadow: "3px 3px 5px grey",
                  }}
                >
                  {" "}
                  <ArrowForwardIos />
                </IconButton>
              </Media>
            </Media>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
