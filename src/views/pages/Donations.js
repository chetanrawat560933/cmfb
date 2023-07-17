import React, { useEffect, useState } from 'react'
// import json from '../../db/db.json'
import axios from 'axios'

const Donations = () => {
  const [donations, setDonations] = useState([])
  const URL = 'http://localhost:5040/cmfb/donation/getAllDonations'

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    axios
      .get(URL)
      .then((response) => {
        return response.data
      })
      .then((data) => {
        setDonations(data)
        console.log(data)
      })
      .catch((error) => {
        console.log(error.response.data.error)
      })
    try {
      // let res = await axios({
      //   method: 'get',
      //   url: URL,
      // })
      // let data = res.data
      // console.log(data)
      // return data
    } catch (error) {
      console.log(error.response) // this is the main part. Use the response property from the error object
      return error.response
    }
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
        {donations.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.user_name}</td>
            <td>{item.donation_amount}</td>
            <td>{item.donation_datetime}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
export default Donations
