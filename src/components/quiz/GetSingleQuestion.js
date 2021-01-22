import React from 'react'
import { connect } from 'react-redux'
import SortedAnswers from './SortedAnswers'


function GetSingleQuestion(props) {
    const getQuestion = props.questions[props.questionNumber]
    return (
        <div className='card bg-light text-dark mb-3'>
            {props.questions.length ? (
                <SortedAnswers
                    question={getQuestion.question}
                    answers={[getQuestion.correct_answer, ...getQuestion.incorrect_answers].sort(() => .5 - Math.random())}
                />

            ) : null}
        </div>
    )
}

const mapStateToProps = (state) => ({
    questions: state.questions.questions,
    questionNumber: state.questions.questionNumber
})
export default connect(mapStateToProps)(GetSingleQuestion)
