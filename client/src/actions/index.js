import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from "./types";

export const fetchUser = () => {
        return async dispatch => {
                const res = await axios.get('/api/current_user');
                dispatch({ type: FETCH_USER, payload: res.data });
        };
};

export const fetchSurveys = () => async dispatch => {
  const res = await axios.get('/api/surveys');

  dispatch({ type: FETCH_SURVEYS, payload: res.data });
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