import React, { useEffect, useState } from 'react'
import axios from "axios";

const InventoryManagement = () => {
  const [inventoryData, setInventoryData] = useState([]);
  const URL = "http://localhost:5040/cmfb/inventory/getAllInventory";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      axios
        .get(URL)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          console.log(data);
          setInventoryData(data);
        })
        .catch((error) => {
          console.log(error.response.data.error);
        });
    } catch (error) {
      console.log(error.response);
      return error.response;
    }
  };

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
        {inventoryData.length !== 0 ?
          inventoryData.map((item, i) => (
            <tr key={i}>
              <td>{item.item_id}</td>
              <td>{item.item_name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
            </tr>
          )) : <p>No records found.</p>
        }
      </tbody>
    </table>
  )
}

export default InventoryManagement
