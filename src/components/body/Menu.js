import React, { Component } from "react";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { connect } from "react-redux";
import { addComment, fetchDishes, fetchComments } from '../../redux/actionCreators';
import Loading from './loading';

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
            addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
            deleteComment: null,
            fetchDishes: () => dispatch(fetchDishes()),
            fetchComments: () => dispatch(fetchComments()),
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

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
    }

    render() {
        document.title = 'Menu';
        if (this.props.dishes.isLoading) {
            return (
                <Loading />
            );
        }
        else {
            const menu = this.props.dishes.dishes.map(item => {
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
                const comments = this.props.comments.comments.filter(comment => comment.dishId === this.state.selectedDish.id);
                dishDetail = < DishDetail dish={this.state.selectedDish} comments={comments} addComment={this.props.addComment} isLoading={this.props.comments.isLoading} />
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
}

export default connector(Menu);