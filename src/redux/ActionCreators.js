import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";
import Cookies from "js-cookie";
import { secretKey } from "../shared/config";
import axios from "axios";

import { token } from "./getToken";
var CryptoJs = require("crypto-js");
export const fetchBooks = () => (dispatch) => {
  dispatch(booksLoading(true));
  const bearer = "Bearer " + token;
  return fetch(baseUrl + "books", {
    headers: {
      Authorization: bearer,
    },
  })
    .then((response) => {
      if (response.ok) {
        // console.log(response);
        return response;
      } else {
        var error = new Error(
          "Error" + response.status + ":" + response.statusText
        );
        error.response = response;
        throw error;
      }
    })
    .then((response) => response.json())
    .then((books) => dispatch(addBooks(books)))
    .catch((error) => dispatch(booksFailed(error.message)));
};

export const booksLoading = () => ({
  type: ActionTypes.BOOKS_LOADING,
});

export const booksFailed = (errmess) => ({
  type: ActionTypes.BOOKS_FAILED,
  payload: errmess,
});

export const addBooks = (books) => ({
  type: ActionTypes.ADD_BOOKS,
  payload: books,
});

export const postBook = (
  name,
  author,
  description,
  publication,
  image,
  price,
  category,
  ISBN
) => (dispatch) => {
  const newBook = {
    name: name,
    author: author,
    price: price,
    category: category,
    ISBN: ISBN,
    publication: publication,
    description: description,
    image: image,
  };
  const bearer = "Bearer " + token;

  return fetch(baseUrl + "books", {
    method: "POST",
    body: JSON.stringify(newBook),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(addBooks(response)))
    .catch((error) => {
      console.log("Post Books", +error.message);
      alert("Your Book couldn't be added\nError: " + error.message);
    });
};

export const deleteBook = (book) => ({
  type: ActionTypes.BOOK_DELETE,
  payload: book,
});

export const removeBook = (bookId) => (dispatch) => {
  const bearer = "Bearer " + token;

  return fetch(baseUrl + `books/${bookId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "appication/json",
    },
    credentials: "include",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(deleteBook(response)))
    .then(() => {
      // dispatch(booksLoading(true));
      fetch(baseUrl + "books")
        .then((response) => response.json())
        .then((result) => {
          dispatch(addBooks(result));
        })
        .catch((error) => {
          console.log("Post Books", +error.message);
          alert("Your Book couldn't be added\nError: " + error.message);
        });
    })
    .catch((error) => {
      console.log("Post Books", +error.message);
      alert("Selected Book couldn't be Deleted\nError: " + error.message);
    });
};

export const editBook = (book) => ({
  type: ActionTypes.EDIT_BOOK,
  payload: book,
});

export const updateBook = (
  bookId,
  name,
  author,
  description,
  publication,
  image,
  price,
  category,
  ISBN
) => (dispatch) => {
  const updatedBook = {
    name: name,
    author: author,
    price: price,
    category: category,
    ISBN: ISBN,
    publication: publication,
    description: description,
    image: image,
  };
  console.log(bookId);
  var bearer = "Bearer " + token;
  return fetch(baseUrl + `books/${bookId}`, {
    method: "PUT",
    body: JSON.stringify(updatedBook),
    headers: {
      "Content-Type": "application/json",
      Authorization: bearer,
    },
    credentials: "same-origin",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error" + response.status + ": " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((response) => response.json())
    .then((response) => dispatch(editBook(response)))
    .then(() => {
      // dispatch(booksLoading(true));
      fetch(baseUrl + "books")
        .then((response) => response.json())
        .then((result) => {
          dispatch(addBooks(result));
        })
        .catch((error) => {
          console.log("Post Books", +error.message);
          alert("Your Book couldn't be added\nError: " + error.message);
        });
    })
    .catch((error) => {
      console.log("Post Books", +error.message);
      alert("Your Book couldn't be updated\nError: " + error.message);
    });
};

export const signup = () => ({
  type: ActionTypes.USER_REGISTER,
});

export const signin = () => ({
  type: ActionTypes.USER_LOGIN,
});

export const login = (username, password) => (dispatch) => {
  const User = {
    username,
    password,
  };

  return axios
    .post(baseUrl + "users/login", User, { withCredentials: true })
    .catch((err) => alert(err));
  // (
  //   fetch(baseUrl + "users/login", {
  //     method: "POST",
  //     body: JSON.stringify(User),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     credentials: "same-origin",
  //   })
  //     .then(
  //       (response) => {
  //         if (response.ok) {
  //           return response;
  //         } else {
  //           var error = new Error(
  //             "Error" + response.status + ": " + response.statusText
  //           );
  //           error.response = response;
  //           throw error;
  //         }
  //       },
  //       (error) => {
  //         var errmess = new Error(error.message);
  //         throw errmess;
  //       }
  //     )
  //     .then((response) => response.json())
  //     // .then((response) => alert(response.token))
  //     .then((response) => {

  //       localStorage.setItem("user", User.username);
  //       var ciphertext = CryptoJs.AES.encrypt(
  //         response.token,
  //         secretKey
  //       ).toString();
  //       Cookies.set("token", ciphertext, {
  //         expires: 7,
  //         path: "/",
  //         // sameSite: true,
  //       });

  //     })
  //     .catch((error) => {
  //       console.log("Post Books", +error.message);
  //       alert("Login Unsuccessful: " + error.message);
  //     })
  // );
};
