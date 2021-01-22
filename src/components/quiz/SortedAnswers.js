import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getNextQuestion } from '../../actions/quizActions'

function SortedAnswers(props) {
    const [selectAnswer, setSelectAnswer] = useState('')
    const [nextQuestion, setNextQuestion] = useState(false)
    const { question, answers } = props

    const selectedAnswer = (e) => {
        setSelectAnswer(e.target.value)
    }
    const handleNextQuestion = () => {
        if (selectAnswer !== '') {
            props.getNextQuestion()
        } else {
            alert('Kindly Select one option')
        }

    }
    console.log(selectAnswer)
    console.log(props.questionNumber)
    console.log(props.questions.length)
    return (
        <>
            <div className="card-header">Multiple Choice Questions</div>
            <div className="card-body">
                <h4 className="card-title">{question}</h4>
                <div
                    className="form-check list-group">
                    {answers.map(ans => (
                        <label
                            key={ans}
                            className="form-check-label list-group-item">
                            <input
                                type="radio" className="form-check-input"
                                value={ans}
                                name='answer'
                                onClick={selectedAnswer}
                            />
                            {ans}
                        </label>
                    ))}
                </div>
                <input
                    type="submit"
                    value="Next Question"
                    className="btn btn-outline-dark btn-lg btn-block mt-3"
                    onClick={handleNextQuestion}
                />
            </div>
        </>

    )
}

const mapStateToProps = (state) => ({
    questionNumber: state.questions.questionNumber,
    questions: state.questions.questions
})
export default connect(mapStateToProps, { getNextQuestion })(SortedAnswers)
