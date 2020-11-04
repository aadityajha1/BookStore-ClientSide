import React , { Component} from 'react';
import { Label, Row } from 'reactstrap';
import { Button } from '@material-ui/core';

import { Control, Form,  } from 'react-redux-form';


 

class AddBooks extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert(JSON.stringify(values));
        this.props.postBook(values.bookname, values.author, values.category, values.publication, values.image, values.price, values.ISBN, values.description);
        this.props.resetAddBook(); 
    }

    render(){
    return(
        <div className="container">
            <div className="row" style={{justifyContent: "center"}}>
                <h2 className="display-4 text-center">Add More Books</h2>
            </div>
            <div className="row " style={{justifyContent: "center"}}>
                <div className="col-12 col-sm-7">
                <Form model="addbook" onSubmit={(values) => this.handleSubmit(values)} >
                    <Row className="mb-3 form-group">
                        <Label md={3} htmlFor="bookname">Book Name</Label>
                        <Control.text model=".bookname" placeholder="Name" id="bookname" name="bookname"   />
                    </Row>
                    <Row  className="mb-3 form-group">
                        <Label md={3} htmlFor="author">Author</Label>
                        <Control.text model=".author"  id="author" name="author"   />
                    </Row>
                    <Row className="mb-3 form-group">
                        <Label md={3} htmlFor="price">Price</Label>
                        <Control.text model=".price"  id="price" name="price" placeholder=" Price"  />
                        
                    </Row>
                    <Row  className="mb-3  form-group">
                        <Label md={3} htmlFor="category">Category</Label>
                        <Control.text model=".category" id="category" name="category" placeholder="" />
                    </Row>
                    <Row  className="mb-3 form-group">
                        <Label md={3} htmlFor="publication">Publication</Label>
                        <Control.text model=".publication" id="publication" name="publication"  />
                    </Row>
                    <Row  className="mb-3 form-group">
                        <Label md={3} htmlFor="image">Upload Image</Label>
                        <Control.text model=".image" id="image" name="image"  />
                    </Row>
                    <Row  className="mb-3 form-group">
                        <Label md={3} htmlFor="ISBN">ISBN No.</Label>
                        <Control.text model=".ISBN" id="ISBN" name="ISBN"/>
                    </Row>
                    <Row className="mb-3 form-group">
                        <Label md={3} for="description">Description</Label>
                        <Control.textarea model=".description" className="col-12" id="description" name="description"></Control.textarea>
                    </Row>
                    <Row className="mb-5 form-group" >
                        <Button variant="contained" type="submit" color="primary">Submit</Button>
                    </Row>
                </Form>
                </div>
            </div>
        </div>
    );
    }
}

export default AddBooks;