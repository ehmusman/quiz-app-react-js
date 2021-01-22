import axios from 'axios';
import { GET_QUESTIONS, NEXT_QUESTION } from './types';

export const getQuestions = () => async dispatch => {
    const res = await axios.get('https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple')
    dispatch({
        type: GET_QUESTIONS,
        payload: res.data.results
    })
};
export const getNextQuestion = () => {
    return ({
        type: NEXT_QUESTION,
    })
};
