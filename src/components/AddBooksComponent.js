import React, { Component } from "react";
import { Label, Row } from "reactstrap";
import {
  Button,
  FormControl,
  Fab,
  Avatar,
  Chip,
  Typography,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { Control, Form } from "react-redux-form";

class AddBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageUrl: null,
      imageName: null,
      image: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(values) {
    // alert(JSON.stringify(values));
    var data = new FormData();
    data.append("bookImage", this.state.image);

    console.log(
      "Image: " + this.state.image + " Image Url " + this.state.imageName
    );
    this.props.postBook(
      values.bookname,
      values.author,
      values.description,
      values.publication,
      this.state.imageName,
      parseInt(values.price),
      values.category,
      values.ISBN,
      data
    );
    this.props.resetAddBook();
  }

  handleChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    this.setState({ imageName: file.name, image: file });
    // setImageName(file.name);

    // console.log(data);
    // setImage(file);
    console.log(this.state.image);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      localStorage.setItem("profile-image", reader.result);
      this.setState({ imageUrl: reader.result });
      //   setImgUrl(reader.result);
    });
    reader.readAsDataURL(file);
  };
  componentDidMount() {
    if (localStorage.getItem("profile-image")) {
      this.setState({ imageUrl: localStorage.getItem("profile-image") });
      // setImgUrl(localStorage.getItem("profile-image"));
    }
  }
  render() {
    return (
      <div className="container">
        <div className="row" style={{ justifyContent: "center" }}>
          <h2 className="col-12 col-sm-10 display-4 text-center">
            Add More Books
          </h2>
        </div>
        <div className="row " style={{ justifyContent: "center" }}>
          <div className="col-10 col-sm-7">
            <Form
              model="addbook"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <FormControl fullWidth className="mb-3 " margin="normal">
                <div
                  className="col-12 offset-4 "
                  style={{ display: "block", justifyContent: "center" }}
                >
                  {this.state.image ? (
                    <div>
                      <Avatar
                        style={{
                          width: "80px",
                          height: "80px",
                          objectFit: "cover",
                        }}
                        alt="profile Image"
                        src={this.state.imageUrl}
                      />
                      <Chip
                        label="Profile"
                        // avatar={<Avatar alt="Profile Image" src={image} />}
                        color="primary"
                        // icon={imageUrl}
                        onDelete={() => {
                          localStorage.removeItem("profile-image");
                          //   setImgUrl(null);
                          //   setImage(null);
                          this.setState({ imageUrl: null, image: null });
                        }}
                      />
                    </div>
                  ) : (
                    <div>
                      <label htmlFor="profile">
                        <input
                          style={{ display: "none" }}
                          id="profile"
                          name="profile"
                          type="file"
                          onChange={(e) => {
                            this.handleChange(e);
                          }}
                        />
                        <Fab color="primary" aria-label="add" component="span">
                          {" "}
                          <Add />{" "}
                        </Fab>
                      </label>
                      <Typography>Upload Profile</Typography>
                    </div>
                  )}
                </div>
              </FormControl>
              <Row className="mb-3 form-group">
                <Label md={3} htmlFor="bookname">
                  Book Name
                </Label>
                <Control.text
                  className="col-12 col-md-9"
                  model=".bookname"
                  placeholder="Name"
                  id="bookname"
                  name="bookname"
                />
              </Row>
              <Row className="mb-3 form-group">
                <Label md={3} htmlFor="author">
                  Author
                </Label>
                <Control.text
                  className="col-12 col-md-9"
                  model=".author"
                  placeholder="Author"
                  id="author"
                  name="author"
                />
              </Row>
              <Row className="mb-3 form-group">
                <Label md={3} htmlFor="price">
                  Price
                </Label>
                <Control.text
                  className="col-12 col-md-9"
                  model=".price"
                  placeholder="Price in $"
                  id="price"
                  name="price"
                  placeholder=" Price"
                />
              </Row>
              <Row className="mb-3  form-group">
                <Label md={3} htmlFor="category">
                  Category
                </Label>
                <Control.text
                  className="col-12 col-md-9"
                  model=".category"
                  placeholder="Category"
                  id="category"
                  name="category"
                />
              </Row>
              <Row className="mb-3 form-group">
                <Label md={3} htmlFor="publication">
                  Publication
                </Label>
                <Control.text
                  className="col-12 col-md-9"
                  placeholder="Publication"
                  model=".publication"
                  id="publication"
                  name="publication"
                />
              </Row>
              {/* <Row className="mb-3 form-group">
                <Label md={3} htmlFor="image">
                  Upload Image
                </Label>
                <Control.text
                  placeholder="Image"
                  className="col-12 col-md-9"
                  model=".image"
                  id="image"
                  name="image"
                />
              </Row> */}
              <Row className="mb-3 form-group">
                <Label md={3} htmlFor="ISBN">
                  ISBN No.
                </Label>
                <Control.text
                  placeholder="ISBN No."
                  className="col-12 col-md-9"
                  model=".ISBN"
                  id="ISBN"
                  name="ISBN"
                />
              </Row>
              <Row className="mb-3 form-group">
                <Label md={3} htmlFor="description" for="description">
                  Description
                </Label>
                <Control.textarea
                  model=".description"
                  className="col-12 col-md-9"
                  rows="8"
                  id="description"
                  name="description"
                ></Control.textarea>
              </Row>
              <Row className="mb-5 form-group ">
                <Button variant="contained" type="submit" color="primary">
                  Submit
                </Button>
                <Button
                  className="ml-3"
                  variant="contained"
                  type="submit"
                  onClick={this.props.resetAddBook()}
                >
                  Cancel
                </Button>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBooks;
