import React, { useEffect, useState } from 'react'

const Feedbacks = () => {
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
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Feedbacks
