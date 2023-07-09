import React, { useEffect, useState } from 'react'
import json from '../../db/db.json'

const Donations = () => {
  const [data, getData] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((response) => {
        console.log(response)
        getData(response)
      })
  }

  return (
    <table className="table table-hover table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>User</th>
          <th>Amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {json.donations.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.user_name}</td>
            <td>{item.donation_amount}</td>
            <td>{item.donation_date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Donations
