import React from 'react'
import json from '../../db/db.json'
const Users = () => {
  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {json.users.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.role}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Users
