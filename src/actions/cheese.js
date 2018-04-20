import { API_BASE_URL } from '../config';


export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST'
export const fetchCheeseRequest = (cheeses)=> ({
    type: FETCH_CHEESE_REQUEST,
    cheeses
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS'
export const fetchCheesesSuccess=(cheeses)=> ({
    type: FETCH_CHEESE_SUCCESS,
    cheeses
});
export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR'
export const fetchCheesesError = (cheeses)=> ({
    type: FETCH_CHEESE_ERROR
})
export const fetchCheeses = () => {
    return(dispatch) => {
        fetch(`${API_BASE_URL}api/cheeses`)
        .then(response => response.json())
        .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
        .catch(err => console.log(err))
    }
};