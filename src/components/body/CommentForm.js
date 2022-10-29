import React, { Component } from 'react';
import { Form, Button, Input } from 'reactstrap';
import { connect } from "react-redux";

const connector = connect(null, dispatch => {
    return {
        addComment: (dishId, rating, author, comment) => dispatch({
            type: 'ADD_COMMENT',
            payload: {
                dishId: dishId,
                author: rating,
                rating: author,
                comment: comment,
            }
        }),
        deleteComment: null
    }
});

class CommentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            author: '',
            rating: '',
            comment: '',
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.setState({
            author: '',
            rating: '',
            comment: '',
        });
        this.props.addComment(this.props.dishId, this.state.author, this.state.rating, this.state.comment)
    }

    render() {
        console.log(this.props);
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder='your name'
                        onChange={this.handleInputChange}
                        required
                    />
                    <br />
                    <Input
                        type="select"
                        name="rating"
                        value={this.state.rating}
                        onChange={this.handleInputChange}>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Input>
                    <br />
                    <Input
                        type="textarea"
                        name="comment"
                        value={this.state.comment}
                        placeholder="Your Comment"
                        onChange={this.handleInputChange}
                        required
                    />
                    <br />
                    <Button type='submit' >Submit Comment</Button>
                </Form>
            </div>
        );
    }
}

export default connector(CommentForm);