import React, { useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardImg,
  CardSubtitle,
  CardTitle,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { Input, InputAdornment, TextField, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Comment } from "@material-ui/icons";
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
      <h2>{book.name}</h2>
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

const RenderComments = ({ comment }) => {
  return (
    <div>
      <ListGroupItem>
        <p>{comment.comment}</p>
        <span>{comment.author.firstname}</span>
      </ListGroupItem>
    </div>
  );
};

const BookDetail = (props) => {
  console.log(JSON.stringify(props.comments));
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(null);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.addComment(rating, comment, props.book._id);
    alert(comment);
    setComment("");
  };

  const comments = props.comments.map((comment) => {
    return (
      <div>
        <ListGroup key={comment._id}>
          <RenderComments comment={comment} />
        </ListGroup>
      </div>
    );
  });
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
      <div className="row">
        <div className="col-12 col-md-4">
          <RenderBook book={props.book} />
        </div>
        <div className="col-12 col-md-8">
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
        <div className="col">{comments}</div>
      </div>
    </div>
  );
};

// BookDetail.propTypes = {
//   comments: PropTypes.object.isRequired,
// };

export default BookDetail;
