import React, { useState, useEffect } from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardSubtitle,
  CardTitle,
  ListGroup,
  Media,
} from "reactstrap";
import {
  IconButton,
  InputAdornment,
  TextField,
  Button,
  Avatar,
  MenuItem,
  Menu,
  CircularProgress,
  Snackbar,
} from "@material-ui/core";
import { Rating, Alert } from "@material-ui/lab";
import { Comment, MoreVert, Close } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
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

const RenderComment = ({
  comment,
  user,
  removeComment,
  errMess,
  deleteSuccess,
}) => {
  // const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE1, setAnchorE1] = useState(null);
  const open = Boolean(anchorE1);
  const [snackbarOpen, setSnackbarOpen] = useState(deleteSuccess);
  const [isDeleteErr, setIsDeleteErr] = useState(errMess);
  const [isDeleteSuccess, setIsDeleteSuccess] = useState(deleteSuccess);

  var date1 = new Date(comment.updatedAt);
  var date2 = Date.now();

  var diff_in_time = date2 - date1.getTime();

  var diff_in_hours = diff_in_time / (1000 * 3600);

  var diff_in_days = diff_in_time / (1000 * 3600 * 24);

  var diff_in_weeks = diff_in_days / 7;

  var diff_in_mins = diff_in_time / (1000 * 60);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsDeleteSuccess(false);
    setIsDeleteErr(null);
  };
  const handleClick = (event) => {
    // console.log(event.currentTarget);
    // setAnchorEl(event.currentTarget);
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    // setAnchorEl(null);
    setAnchorE1(null);
  };
  const handleDelete = () => {
    removeComment(comment._id);
    setAnchorE1(null);
  };

  return (
    <div>
      <Snackbar
        open={isDeleteErr}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        onClose={handleSnackbarClose}
        autoHideDuration={5000}
      >
        <Alert variant="filled" severity="error">
          Book can't be deleted <span>{errMess}</span>
          <IconButton
            color="inherit"
            aria-label="close"
            size="small"
            onClick={handleSnackbarClose}
          >
            <Close fontSize="small" />
          </IconButton>
        </Alert>
      </Snackbar>
      {/* Delete Snackbar */}
      <Snackbar
        onClose={handleSnackbarClose}
        open={isDeleteSuccess}
        autoHideDuration={6000}
        resumeHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          variant="filled"
          // onClose={() => setSnackbarOpen(false)}
          severity="success"
        >
          Comment Deleted Successfully!{" "}
        </Alert>
      </Snackbar>

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
            <h5 className="col-12  col-md-5 d-inline-block">
              {user
                ? user._id === comment.author._id
                  ? "You"
                  : comment.author.firstname
                : comment.author.firstname}{" "}
              {/* <span className="text-secondary" style={{ fontSize: "14px" }}>
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.updatedAt)))}
              </span> */}
              <span className="text-secondary" style={{ fontSize: "14px" }}>
                {/* {diff_in_days < 1 ? diff_in_time : diff_in_days} */}
                {diff_in_days < 1
                  ? diff_in_hours < 1
                    ? Math.floor(diff_in_mins) + " mins ago"
                    : Math.floor(diff_in_hours) + " hours ago"
                  : diff_in_days > 7
                  ? Math.floor(diff_in_weeks) + " weeks ago"
                  : Math.floor(diff_in_days) + " days ago"}
              </span>
            </h5>

            <Rating
              className="col-12 col-md-3 p-md-0  "
              value={comment.rating}
              readOnly
            />
          </Media>
          <p className="col-12 ">{comment.comment}</p>
        </Media>
        {user ? (
          user._id === comment.author._id ? (
            <Media right>
              <IconButton
                size="small"
                aria-haspopup="true"
                aria-controls="comment-menu"
                aria-labe="more opt for comment"
                onClick={handleClick}
              >
                <MoreVert />
              </IconButton>
              <Menu
                id="comment-menu"
                style={{ marginTop: "40px" }}
                keepMounted
                open={Boolean(anchorE1)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                anchorEl={anchorE1}
                onClose={handleClose}
                // anchorE1={anchorE1}
              >
                <MenuItem onClick={handleClose}>Edit</MenuItem>
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
              </Menu>
            </Media>
          ) : null
        ) : null}
      </Media>
    </div>
  );
};

const BookDetail = (props) => {
  const history = useHistory();
  const [bookId, setBookId] = useState(window.location.pathname.split("/")[2]);
  const [book, setBook] = useState(
    props.books.filter((bok) => bok._id === bookId)[0]
  );
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);
  const [comments, setComments] = useState(
    props.comments.filter((cmnt) => cmnt.book._id === bookId)
  );
  const [authenticated, setauthenticated] = useState(props.user);
  const [raiseAuthError, setRaiseAuthError] = useState(false);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!rating) {
      setRating(1);
    }
    console.log(rating);
    console.log(authenticated, props.user);

    props.addComment(rating, comment, bookId);

    // alert(comment);
    // comments.splice(0,0,{rating: rating, comment: comment, book: props.book._id, author: props.user._id});
    setComment("");
  };
  useEffect(() => {
    window.onbeforeunload = () => {
      setComments(props.comments.filter((cmnt) => cmnt.book._id === bookId));
      setBookId(window.location.pathname.split("/")[2]);
      setBook(props.books.filter((bok) => bok._id === bookId)[0]);
      console.log(window.location.pathname);
      console.log(bookId);
    };

    // console.log(comments);
  });

  return (
    <div style={{ backgroundColor: "#d9dbdb" }}>
      <div className="container">
        <div className="row">
          <Snackbar
            open={raiseAuthError}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            onClose={() => setRaiseAuthError(false)}
            autoHideDuration={6000}
          >
            <Alert variant="filled" severity="error">
              You're not authenticated to post a Review. Please Log in!
              <IconButton
                color="inherit"
                aria-label="close"
                size="small"
                onClick={() => setRaiseAuthError(false)}
              >
                <Close fontSize="small" />
              </IconButton>
            </Alert>
          </Snackbar>
        </div>
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{book.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="row" style={{ justifyContent: "center" }}>
          <div className="col-10 col-sm-4 mb-3">
            <RenderBook book={book} />
          </div>
          <div className="col-10 col-sm-8">
            <RenderDescription book={book} />
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
            {props.isLoading ? (
              <div className="row" style={{ justifyContent: "center" }}>
                <CircularProgress />
              </div>
            ) : (
              comments.map((comment) => {
                // console.log(comments.indexOf(comment));
                return (
                  <div>
                    {" "}
                    <ListGroup key={comment._id}>
                      <RenderComment
                        comment={comment}
                        user={props.user}
                        removeComment={props.removeComment}
                        deleteSuccess={props.deleteSuccess}
                        errMess={props.errMess}
                      />
                    </ListGroup>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// BookDetail.propTypes = {
//   comments: PropTypes.object.isRequired,
// };

export default BookDetail;
