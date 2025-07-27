import React, { useState } from 'react';

function DepositForm({ goals, onDeposit }) {
  const [amount, setAmount] = useState('');
  const [goalId, setGoalId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!goalId) return alert('Select a goal');
    onDeposit(goalId, Number(amount));
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" required />
      <select value={goalId} onChange={(e) => setGoalId(e.target.value)} required>
        <option value="">Choose Goal</option>
        {goals.map(goal => (
          <option key={goal.id} value={goal.id}>{goal.name}</option>
        ))}
      </select>
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
