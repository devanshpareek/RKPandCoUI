import React, { useEffect, useState } from "react";
import "./Admin.css"; // Import CSS file for styling (create this file)
import { Link } from "react-router-dom";
import axios from "axios";

const Admin = (isAdminLoggedIn) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication here (e.g., send data to backend)
    if (username === "iamadmin" && password === "iwanttologin") {
      isAdminLoggedIn.setIsAdminLoggedIn(true);
    }
    alert("Hi admin, welcome!!");
    // Add your authentication logic here
  };

  const [queries, setQueries] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/queries")
      .then((result) => {
        setQueries(result.data);
      })
      .catch((err) => {
        alert("Oops, something went wrong!");
        console.log(err);
      });
  }, []);

  const [applications, setApplications] = useState([{}]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/career-applications")
      .then((result) => {
        setApplications(result.data);
      })
      .catch((err) => {
        alert("Oops, something went wrong!");
      });
  }, []);

  function handleResolve(id, isQuery) {
    if (isQuery) {
      axios({
        method: "delete",
        url: "http://localhost:8080/query",
        data: {
          id: id,
        },
      })
        .then((result) => {
          setQueries(result.data);
        })
        .catch((err) => {
          alert("Oops, something went wrong!");
          console.log(err);
        });
    } else {
      axios({
        method: "delete",
        url: "http://localhost:8080/career-applications",
        data: {
          id: id,
        },
      })
        .then((result) => {
          setApplications(result.data);
        })
        .catch((err) => {
          alert("Oops, something went wrong!");
          console.log(err);
        });
    }
  }

  const openImageInNewTab = (imageUrl) => {
    window.open(imageUrl, "_blank");
  };

  return !isAdminLoggedIn.isAdminLoggedIn ? (
    <div id="admin" className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  ) : (
    <div className="queries-and-applications-wrapper">
      <div>
        <h2>Welcome Admin, hope you are having a good day!</h2>
        <h3>Queries List</h3>
        {queries.length === 0 && <h4>Sorry, no queries yet.</h4>}
        <div className="queries-list">
          {queries.map((query, index) => {
            return (
              <div className="query-item">
                <div>
                  <b>Application Number:</b>{" "}
                  {query._id.length > 10 ? query._id?.slice(0, 10) : query._id}
                  ...
                </div>
                <div>
                  <b>Name:</b> {query.name}
                </div>
                <div>
                  <b>Designation:</b> {query.designation}
                </div>
                <div>
                  <b>Organization:</b> {query.organization}
                </div>
                <div>
                  <b>Office Address:</b> {query.officeAddress}
                </div>
                <div>
                  <b>City:</b> {query.city}
                </div>
                <div>
                  <b>Email Address:</b> {query.emailAddress}
                </div>
                <div>
                  <b>Telephone No.:</b> {query.telephoneNo}
                </div>
                <div>
                  <b>Mobile No.:</b> {query.mobileNo}
                </div>
                <div>
                  <b>Professional Updates:</b> {query.professionalUpdates}
                </div>
                <div>
                  <b>Query Subject:</b> {query.querySubject}
                </div>
                <div>
                  <b>Query:</b> {query.query}
                </div>
                <button
                  className="resolve-btn"
                  onClick={() => {
                    handleResolve(query._id, true);
                  }}
                >
                  Resolve
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3>Applications List</h3>
        {applications.length === 0 && <h4>Sorry, no applications yet.</h4>}

        <div className="applications-list">
          {" "}
          {applications.map((query, index) => {
            return (
              <div className="application-item">
                <div>
                  <b>Application Number:</b> {query._id.slice(0, 10)}...
                </div>
                <div>
                  <b>First Name:</b> {query.firstName}
                </div>
                <div>
                  <b>Last Name:</b> {query.lastName}
                </div>
                <div>
                  <b>Email:</b> {query.email}
                </div>
                <div>
                  <b>Mobile No.:</b> {query.mobileNumber}
                </div>
                <div>
                  <b>Gender:</b> {query.gender}
                </div>
                <div>
                  <b>Position:</b> {query.position}
                </div>
                <div>
                  <b>Date Of Birth:</b> {query.dob}
                </div>
                <div>
                  <b>Highest Qualification:</b> {query.highestQualification}
                </div>
                <div>
                  <b>Resume: </b>
                  <a
                    href={query.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      openImageInNewTab(query.resume);
                    }}
                  >
                    Click here
                  </a>
                </div>
                <div>
                  <b>Last Working Company:</b> {query.lastWorkedCompany}
                </div>
                <div>
                  <b>Experience Years:</b> {query.experienceYears}
                </div>
                <div>
                  <b>Experience Months:</b> {query.experienceMonths}
                </div>
                <button
                  className="resolve-btn"
                  onClick={() => {
                    handleResolve(query._id, false);
                  }}
                >
                  Resolve
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Admin;
