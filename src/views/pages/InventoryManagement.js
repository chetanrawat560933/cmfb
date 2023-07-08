import React, { useEffect, useState } from 'react'
import json from '../../db/db.json'

const InventoryManagement = () => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {json.inventory.map((item, i) => (
          <tr key={i}>
            <td>{item.item_id}</td>
            <td>{item.item_name}</td>
            <td>{item.price}</td>
            <td>{item.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default InventoryManagement
