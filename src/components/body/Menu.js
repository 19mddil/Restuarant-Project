import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from "react-redux";

let connector = connect(
    state => {
        // console.log("map state to props", state);
        return {
            dishes: state.dishes,
            comments: state.comments
        }
    },
    dispatch => {
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
    }
);


/**
 * State change rerenders the whole react
 */

class Menu extends Component {
    state = {
        selectedDish: null,
        modalOpen: false
    }

    onDishSelect = dish => {
        this.setState(
            {
                selectedDish: dish,
            }
        )
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        })
    }

    render() {
        document.title = 'Menu';
        const menu = this.props.dishes.map(item => {
            return (
                <MenuItem
                    dish={item}
                    key={item.id}
                    onDishSelect={this.onDishSelect}
                />
            )
        });
        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.props.comments.filter(comment => comment.dishId === this.state.selectedDish.id);
            dishDetail = < DishDetail dish={this.state.selectedDish} comments={comments} addComment={this.props.addComment} />
        }
        return (
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="Secendary" onClick={this.toggleModal}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default connector(Menu);