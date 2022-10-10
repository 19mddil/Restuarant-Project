import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from "./loadComments";
const DishDetail = props => {
    return (
        <div>
            <Card style={{ margin: "10px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAlign: "left" }}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>
                        <p>{props.dish.description}</p>
                        <p>{props.dish.price}/-</p>
                    </CardText>
                    <LoadComments comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    );
}

export default DishDetail;