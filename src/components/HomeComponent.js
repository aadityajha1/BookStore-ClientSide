import React from 'react';
import { Card, CardTitle , CardBody, CardImg, CardSubtitle, CardText} from 'reactstrap';

function RenderBooks({book}) {
    return(
        <Card>
            <CardTitle>{book._id}</CardTitle>
            <CardSubtitle>{book.name}</CardSubtitle>
            <CardBody>
                <CardText>{book.description}</CardText>
            </CardBody>
        </Card>
    )
}
function Home(props) {
    const menu = props.books.books.map((book) => {
        return(
            <div key={book._id}>
                <RenderBooks book={book}/>
            </div>
        )
    })
    if(props.books.isLoading) {
        return(
            <div className="container">
                <h2>isLoading is true</h2>
            </div>
        )
    }

    else if (props.books.errMess) {
        return(
            <div className="col-6 col-sm-4">
                <h4>{props.books.errMess}</h4>
            </div>
        )
    }
    else
        return(
            <div className="container">
                
                <h4>This is Home Page</h4>
                {/* <Card className=" col-4">
                    <CardImg/>
                    <CardTitle>{props.books.books.name}</CardTitle>
                    <CardSubtitle>{props.books.books._id}</CardSubtitle>
                </Card>
                {props.books.books.name} */}
                <div className="row">
                    {menu}
                </div>
            </div>
        )
}

export default Home;