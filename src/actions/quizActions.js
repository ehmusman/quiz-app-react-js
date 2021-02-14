import axios from 'axios';
import { GET_ANSWER, GET_QUESTIONS, NEXT_QUESTION, QUIZ_FINISHED } from './types';

export const getQuestions = (data) => {
    return async dispatch => {

        const res = await axios.get(`https://opentdb.com/api.php?amount=${data.count}&category=${data.category}&difficulty=${data.level}&type=multiple`)
        dispatch({
            type: GET_QUESTIONS,
            payload: res.data.results
        })
    };
}


export const getNextQuestion = () => {
    return ({
        type: NEXT_QUESTION,
    })
};
export const getAnswer = (data) => {
    return ({
        type: GET_ANSWER,
        payload: data
    })
};

export const quizFinish = () => {
    return ({
        type: QUIZ_FINISHED
    })
}