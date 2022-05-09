import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UserDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState();

  useEffect(() => {
    console.log("details++++++++", location?.state?.item);
    setUserDetails(location?.state?.item);
  }, []);

  return (
    <div className="container">
      <div className="row bg-dark mb-2 py-3">
        <div className="col-lg-2">
          <button className="btn btn-info" onClick={() => navigate("/")}>
            Back
          </button>
        </div>
        <div className="col-lg-8 text-center">
          <h3 className="text-white text-uppercase">User Details</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">First Name</th>
                <td scope="col">{userDetails?.first_name}</td>
              </tr>
              <tr>
                <th scope="col">Last Name</th>
                <td scope="col">{userDetails?.last_name}</td>
              </tr>
              <tr>
                <th scope="col">Company Name</th>
                <td scope="col">{userDetails?.company_name}</td>
              </tr>
              <tr>
                <th scope="col">City</th>
                <td scope="col">{userDetails?.city}</td>
              </tr>
              <tr>
                <th scope="col">State</th>
                <td scope="col">{userDetails?.state}</td>
              </tr>
              <tr>
                <th scope="col">Email</th>
                <td scope="col">{userDetails?.email}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
