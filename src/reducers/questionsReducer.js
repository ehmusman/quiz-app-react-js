import { GET_ANSWER, GET_QUESTIONS, NEXT_QUESTION, QUIZ_FINISHED } from "../actions/types";

const initialState = {
    questions: [ /* now im adding questions using the API */],
    questionNumber: 0,
    getAnswers: [],
    correctAnswers: [],
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
        case GET_ANSWER:
            let i;
            for (i = 0; i < state.questions.length; i++) {
                if (state.questions[i].question === action.payload.question) {
                    if (state.questions[i].correct_answer === action.payload.answer) {
                        return {
                            ...state,
                            correctAnswers: [action.payload, ...state.correctAnswers],
                            getAnswers: [action.payload, ...state.getAnswers]
                        }
                    }
                    else {
                        return {
                            ...state,
                            getAnswers: [action.payload, ...state.getAnswers]
                        }
                    }
                }
            }
            break;
        case QUIZ_FINISHED:
            return {
                ...state,
                questions: [],
                questionNumber: 0,
                getAnswers: [],
                correctAnswers: [],
            }

        default:
            return state
    }
}
export default questionsReducer;