import React from 'react';

function GoalList({ goals, onDelete }) {
  return (
    <div>
      <h2>Your Goals</h2>
      <div className="goal-list">
        {goals.map(goal => {
          const progress = ((goal.savedAmount / goal.targetAmount) * 100).toFixed(1);
          const deadline = new Date(goal.deadline);
          const now = new Date();
          let status = '';

          if (goal.savedAmount >= goal.targetAmount) {
            status = 'Completed';
          } else if (deadline < now) {
            status = ' Overdue';
          } else if ((deadline - now) / (1000 * 60 * 60 * 24) <= 30) {
            status = ' Deadline Soon';
          }

          return (
            <div key={goal.id} className="goal-card">
              <h3>{goal.name}</h3>
              <p>Category: {goal.category}</p>
              <p>Saved: ${goal.savedAmount} / ${goal.targetAmount}</p>
              <div className="progress-bar">
                <div style={{ width: `${progress}%` }}></div>
              </div>
              <p>Status: {status}</p>
              <button onClick={() => onDelete(goal.id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GoalList;
