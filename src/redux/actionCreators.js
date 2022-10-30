import * as actionTypes from './actionTypes';
import DISHES from '../data/dishes';

export const addComment = (dishId, rating, author, comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: {
            dishId: dishId,
            author: rating,
            rating: author,
            comment: comment,
        }
    }
}

export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}

export const dishesLoading = () => {
    return {
        type: actionTypes.DISHES_LOADING,
    }
}

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        setTimeout(() => dispatch(loadDishes(DISHES)), 2000);
    }
}