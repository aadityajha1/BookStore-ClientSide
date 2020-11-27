import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardSubtitle,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Media,
} from "reactstrap";
import {
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Avatar,
  Fab,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Comment, MoreVert } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { baseUrl } from "../shared/baseUrl";

const RenderBook = ({ book }) => {
  return (
    <div>
      <Card className="">
        <CardImg src={baseUrl + book.image} height="300" width="auto" />
        <CardTitle>
          <h3>{book.name}</h3>
        </CardTitle>
        <CardSubtitle className="text-secondary">-- {book.author}</CardSubtitle>
      </Card>
    </div>
  );
};

const RenderDescription = ({ book }) => {
  return (
    <div>
      <h2>Description</h2>
      <p>
        Price: ${book.price} <br />
        Category: {book.category} <br />
        Publication: {book.publication} <br />
        ISBN: {book.ISBN}
      </p>
      <p className="text-justify">{book.description}</p>
      <p></p>
    </div>
  );
};

const RenderComment = ({ comment, user }) => {
  return (
    <div>
      <Media tag="li" className="mb-4">
        <Media left>
          <Avatar
            style={{
              height: "40px",
              width: "40px",
              objectFit: "scale-down",
              borderRadius: "50%",
            }}
            object
            src={baseUrl + comment.author.image}
            alt={comment.author.firstname}
          />
        </Media>

        <Media body className="col-10">
          <Media heading className=" ">
            <h5 className="col-12  col-md-4 d-inline-block">
              {user._id === comment.author._id
                ? "You"
                : comment.author.firstname}{" "}
            </h5>
            <Rating
              className="col-12 col-md-3 p-md-0  "
              value={comment.rating}
              readOnly
            />
          </Media>
          <p className="col-12 ">{comment.comment}</p>
        </Media>
        {user._id === comment.author._id ? (
          <Media right>
            <IconButton size="small">
              <MoreVert />
            </IconButton>
            {/* <Menu></Menu> */}
          </Media>
        ) : null}
      </Media>
    </div>
  );
};

const BookDetail = (props) => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(null);
  const comments = props.comments.filter(
    (cmnt) => cmnt.book._id === props.bookId
  );
  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addComment(rating, comment, props.book._id);
    alert(comment);
    setComment("");
  };

  // useEffect(() => {
  //   setComments(props.comments.filter((cmt) => cmt.book._id === props.bookId));
  //   setBook(props.books.filter((bok) => bok._id === props.bookId));
  // }, []);

  // const commentsList =
  // alert(JSON.stringify(props.book));
  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/menu">Menu</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>{props.book.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="row" style={{ justifyContent: "center" }}>
        <div className="col-10 col-sm-4 mb-3">
          <RenderBook book={props.book} />
        </div>
        <div className="col-10 col-sm-8">
          <RenderDescription book={props.book} />
        </div>
      </div>

      <div className="row my-5" style={{ justifyContent: "center" }}>
        <div className="col-12 col-md-7 mb-3">
          <TextField
            fullWidth
            placeholder="Add a review..."
            label="Add a Review"
            id="review"
            name="review"
            onChange={(e) => setComment(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <Comment />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="col-6 col-md-2">
          <Rating
            name="rating"
            // precision={0.5}
            onChange={(e, newValue) => {
              setRating(newValue);
              console.log(rating);
            }}
          />
        </div>
        <div className="col-6 col-md-2" style={{ float: "right" }}>
          <Button
            className="ml-md-2"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
      <div className="row">
        <h3 className="col-12 col-sm-8 mb-5">Comments</h3>

        <div className="col-12 col-sm-8">
          {comments.map((comment) => {
            return (
              <div>
                <ListGroup key={comment._id}>
                  <RenderComment comment={comment} user={props.user} />
                </ListGroup>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// BookDetail.propTypes = {
//   comments: PropTypes.object.isRequired,
// };

export default BookDetail;
