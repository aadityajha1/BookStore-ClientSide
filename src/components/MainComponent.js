import React, { Component } from 'react';
import { Switch, Route , Redirect, withRouter } from 'react-router-dom';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import BookDetail from './BookDetailComponent';
import AddBooks from './AddBooksComponent';
import Header from './HeaderComponent';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { fetchBooks, postBook, removeBook } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return{
        books: state.books
    }
}

const mapDispatchToProps = dispatch => ({
    fetchBooks: () => { dispatch(fetchBooks())},
    postBook: (bookname, author, description, publication, image, price, category, ISBN ) =>  dispatch(postBook(bookname, author, description, publication, image, price, category, ISBN )),
    resetAddBook: () => { dispatch(actions.reset('addbook'))},
    // removeBook: (bookId) => { dispatch(removeBook(bookId))} 
});

class Main extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        this.props.fetchBooks();
    }

    render() {
        return(
            <div>
                <Header/>
                <Switch location={this.props.location}>
                    <Route exact path="/" component={() => <Home books={this.props.books} />}/>
                    <Route exact path='/menu' component={() => <Menu books={this.props.books}  />} />
                    <Route exact path='/addbooks' component={() => <AddBooks resetAddBook={this.props.resetAddBook} postBook={this.props.postBook} />} />
                    <Redirect path='/' />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));