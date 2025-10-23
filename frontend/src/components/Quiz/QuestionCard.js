import React from 'react';
import './Quiz.css';

export default function QuestionCard({ question, index, total, onAnswer }) {
  return (
    <div className="question-card">
      <div className="qc-top">
        <div className="qc-progress">{index + 1} / {total}</div>
        <h2 className="qc-title">{question.text}</h2>
      </div>

      {question.image && (
        <div className="qc-image-wrap">
          <img src={question.image} alt={`q-${index}`} className="qc-image" />
        </div>
      )}

      <div className="qc-choices">
        {question.choices.map((c, i) => (
          <button key={i} className="qc-choice" onClick={() => onAnswer(index, i)}>
            <div className="choice-text">{c.label}</div>
          </button>
        ))}
      </div>
    </div>
  );
}
