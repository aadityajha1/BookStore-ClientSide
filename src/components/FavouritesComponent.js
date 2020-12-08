import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { baseUrl } from "../shared/baseUrl";
import { Button, IconButton, Tooltip, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Send, FavoriteBorder, Favorite, Home } from "@material-ui/icons";

function RenderBooks({ book }) {
  const [isFavClicked, setIsFavClicked] = useState(true);

  return (
    <div>
      <Card className="my-4" style={{ boxShadow: "5px 5px 8px grey" }}>
        <CardImg
          src={baseUrl + book.image}
          alt={book.name}
          height="250"
          width="auto"
        />

        <CardTitle className="ml-2" style={{ textOverflow: "hidden" }}>
          <Tooltip title="Book Name">
            <Typography
              variant="h6"
              style={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              {book.name}
            </Typography>
          </Tooltip>
        </CardTitle>
        <CardSubtitle className="ml-2">--{book.author}</CardSubtitle>

        <CardBody className="px-0 align-contents-center">
          <Link to={`/menu/${book._id}`}>
            <Button
              className="col-6 col-sm-6 col-md-4 col-lg-5 ml-1 mr-0 "
              variant="contained"
              color="primary"
              endIcon={<Send />}
            >
              Read{" "}
            </Button>
          </Link>
          <div className="col-6 col-sm-6 col-md-6 col-lg-7 d-inline m-0">
            <Tooltip title="Add to Favorites">
              <IconButton
                color="secondary"
                className="mx-0"
                aria-label="favorite-border"
                onClick={() => setIsFavClicked(!isFavClicked)}
              >
                {isFavClicked ? <Favorite /> : <FavoriteBorder />}
              </IconButton>
            </Tooltip>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

const Favourites = (props) => {
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">
              <Home fontSize="small" className="text-secondary" />
              Home
            </Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Favourites</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <h2>Your Favourites</h2>
      </div>
      <div className="row">
        {props.favourites ? (
          props.favourites.books.map((book) => {
            return (
              <div key={book._id} className="col-10 col-sm-6 col-lg-3">
                <RenderBooks book={book} />
              </div>
            );
          })
        ) : (
          <div>
            <h4>You don't have any favourites</h4>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favourites;
