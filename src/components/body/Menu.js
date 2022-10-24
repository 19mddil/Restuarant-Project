import React, { Component } from "react";
import DISHES from "../../data/dishes";
import MenuItem from "./MenuItem";
import DishDetail from "./DishDetail";
import { CardColumns, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import COMMENTS from "../../data/comments";
/**
 * State change rerenders the whole react
 */
class Menu extends Component {
    state = {
        dishes: DISHES,
        comments: COMMENTS,
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
        const menu = this.state.dishes.map(item => {
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
            const comments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id);
            console.log(comments);
            dishDetail = < DishDetail dish={this.state.selectedDish} comments={comments} />
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

export default Menu;