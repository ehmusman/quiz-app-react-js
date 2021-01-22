import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../../actions/quizActions'

function GetQuestions(props) {
    useEffect(() => {
        props.getQuestions()
    }, [])

    return (
        <div>
            Hello
        </div>
    )
}

const mapStateToProps = (state) => ({
    questions: state.questions.questions
})

export default connect(mapStateToProps, { getQuestions })(GetQuestions)
