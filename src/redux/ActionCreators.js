import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

// import { secretKey } from "../shared/config";
import axios from "axios";
import { type } from "jquery";

// var CryptoJs = require("crypto-js");
export const fetchBooks = () => (dispatch) => {
  dispatch(booksLoading(true));

  return fetch(baseUrl + "books")
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
  // const bearer = "Bearer " + token;

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

export const deleteFailed = (errMess) => ({
  type: ActionTypes.DELETE_FAILED,
  payload: errMess,
});

export const removeBook = (bookId) => (dispatch) => {
  // const bearer = "Bearer " + token;

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
    .then((response) => dispatch(deleteBook(true)))
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
      dispatch(deleteFailed(error));
      console.log("Post Books", +error.message);
      // alert("Selected Book couldn't be Deleted\nError: " + error.message);
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
  // var bearer = "Bearer " + token;
  return fetch(baseUrl + `books/${bookId}`, {
    method: "PUT",
    body: JSON.stringify(updatedBook),
    headers: {
      "Content-Type": "application/json",
      // Authorization: bearer,
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

export const signupSuccess = (msg) => ({
  type: ActionTypes.REGISTER_SUCCESS,
  payload: msg,
});

export const signupFailed = (errMsg) => ({
  type: ActionTypes.REGISTER_FAILED,
  payload: errMsg,
});

export const signinSuccess = (mess) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: mess,
});

export const signinFailed = (errMsg) => ({
  type: ActionTypes.LOGIN_FAILED,
  payload: errMsg,
});

export const login = (username, password) => (dispatch) => {
  const User = {
    username,
    password,
  };

  return axios
    .post(baseUrl + "users/login", User, { withCredentials: true })
    .then((resp) => {
      // console.log(resp.user);
      console.log(JSON.stringify(resp.data.user));
      dispatch(signinSuccess(resp.data.user));
      localStorage.setItem("user", User.username);
    })
    .catch((err) => dispatch(signinFailed(err)));
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

export const register = (
  firstname,
  lastname,
  email,
  username,
  gender,
  password,
  image,
  imageName
) => (dispatch) => {
  const User = {
    firstname,
    lastname,
    email,
    username,
    gender,
    password,
    imageName,
  };

  // axios
  //   .post(baseUrl + "users/register", User, { withCredentials: true })
  //   .then((resp) => {
  //     dispatch(signupSuccess(resp.success));
  //   });

  return fetch(baseUrl + "users/register", {
    method: "POST",
    body: JSON.stringify(User),
    headers: {
      "Content-Type": "application/json",
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
    .then((resp) => resp.json())
    .then((resp) => {
      dispatch(signupSuccess(resp));

      fetch(baseUrl + "profileImage", {
        method: "POST",
        body: image,
        credentials: "same-origin",
      })
        .then(
          (response) => {
            if (response.ok) {
              return response;
            } else {
              var error = new Error(
                "ERROR" + response.status + " : " + response.statusText
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
        .then((resp) => resp.json())
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err));
    })
    .catch((err) => {
      dispatch(signupFailed(err));
    });
};

export const logout = () => (dispatch) => {
  return fetch(baseUrl + "users/logout", {
    method: "POST",
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
    .then((resp) => {
      dispatch({
        type: ActionTypes.LOGOUT,
      });
      localStorage.clear();
    })
    .catch((err) => console.log(err));
  // axios
  //   .post(baseUrl + "users/logout", { withCredentials: true })
  //   .then((resp) => dispatch(logout()))
  //   .catch((err) => console.log(`ERROR: ${err}`));
};

export const fetchUser = () => (dispatch) => {
  return fetch(baseUrl + "users/user", {
    credentials: "include",
  })
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error("User not Found");
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errmess = new Error(error.message);
        throw errmess;
      }
    )
    .then((resp) => resp.json())
    .then((user) => dispatch({ type: ActionTypes.GET_USER, payload: user }))
    .catch((err) => {
      console.log(err);
    });
};
