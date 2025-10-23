import React, { useState } from 'react';
import './Quiz.css';
import { questions, personalityTraits } from './questions';

/**
 * Count how many times each trait was selected.
 * Assumption: `answers` is an array where each element is either the
 * selected choice index (0-based) or the choice.value number. The code
 * attempts to resolve both.
 */
function countTraitSelections(answers) {
  const counts = {};
  Object.keys(personalityTraits).forEach((t) => { counts[t] = 0; });

  let totalSelections = 0;

  if (!Array.isArray(answers)) {
    return { counts, entries: [], totalSelections: 0 };
  }

  // We'll also collect which choices contributed to each trait for verification
  const contributions = {};
  Object.keys(personalityTraits).forEach((t) => { contributions[t] = []; });

  answers.forEach((ans, idx) => {
    if (ans === null || ans === undefined) return;
    const q = questions[idx];
    if (!q || !Array.isArray(q.choices)) return;

    let choice = null;
    // ans could be an index (0-based)
    if (typeof ans === 'number') {
      if (ans >= 0 && ans < q.choices.length) {
        choice = q.choices[ans];
      } else {
        // fallback: find by value field (many quizzes use 1-based values)
        choice = q.choices.find((c) => c.value === ans);
      }
    }

    if (!choice) return;

    if (choice.traits && typeof choice.traits === 'object') {
      Object.keys(choice.traits).forEach((traitKey) => {
        if (!(traitKey in counts)) counts[traitKey] = 0; // tolerate extra keys
        counts[traitKey] += 1; // count occurrence
        contributions[traitKey] = contributions[traitKey] || [];
        contributions[traitKey].push({
          questionIndex: idx + 1,
          questionText: q.text,
          choiceLabel: choice.label
        });
      });
    }

    totalSelections += 1;
  });

  const entries = Object.entries(counts).map(([trait, count]) => ({ trait, count, items: contributions[trait] || [] }));
  entries.sort((a, b) => b.count - a.count);

  return { counts, entries, totalSelections };
}

export default function Result({ answers, onRestart }){
  const { counts, entries, totalSelections } = countTraitSelections(answers);
  const topTwo = entries.slice(0, 2);

  function parseTraitName(name) {
    if (!name) return { title: name, desc: '' };
    const parts = name.split(';').map(p => p.trim());
    return { title: parts[0] || '', desc: parts[1] || '' };
  }

  return (
    <div className="result-root">
      <h2 className="result-title">Таны хувь хүний шинж чанар</h2>

      <div className="top-traits">
    
        {topTwo.map(({ trait, count }, idx) => {
          const traitInfo = personalityTraits[trait] || {};
          const { title } = parseTraitName(traitInfo.name);
          // We'll render a TopTraitCard which manages its own expanded state
          return (
            <TopTraitCard
              key={trait}
              traitKey={trait}
              index={idx}
              traitInfo={traitInfo}
              title={title}
              count={count}
              totalSelections={totalSelections}
            />
          );
        })}
      </div>
   

      <div className="result-actions">
        <button onClick={onRestart} className="btn-restart">
          Дахин эхлэх
        </button>
      </div>
    </div>
  );
}

function TopTraitCard({ traitKey, index, traitInfo, title, count, totalSelections }){
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={`top-trait top-trait-${index+1}`}>
      <div className="trait-header">
        <span className="trait-emoji">{traitInfo.emoji}</span>
        <div>
          <div className="trait-title">{title}</div>
          {traitInfo.description && (
            <div className={`trait-desc ${expanded ? 'expanded' : 'collapsed'}`}>
              {expanded ? traitInfo.description : (traitInfo.description.slice(0, 120) + (traitInfo.description.length > 120 ? '...' : ''))}
            </div>
          )}
        </div>
      </div>
   
 
    </div>
  );
}
