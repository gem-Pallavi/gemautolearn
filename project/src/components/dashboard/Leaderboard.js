import React from 'react';
import tableData from './tableData'; 

export default function Leaderboard() {
  return (
    <div>
      <table className="table table-hover leaderboard-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Attempted Questions</th>
            <th>Total Attempts</th>
            <th>Proficiency</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.attemptedQuestions}</td>
              <td>{item.totalAttempts}</td>
              <td>{item.proficiency}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

