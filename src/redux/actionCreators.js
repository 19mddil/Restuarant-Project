import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';

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

export const isAgree = agree => {
    return {
        type: actionTypes.IS_AGREE,
        payload: {
            agree: agree
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
        axios.get(baseUrl + "dishes")
            .then(res => res.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            .catch(err => err.message);
    }
}