import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import Menu from "./MenuComponent";
import BookDetail from "./BookDetailComponent";
import AddBooks from "./AddBooksComponent";
import Edit from "./EditBookComponent";
import Header from "./HeaderComponent";
import Login from "./LoginComponent";
// import Favourites from './FavouritesComponent';
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
  removeComment,
  fetchFavourites,
  removeFavourite,
  postFavourite,
} from "../redux/ActionCreators";
import Favourites from "./FavouritesComponent";

const mapStateToProps = (state) => {
  return {
    books: state.books,
    auth: state.auth,
    comments: state.comments,
    favourites: state.favourites,
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
    ISBN,
    bookImage
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
        ISBN,
        bookImage
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
  removeComment: (commentId) => dispatch(removeComment(commentId)),
  fetchFavourites: () => dispatch(fetchFavourites()),
  postFavourite: (bookId) => dispatch(postFavourite(bookId)),
  removeFavourite: (bookId) => dispatch(removeFavourite(bookId)),
});

class Main extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchBooks();
    this.props.fetchUser();
    this.props.fetchComments();
    this.props.fetchFavourites();
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
          removeComment={this.props.removeComment}
          isLoading={this.props.comments.isLoading}
          deleteSuccess={this.props.comments.deleteSuccess}
          errMess={this.props.comments.errMess}
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

    const ProtectedRoute = ({ component: Component, ...rest }) => (
      <Route
        {...rest}
        render={(props) =>
          this.props.auth.user !== null ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/users/login", state: { from: props.location } }}
            />
          )
        }
      />
    );

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
                favourites={this.props.favourites.favourites[0]}
                postFavourite={this.props.postFavourite}
                removeFavourite={this.props.removeFavourite}
                fetchFavourites={this.props.fetchFavourites}
                user={this.props.auth.user}
                favouritesLoading={this.props.favourites.isLoading}
              />
            )}
          />
          <Route exact path="/menu/:bookId" component={BookWithId} />
          <Route path="/menu/:bookId/edit" component={EditWithId} />
          <Route
            exact
            path="/users/login"
            component={() => (
              <Login
                auth={this.props.auth}
                login={this.props.login}
                fetchFavourites={this.props.fetchFavourites}
              />
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
          <ProtectedRoute
            exact
            path="/favourites"
            component={() => (
              <Favourites favourites={this.props.favourites.favourites[0]} />
            )}
          />
          <Redirect path="/" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
