import React, { useState } from 'react'
import './InputForm.css'

function InputForm(props) {

    const initialValues = {
        currentSavings: 0,
        yearlySavings: 0,
        expectedInterest: 0,
        investmentDuration: 0
    }

    const [userInput, setUserInput] = useState(initialValues)

    const inputChangeHandler = (e) => {
        const { value, id } = e.target
        setUserInput((previousState) => {
            return {
                ...previousState,
                [id]: +value
            }
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        props.onCalculateHandler(userInput)
    }

    const resetHandler = (e) => {
        setUserInput(initialValues)
    }

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div className="input-group">
                    <p>
                        <label htmlFor="current-savings">Current Savings ($)</label>
                        <input type="number" id="currentSavings" onChange={inputChangeHandler} value={userInput.currentSavings} />
                    </p>
                    <p>
                        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                        <input type="number" id="yearlySavings" onChange={inputChangeHandler} value={userInput.yearlySavings} />
                    </p>
                </div>
                <div className="input-group">
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input type="number" id="expectedInterest" onChange={inputChangeHandler} value={userInput.expectedInterest} />
                    </p>
                    <p>
                        <label htmlFor="duration">Investment Duration (years)</label>
                        <input type="number" id="investmentDuration" onChange={inputChangeHandler} value={userInput.investmentDuration} />
                    </p>
                </div>
                <p className="actions">
                    <button type="reset" className="buttonAlt" onClick={resetHandler}>
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    )
}

export default InputForm