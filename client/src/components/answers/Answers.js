import React from 'react';
import "./Answers.css";

const Answers = ({ answers, handleAnswers }) => {
    return <div className="answers">
        <div className="answers-container">
            <div className="upper-two">
                <button className="btn"
                    onClick={handleAnswers}>
                    {answers[0]}
                </button>
                <button className="btn"
                    onClick={handleAnswers}>
                    {answers[1]}
                </button>
            </div>
            <div className="lower-two">

                <button className="btn"
                    onClick={handleAnswers}>
                    {answers[2]}
                </button>
                <button className="btn"
                    onClick={handleAnswers}>
                    {answers[3]}
                </button>
            </div>
        </div>
    </div>;
};

export default Answers;
