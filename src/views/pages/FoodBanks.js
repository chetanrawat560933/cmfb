import React, { useEffect, useState } from 'react'
import axios from "axios";
import { CButton } from '@coreui/react';

const FoodBanks = () => {
  const [foodbanks, setFoodbanks] = useState([]);
  const URL = "http://localhost:5040/cmfb/foodBank/getAllFoodBanks";

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
          setFoodbanks(data);
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
    <>
      <CButton type="submit" className="addBtn btn-dark-yellow btn btn-custom">Add</CButton>
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Address</th>
            {/* <th>Location</th> */}
          </tr>
        </thead>
        <tbody>
          {foodbanks.length !== 0 ?
            foodbanks.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.details}</td>
                {/* <td>{item.location}</td> */}
              </tr>
            )) : <p>No records found.</p>
          }
        </tbody>
      </table>
    </>
  )
}

export default FoodBanks
