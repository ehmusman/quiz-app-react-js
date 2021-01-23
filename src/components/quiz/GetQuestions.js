import React from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../../actions/quizActions'
import GetSingleQuestion from './GetSingleQuestion'
import QuestionsCount from './QuestionsCount'
import { Link } from 'react-router-dom'

function GetQuestions(props) {

    const { questions, questionNumber } = props;
    const totalQuestions = questions.length;
    const currentQuestion = questionNumber + 1;
    const remainingQuestions = totalQuestions - currentQuestion;

    return (
        <>
            {questions.length !== 0 ? (
                <div className='container'>
                    <div className="row align-items-center">
                        <QuestionsCount
                            heading='Total Questions'
                            color='bg-dark'
                            count={totalQuestions}
                        />
                        <QuestionsCount
                            heading='Question Number'
                            color='bg-success'
                            count={currentQuestion}
                        />

                        <QuestionsCount
                            heading='Remaining Question'
                            color='bg-danger'
                            count={remainingQuestions}
                        />
                    </div>
                    <GetSingleQuestion />
                </div >
            ) : (
                    <div className="container">
                        <h1 className="text-dark">Please Select the <Link to='/categories' className="display-4 text-danger">categories</Link> first</h1>
                    </div>
                )}

        </>
    )
}

const mapStateToProps = (state) => ({
    questions: state.questions.questions,
    questionNumber: state.questions.questionNumber
})
export default connect(mapStateToProps, { getQuestions })(GetQuestions)
