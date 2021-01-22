import { GET_QUESTIONS } from "../actions/types";

const initialState = {
    questions: [ /* now im adding contact using the API */],
    questionNumber: 0,
    getAnswers: [],
    correctAnswers: 0
};

const questionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_QUESTIONS:
            return {
                ...state,
                questions: action.payload
            }
        default:
            return state
    }
}
export default questionsReducer;