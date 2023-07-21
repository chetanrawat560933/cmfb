import React, { useEffect, useState } from "react";
import axios from "axios";

const Donations = () => {
  const [donations, setDonations] = useState([]);
  const URL = "http://localhost:5040/cmfb/donation/getAllDonations";

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
          setDonations(data);
          console.log(data);
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
  );
};
export default Donations;
