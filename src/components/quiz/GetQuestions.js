import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../../actions/quizActions'
import GetSingleQuestion from './GetSingleQuestion'
import QuestionsCount from './QuestionsCount'

function GetQuestions(props) {
    useEffect(() => {
        props.getQuestions()
    }, [])

    return (
        <>
            <div className="row align-items-center">
                <QuestionsCount
                    heading='Total Questions'
                    color='bg-dark'
                    count='10'
                />
                <QuestionsCount
                    heading='Question Number'
                    color='bg-success'
                    count='10'
                />

                <QuestionsCount
                    heading='Remaining Question'
                    color='bg-danger'
                    count='10'
                />
            </div>
            <GetSingleQuestion />
        </>
    )
}

export default connect(null, { getQuestions })(GetQuestions)
