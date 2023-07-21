import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        await axios
          .get('http://localhost:5040/cmfb/user/getAllUsers', {
            timeout: 5000,
          })
          .then((response) => {
            console.log('check response' + response.data[0].role)
            setUsers(response.data)
          })
        // console.log(response + 'Piyush')
        // setUsers(response.data)
        // console.log('almost complete func' + response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchUsers()
  }, [])

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
        {users.map((item, i) => {
          return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.role ? item.role : 'N/A'}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.address}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default Users
