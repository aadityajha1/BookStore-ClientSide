import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, Input } from 'reactstrap';
import { Link} from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';


const RenderBook = ({book}) => {
    return(
        <div className="row" >
            <div className="col-12 col-md-5">
                <Card >
                    <CardImg src={baseUrl + book.image} width="200" />
                </Card>
            </div>
            
            <div className="col-12 col-md-6">
                <h2>{book.name}</h2>
                <p>Price: ${book.price} <br/>Category: {book.category} <br/>Publication: {book.publication} <br/>ISBN: {book.ISBN}</p>
                <p>{book.description}</p>
                <p></p>
            </div>
        </div>
    )
}

const BookDetail = (props) => {
    
    // alert(JSON.stringify(props.book));
    return(
        <div className="container">
            <div className="row">
            <Breadcrumb >
                    <BreadcrumbItem>
                    <Link to="/home" >
                        Home
                    </Link>
                    </BreadcrumbItem>
                    
                    <BreadcrumbItem>
                        <Link to="/menu">
                            Menu
                        </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.book.name}
                    </BreadcrumbItem>
                </Breadcrumb>
                </div>
                <div className="row">
                    <RenderBook book={props.book} />
                </div>
                <div className="row">
                    <Input  style={{borderBottom: "2px solid red"}} />
                </div>
        </div>
    )
}

export default BookDetail;