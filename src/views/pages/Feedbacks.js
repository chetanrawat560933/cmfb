import React, { useEffect, useState } from 'react'
import json from '../../db/db.json'

const Feedbacks = () => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>User</th>
          <th>Date</th>
          <th>Feedback</th>
        </tr>
      </thead>
      <tbody>
        {json.feedbacks.map((item, i) => (
          <tr key={i}>
            <td>{item.user_name}</td>
            <td>{item.feedback_date}</td>
            <td>{item.feedback_message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Feedbacks
