import React, { useEffect, useState } from 'react'
import json from '../../db/db.json'

const FoodBanks = () => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Address</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {json.foodBanks.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.address}</td>
            <td>{item.location}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default FoodBanks
