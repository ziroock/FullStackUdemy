import axios from 'axios';
import { FETCH_USER } from "./types";

export const fetchUser = () => {
        return async dispatch => {
                const res = await axios.get('/api/current_user');
                dispatch({ type: FETCH_USER, payload: res.data });
        };
};

export const handleToken = (token) => {
        return async dispatch => {
                const res = await axios.post('/api/stripe', token);
                dispatch({ type: FETCH_USER, payload: res.data });
        };
};

//does the same as the above two, but contracted syntax
export const submitSurvey = (values, history) => async dispatch => {
        const res = await axios.post('/api/surveys', values);

        history.push('/surveys');
        dispatch({ type: FETCH_USER, payload: res.data });
};