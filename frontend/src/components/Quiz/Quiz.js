import React, { useState } from 'react';
import './Quiz.css';
import questions from './questions';
import QuestionCard from './QuestionCard';
import Result from './Result';

export default function Quiz() {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));
    const [current, setCurrent] = useState(0);
    const [finished, setFinished] = useState(false);

    const handleAnswer = (idx, value) => {
        const copy = [...answers];
        copy[idx] = value;
        setAnswers(copy);
        if (idx + 1 < questions.length) {
            setTimeout(() => setCurrent(idx + 1), 180);
        } else {
            setTimeout(() => setFinished(true), 220);
        }
    };

    const goBack = () => setCurrent(Math.max(0, current - 1));
    const goNext = () => setCurrent(Math.min(questions.length - 1, current + 1));
    const restart = () => {
        setAnswers(Array(questions.length).fill(null));
        setCurrent(0);
        setFinished(false);
    };

    if (finished) {
        return <Result answers={answers} onRestart={restart} />;
    }

    return (
        <div className="quiz-root">
            <div className="quiz-card">
                <div className="quiz-header">
                    <div>
                        <div className="quiz-title">Personality Quiz</div>
                      
                    </div>
                    <div className="qc-progress">Question {current + 1} / {questions.length}</div>
                </div>

                <QuestionCard question={questions[current]} index={current} total={questions.length} onAnswer={handleAnswer} />

                <div className="quiz-footer">
                    <div className="quiz-progress-bar">
                        <div className="quiz-progress" style={{ width: `${((current) / (questions.length - 1)) * 100}%` }} />
                    </div>
                    <div className="quiz-controls">
                        <button onClick={goBack} disabled={current === 0}>Back</button>
                        <button onClick={goNext} disabled={current === questions.length - 1}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

