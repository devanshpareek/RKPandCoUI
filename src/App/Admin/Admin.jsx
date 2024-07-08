import React, { useEffect, useState } from "react";
import "./Admin.css"; // Import CSS file for styling (create this file)
import { Link } from "react-router-dom";
import axios from "axios";
import useLocalStorageState from "use-local-storage-state";
import { useNavigate } from "react-router-dom";
import Modal from "../../Modal/Modal";

const Admin = ({ showModal, setShowModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useLocalStorageState(
    "isAdminLoggedIn",
    "false"
  );
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login authentication here (e.g., send data to backend)
    username === "admin123@gmail.com" &&
      password === "iamadmin" &&
      setIsAdminLoggedIn("true");
    navigate("/admin");
    alert("Hi admin, welcome!!");
    // Add your authentication logic here
  };

  const [queries, setQueries] = useState([]);

  async function getQueries() {
    if (isAdminLoggedIn === "true" || isAdminLoggedIn === true) {
      try {
        const response = await axios.get("http://localhost:8080/queries");
        console.log("Response data:", response.data);
        setQueries(response.data);
      } catch (error) {
        alert("Oops, something went wrong while fetching queries!");
      }
    }
  }

  useEffect(() => {
    getQueries();
  }, []);

  const [caAspirant, setCaAspirant] = useState([{}]);

  useEffect(() => {
    if (isAdminLoggedIn === "true" || isAdminLoggedIn === true) {
      axios
        .get("http://localhost:8080/ca-aspirant")
        .then((result) => {
          setCaAspirant(result.data);
        })
        .catch((err) => {
          alert("Oops, something went wrong!");
        });
    }
  }, []);

  const [jobSeeker, setJobSeeker] = useState([{}]);

  useEffect(() => {
    if (isAdminLoggedIn === "true" || isAdminLoggedIn === true) {
      axios
        .get("http://localhost:8080/job-seeker")
        .then((result) => {
          setJobSeeker(result.data);
        })
        .catch((err) => {
          alert("Oops, something went wrong!");
        });
    }
  }, []);

  const [professional, setProfessional] = useState([{}]);

  useEffect(() => {
    if (isAdminLoggedIn === "true" || isAdminLoggedIn === true) {
      axios
        .get("http://localhost:8080/professional")
        .then((result) => {
          setProfessional(result.data);
        })
        .catch((err) => {
          alert("Oops, something went wrong!");
        });
    }
  }, []);

  console.log(caAspirant, jobSeeker, professional);

  function handleResolve(id, key) {
    if (key === "query") {
      axios({
        method: "delete",
        url: "http://localhost:8080/query",
        data: {
          id: id,
        },
      })
        .then((result) => {
          console.log(result);
          getQueries();
        })
        .catch((err) => {
          alert("Oops, something went wrong!");
          console.log(err);
        });
    } else if (key === "ca-aspirant") {
      axios({
        method: "delete",
        url: "http://localhost:8080/ca-aspirant",
        data: {
          id: id,
        },
      })
        .then((result) => {
          setCaAspirant(result.data);
        })
        .catch((err) => {
          alert("Oops, something went wrong!");
          console.log(err);
        });
    } else if (key === "jobseeker") {
      axios({
        method: "delete",
        url: "http://localhost:8080/job-seeker",
        data: {
          id: id,
        },
      })
        .then((result) => {
          setJobSeeker(result.data);
        })
        .catch((err) => {
          alert("Oops, something went wrong!");
          console.log(err);
        });
    } else {
      axios({
        method: "delete",
        url: "http://localhost:8080/professional",
        data: {
          id: id,
        },
      })
        .then((result) => {
          setProfessional(result.data);
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

  // const [showModal, setShowModal] = useState(false);

  const [modalContent, setModalContent] = useState(<></>);

  return isAdminLoggedIn !== "true" ? (
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
        <div className="login-form-btn-wrapper">
          <button
            className="login-form-btn"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  ) : (
    <>
      {showModal && <Modal modalContent={modalContent} />}
      <div
        className={
          showModal
            ? "queries-and-applications-wrapper dull-background"
            : "queries-and-applications-wrapper"
        }
      >
        <div>
          <h2>Welcome Admin, hope you are having a good day!</h2>
          <h3>Queries List</h3>
          {queries.length === 0 && <h4>Sorry, no queries yet.</h4>}
          <div className="queries-list">
            {queries.length > 0 &&
              queries?.map((query, index) => {
                return (
                  <div className="query-item-wrapper">
                    <div className="query-item">
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
                        <b>Office Address:</b> {query.officeaddress}
                      </div>

                      <div>
                        <b>Email Address:</b> {query.emailaddress}
                      </div>

                      <div>
                        <b>Subject Matter: </b>
                        {query.attachment}
                      </div>

                      <div>
                        <b>Query Subject: </b> {query.querysubject}
                      </div>

                      <div className="button-group">
                        <button
                          className="resolve-btn"
                          onClick={() => {
                            handleResolve(query.id, "query");
                          }}
                        >
                          Resolve
                        </button>

                        <button
                          className="resolve-btn"
                          onClick={() => {
                            setShowModal(true);
                            setModalContent(
                              <div className="modal-item">
                                <div className="modal-item-line">
                                  <b>Name:</b> {query.name}
                                </div>
                                <div className="modal-item-line">
                                  <b>Designation:</b> {query.designation}
                                </div>
                                <div className="modal-item-line">
                                  <b>Organization:</b> {query.organization}
                                </div>
                                <div className="modal-item-line">
                                  <b>Office Address:</b> {query.officeaddress}
                                </div>
                                <div className="modal-item-line">
                                  <b>City:</b> {query.city}
                                </div>
                                <div className="modal-item-line">
                                  <b>Email Address:</b> {query.emailaddress}
                                </div>

                                <div className="modal-item-line">
                                  <b>Mobile No.:</b> {query.telephoneno}
                                </div>
                                <div className="modal-item-line">
                                  <b>Subject Matter:</b>
                                  {query.attachment}
                                </div>
                                <div className="modal-item-line">
                                  <b>Query Subject:</b> {query.querysubject}
                                </div>
                                <div className="modal-item-line modal-item-line--heighted">
                                  <b>Query:</b> {query.query}
                                </div>

                                <div className="button-group">
                                  {" "}
                                  <button
                                    className="resolve-btn"
                                    onClick={() => {
                                      handleResolve(query.id, "query");
                                    }}
                                  >
                                    Resolve
                                  </button>
                                  <button
                                    className="resolve-btn"
                                    onClick={() => {
                                      setShowModal(false);
                                      setModalContent(<></>);
                                    }}
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            );
                          }}
                        >
                          Detailed
                        </button>
                      </div>
                    </div>
                    {/* <div>
                      <Modal />
                    </div> */}
                  </div>
                );
              })}
          </div>
        </div>

        <div>
          <h3>CA-Aspirants</h3>
          {caAspirant.length === 0 && <h4>Sorry, no CA-Aspirants yet.</h4>}

          <div className="applications-list">
            {caAspirant.length > 0 &&
              caAspirant.map((query, index) => {
                console.log(query);
                return (
                  <div className="application-item">
                    <div>
                      <b>First Name:</b> {query.name}
                    </div>
                    <div>
                      <b>Email:</b> {query.email}
                    </div>
                    <div>
                      <b>Mobile No.:</b> {query.telephone_no}
                    </div>
                    <div>
                      <b>Education Background:</b> {query.education_background}
                    </div>

                    <div>
                      <b>Graduation:</b> {query.graduation}
                    </div>
                    <div>
                      <b>Post Graduation:</b> {query.post_graduation}
                    </div>
                    <div className="button-group">
                      <button
                        className="resolve-btn"
                        onClick={() => {
                          handleResolve(query.id, "ca-aspirant");
                        }}
                      >
                        Resolve
                      </button>
                      <button
                        className="resolve-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalContent(
                            <>
                              {" "}
                              <div className="modal-item">
                                <div className="modal-item-line">
                                  <b>First Name:</b> {query.name}
                                </div>
                                <div className="modal-item-line">
                                  <b>Email:</b> {query.email}
                                </div>
                                <div className="modal-item-line">
                                  <b>Mobile No.:</b> {query.telephone_no}
                                </div>
                                <div className="modal-item-line">
                                  <b>Education Background:</b>{" "}
                                  {query.education_background}
                                </div>

                                <div className="modal-item-line">
                                  <b>Tenth Score:</b> {query.tenth_score}
                                </div>

                                <div className="modal-item-line">
                                  <b>Twelth Score:</b> {query.twelth_score}
                                </div>

                                <div className="modal-item-line">
                                  <b>CPT Score:</b> {query.cpt_score}
                                </div>

                                <div className="modal-item-line">
                                  <b>PCE Score:</b> {query.pce_score}
                                </div>
                                <div className="modal-item-line">
                                  <b>Graduation:</b> {query.graduation}
                                </div>
                                <div className="modal-item-line">
                                  <b>Post Graduation:</b>{" "}
                                  {query.post_graduation}
                                </div>

                                <div className="modal-item-line ">
                                  <div>
                                    <b>About You:</b>
                                  </div>
                                  <div className="modal-item-line--heighted">
                                    {query.about_you}
                                  </div>
                                </div>
                                <div className="modal-item-line">
                                  <b>Resume: </b>
                                  <a
                                    href={query.attachment}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    // onClick={() => {
                                    //   openImageInNewTab(query.attachment);
                                    // }}
                                  >
                                    Click here
                                  </a>
                                </div>
                                <div className="button-group">
                                  <button
                                    className="resolve-btn"
                                    onClick={() => {
                                      handleResolve(query.id, "ca-aspirant");
                                    }}
                                  >
                                    Resolve
                                  </button>
                                  <button
                                    className="resolve-btn"
                                    onClick={() => {
                                      setShowModal(false);
                                      setModalContent(<></>);
                                    }}
                                  >
                                    Close
                                  </button>
                                </div>
                              </div>
                            </>
                          );
                        }}
                      >
                        Detailed
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div>
          <h3>Job-Seeker</h3>
          {jobSeeker.length === 0 && <h4>Sorry, no Job-Seeker yet.</h4>}

          <div className="applications-list">
            {jobSeeker.length > 0 &&
              jobSeeker.map((query, index) => {
                console.log(query);
                return (
                  <div className="application-item">
                    <div>
                      <b>First Name:</b> {query.name}
                    </div>
                    <div>
                      <b>Email:</b> {query.email}
                    </div>
                    <div>
                      <b>Mobile No.:</b> {query.telephone_no}
                    </div>

                    <div>
                      <b>Graduation:</b> {query.graduation}
                    </div>
                    <div>
                      <b>Post Graduation:</b> {query.post_graduation}
                    </div>
                    <div>
                      <b>Experience:</b> {query.experience}
                    </div>

                    <div className="button-group">
                      <button
                        className="resolve-btn"
                        onClick={() => {
                          handleResolve(query.id, "jobseeker");
                        }}
                      >
                        Resolve
                      </button>
                      <button
                        className="resolve-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalContent(
                            <div className="modal-item">
                              <div className="modal-item-line">
                                <b>First Name:</b> {query.name}
                              </div>
                              <div className="modal-item-line">
                                <b>Email:</b> {query.email}
                              </div>
                              <div className="modal-item-line">
                                <b>Mobile No.:</b> {query.telephone_no}
                              </div>
                              <div className="modal-item-line">
                                <b>Gender:</b> {query.education_background}
                              </div>

                              <div className="modal-item-line">
                                <b>PCE Score:</b> {query.pce_score}
                              </div>
                              <div className="modal-item-line">
                                <b>Graduation:</b> {query.graduation}
                              </div>
                              <div className="modal-item-line">
                                <b>Post Graduation:</b> {query.post_graduation}
                              </div>
                              <div className="modal-item-line">
                                <b>Experience:</b> {query.experience}
                              </div>
                              <div className="modal-item-line modal-item-line--heighted">
                                <b>About You:</b> {query.about_you}
                              </div>
                              <div className="modal-item-line">
                                <b>Resume: </b>
                                <a
                                  href={query.attachment}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  // onClick={() => {
                                  //   openImageInNewTab(query.attachment);
                                  // }}
                                >
                                  Click here
                                </a>
                              </div>
                              <div className="button-group">
                                <button
                                  className="resolve-btn"
                                  onClick={() => {
                                    handleResolve(query.id, "jobseeker");
                                  }}
                                >
                                  Resolve
                                </button>
                                <button
                                  className="resolve-btn"
                                  onClick={() => {
                                    setShowModal(false);
                                    setModalContent(<></>);
                                  }}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          );
                        }}
                      >
                        Detailed
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div>
          <h3>Professional</h3>
          {professional.length === 0 && <h4>Sorry, no Professional yet.</h4>}

          <div className="applications-list">
            {" "}
            {professional.length > 0 &&
              professional.map((query, index) => {
                return (
                  <div className="application-item">
                    <div>
                      <b>First Name:</b> {query.name}
                    </div>
                    <div>
                      <b>Email:</b> {query.email}
                    </div>
                    <div>
                      <b>Mobile No.:</b> {query.telephone_no}
                    </div>
                    <div>
                      <b>Experience:</b> {query.experience}
                    </div>

                    <div className="button-group">
                      <button
                        className="resolve-btn"
                        onClick={() => {
                          handleResolve(query.id, "professional");
                        }}
                      >
                        Resolve
                      </button>
                      <button
                        className="resolve-btn"
                        onClick={() => {
                          setShowModal(true);
                          setModalContent(
                            <div className="modal-item">
                              <div className="modal-item-line">
                                <b>First Name:</b> {query.name}
                              </div>
                              <div className="modal-item-line">
                                <b>Email:</b> {query.email}
                              </div>
                              <div className="modal-item-line">
                                <b>Mobile No.:</b> {query.telephone_no}
                              </div>

                              <div className="modal-item-line">
                                <b>CPT Score:</b> {query.cpt_score}
                              </div>
                              <div className="modal-item-line">
                                <b>PCE Score:</b> {query.pce_score}
                              </div>
                              <div className="modal-item-line">
                                <b>Final Score:</b> {query.final_score}
                              </div>
                              <div className="modal-item-line">
                                <b>Experience:</b> {query.experience}
                              </div>
                              <div className="modal-item-line modal-item-line--heighted">
                                <b>About You:</b> {query.about_you}
                              </div>
                              <div className="modal-item-line">
                                <b>Resume: </b>
                                <a
                                  href={query.attachment}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => {
                                    openImageInNewTab(query.attachment);
                                  }}
                                >
                                  Click here
                                </a>
                              </div>
                              <div className="button-group">
                                <button
                                  className="resolve-btn"
                                  onClick={() => {
                                    handleResolve(query.id, "professional");
                                  }}
                                >
                                  Resolve
                                </button>
                                <button
                                  className="resolve-btn"
                                  onClick={() => {
                                    setShowModal(false);
                                    setModalContent(<></>);
                                  }}
                                >
                                  Close
                                </button>
                              </div>
                            </div>
                          );
                        }}
                      >
                        Detailed
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
