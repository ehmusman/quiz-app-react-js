import React, { useState } from 'react'
import { connect } from 'react-redux'
import { getQuestions } from '../../actions/quizActions'
function Categories(props) {
    const [count, setCount] = useState(10);
    const [category, setCategory] = useState(9);
    const [level, setLevel] = useState('easy')
    const generateArray = () => {
        const array = [];
        for (let i = 10; i <= 50; i++) {
            array.push(i)
        }
        return array;
    }
    const categories = [
        { id: 9, category: 'general knowledge' },
        { id: 10, category: 'Entertainment books' },
        { id: 11, category: 'Entertainment film' },
        { id: 12, category: 'Entertainment music' },
        { id: 13, category: 'Entertainment Musicals' },
        { id: 14, category: 'Entertainment  televisions' },
        { id: 15, category: 'Entertainment video games' },
        { id: 16, category: 'Entertainment board games' },
        { id: 17, category: 'Science nature' },
        { id: 18, category: 'Science computer' },
        { id: 19, category: 'Science mathematics' },
        { id: 20, category: 'Mythology' },
        { id: 21, category: 'supports' },
        { id: 22, category: 'Geography' },
        { id: 23, category: 'History' },
        { id: 24, category: 'Politics' },
        { id: 25, category: 'Art' },
        { id: 26, category: 'celebrities' },
        { id: 27, category: 'animals' },
        { id: 28, category: 'vehicles' },
        { id: 29, category: 'Entertainment Comics' },
        { id: 30, category: 'Science Gadgets' },
        { id: 31, category: 'Entertainment Japanese anime manga' },
        { id: 32, category: 'Entertainment cartoons and animations' }];
    const difficulty = [
        { level: 'easy' },
        { level: 'medium' },
        { level: 'hard' }
    ]
    const totalQuestions = generateArray()

    const handleCount = (e) => {
        setCount(e.target.value)
    }
    const handleCategory = (e) => {
        setCategory(e.target.value)
    }
    const handleLevel = (e) => {
        setLevel(e.target.value)
    }
    const handleOnSubmit = () => {
        const data = { count, category, level }
        props.getQuestions(data)
        props.history.push('/');

    }
    return (
        <div className='container'>
            <div className="row">
                <div className="form-group col-md-12">
                    <label htmlFor="sel1">Select Total Questions:</label>
                    <select
                        className="form-control"
                        onChange={handleCount}
                    >
                        {totalQuestions.map(question => (
                            <option key={question} value={question}>{question}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="sel1">Select Category:</label>
                    <select
                        className="form-control"
                        onChange={handleCategory}
                    >
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.category}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="sel1">Select Difficulty Level:</label>
                    <select
                        className="form-control"
                        onChange={handleLevel}
                    >
                        {difficulty.map(diff => (
                            <option key={diff.level} value={diff.level}>{diff.level}</option>
                        ))}
                    </select>
                </div>
                <div className="form-group col-md-12">
                    <input
                        type="submit"
                        value="Select"
                        className="btn btn-outline-dark btn-block btn-lg"
                        onClick={handleOnSubmit}
                    />
                </div>
            </div>
        </div>
    )
}

export default connect(null, { getQuestions })(Categories)
