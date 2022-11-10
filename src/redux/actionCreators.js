import * as actionTypes from './actionTypes';
import axios from 'axios';
import { baseUrl } from './baseUrl';

export const addComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = {
        dishId: dishId,
        author: author,
        rating: rating,
        comment: comment
    }
    newComment.date = new Date().toISOString();
    axios.post(baseUrl + 'comments', newComment)
        .then(res => res.data)
        .then(comment => dispatch(commentConcat(comment)));
}

export const commentConcat = comment => ({
    type: actionTypes.ADD_COMMENT,
    payload: comment
})

export const commentLoading = () => (
    {
        type: actionTypes.COMMENT_LOADING,
    }
)

export const loadComments = comments => (
    {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments,
    }
)

export const fetchComments = () => dispatch => {
    dispatch(commentLoading);
    axios.get(baseUrl + 'comments')
        .then(res => res.data)
        .then(comments => dispatch(loadComments(comments)));
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

export const dishesFailed = (errMsg) => ({
    type: actionTypes.DISHES_FAILED,
    payload: errMsg
})

export const fetchDishes = () => {
    return dispatch => {
        dispatch(dishesLoading());
        axios.get(baseUrl + "dishes")
            .then(res => res.data)
            .then(dishes => dispatch(loadDishes(dishes)))
            .catch(err => dispatch(dishesFailed(err.message)));
    }
}