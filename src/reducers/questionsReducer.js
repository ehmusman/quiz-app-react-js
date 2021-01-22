import { GET_QUESTIONS, NEXT_QUESTION } from "../actions/types";

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
        case NEXT_QUESTION:
            return {
                ...state,
                questionNumber: state.questionNumber + 1
            }
        default:
            return state
    }
}
export default questionsReducer;