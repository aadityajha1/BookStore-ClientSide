import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import BookDetail from "./BookDetailComponent";
import AddBooks from "./AddBooksComponent";
import Edit from "./EditBookComponent";
import Header from "./HeaderComponent";
import Login from "./LoginComponent";
import Register from "./RegisterUser";
import { connect } from "react-redux";
import { actions } from "react-redux-form";
import {
  fetchBooks,
  fetchUser,
  postBook,
  removeBook,
  updateBook,
  login,
  register,
  logout,
  fetchComments,
  addComment,
} from "../redux/ActionCreators";

const mapStateToProps = (state) => {
  return {
    books: state.books,
    auth: state.auth,
    comments: state.comments,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => {
    dispatch(fetchBooks());
  },
  fetchUser: () => {
    dispatch(fetchUser());
  },
  postBook: (
    bookname,
    author,
    description,
    publication,
    image,
    price,
    category,
    ISBN
  ) =>
    dispatch(
      postBook(
        bookname,
        author,
        description,
        publication,
        image,
        price,
        category,
        ISBN
      )
    ),
  resetAddBook: () => {
    dispatch(actions.reset("addbook"));
  },
  removeBook: (bookId) => {
    dispatch(removeBook(bookId));
  },
  updateBook: (
    bookId,
    bookname,
    author,
    description,
    publication,
    image,
    price,
    category,
    ISBN
  ) =>
    dispatch(
      updateBook(
        bookId,
        bookname,
        author,
        description,
        publication,
        image,
        price,
        category,
        ISBN
      )
    ),
  login: (username, password) => dispatch(login(username, password)),
  register: (
    firstname,
    lastname,
    email,
    username,
    gender,
    password,
    image,
    imageName
  ) =>
    dispatch(
      register(
        firstname,
        lastname,
        email,
        username,
        gender,
        password,
        image,
        imageName
      )
    ),
  logout: () => dispatch(logout()),
  fetchComments: () => dispatch(fetchComments()),
  addComment: (rating, comment, bookId) =>
    dispatch(addComment(rating, comment, bookId)),
});

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchUser();
    this.props.fetchComments();
  }

  render() {
    const BookWithId = ({ match }) => {
      return (
        <BookDetail
          book={
            this.props.books.books.filter(
              (book) => book._id === match.params.bookId
            )[0]
          }
          bookId={match.params.bookId}
          // comments={this.props.comments.comments.filter(
          //   (comment) => comment.book._id === match.params.bookId
          // )}
          user={this.props.auth.user}
          comments={this.props.comments.comments}
          addComment={this.props.addComment}
        />
      );
    };

    const EditWithId = ({ match }) => {
      return (
        <Edit
          book={
            this.props.books.books.filter(
              (book) => book._id === match.params.bookId
            )[0]
          }
          updateBook={this.props.updateBook}
          resetAddBook={this.props.resetAddBook}
        />
      );
    };

    return (
      <div>
        <Header logout={this.props.logout} user={this.props.auth.user} />
        <Switch location={this.props.location}>
          <Route
            exact
            path="/"
            component={() => <Home books={this.props.books} />}
          />
          <Route
            exact
            path="/menu"
            component={() => (
              <Menu
                books={this.props.books}
                removeBook={this.props.removeBook}
              />
            )}
          />
          <Route exact path="/menu/:bookId" component={BookWithId} />
          <Route path="/menu/:bookId/edit" component={EditWithId} />
          <Route
            exact
            path="/users/login"
            component={() => (
              <Login auth={this.props.auth} login={this.props.login} />
            )}
          />
          <Route
            exact
            path="/users/register"
            component={() => (
              <Register register={this.props.register} auth={this.props.auth} />
            )}
          />
          <Route
            exact
            path="/addbooks"
            component={() => (
              <AddBooks
                resetAddBook={this.props.resetAddBook}
                postBook={this.props.postBook}
              />
            )}
          />
          <Redirect path="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
