import React, { useState, useEffect } from 'react';
import GoalList from './components/GoalList';
import AddGoalForm from './components/AddGoalForm';
import DepositForm from './components/DepositForm';
import Overview from './components/Overview';

function App() {
  const [goals, setGoals] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedGoals = JSON.parse(localStorage.getItem('goals')) || [];
    setGoals(savedGoals);
  }, []);

  // Save to localStorage whenever goals change
  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const addGoal = (goal) => {
    const newGoal = { id: Date.now().toString(), ...goal };
    setGoals([...goals, newGoal]);
  };

  const depositToGoal = (goalId, amount) => {
    setGoals(goals.map(goal =>
      goal.id === goalId
        ? { ...goal, savedAmount: goal.savedAmount + amount }
        : goal
    ));
  };

  const deleteGoal = (id) => {
    setGoals(goals.filter(goal => goal.id !== id));
  };

  return (
    <div className="app">
      <h1>Smart Goal Planner </h1>
      <Overview goals={goals} />
      <GoalList goals={goals} onDelete={deleteGoal} />
      <AddGoalForm onAdd={addGoal} />
      <DepositForm goals={goals} onDeposit={depositToGoal} />
    </div>
  );
}

export default App;
