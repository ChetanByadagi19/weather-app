import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Table.css";
function UserTable() {
  const [userData, setUserData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const fetchUserData = () => {
    let url =
      "https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json";
    axios.get(url).then((response) => {
      setUserData(response.data);
    });
  };

  const handleChange = (e) => {
    setSearchText(e);
    searchFunction(e);
  };

  const searchFunction = (e) => {
    let lowerCaseValue = e.toLowerCase().trim();
    if (!lowerCaseValue) {
      fetchUserData();
    } else {
      const searchedData = userData.filter((item) => {
        return Object.keys(item).some((key) => {
          return item[key].toString().toLowerCase().includes(lowerCaseValue);
        });
      });
      setUserData([...searchedData]);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="container">
      <div className="row mt-2">
        <div className="col-lg-12 text-center bg-info py-3 ">
          <h1>User Data</h1>
        </div>
      </div>
      <div
        className="row mt-3"
        style={{ display: "flex", flexDirection: "row-reverse" }}
      >
        <div className="col-lg-4">
          <input
            value={searchText}
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-12">
          <table className="table">
            <thead className="thead-dark bg-dark text-white text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Age</th>
                <th scope="col">Email</th>
                <th scope="col">Web</th>
              </tr>
            </thead>
            <tbody>
              {userData?.map((item, index) => {
                return (
                  <tr
                    className="text-center tr-hover"
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      navigate(`/user/${item.id}`, { state: { item } })
                    }
                  >
                    <th>{item.id}</th>
                    <th>{item.first_name}</th>
                    <th>{item.last_name}</th>
                    <th>{item.age}</th>
                    <th>{item.email}</th>
                    <th>{item.web}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>{" "}
    </div>
  );
}

export default UserTable;
