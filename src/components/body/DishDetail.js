import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from "./loadComments";
import CommentForm from "./CommentForm";
const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        {props.dish.description}</CardText>
                    <CardText>{props.dish.price}/-</CardText>
                    <LoadComments comments={props.comments} />
                    <hr />
                    <CommentForm dishId={props.dish.id} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;