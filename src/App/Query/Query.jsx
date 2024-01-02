import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Query.css"; // Your CSS file for styling

const Query = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    organization: "",
    officeAddress: "",
    city: "",
    emailAddress: "",
    telephoneNo: "",
    mobileNumber: "",
    professionalUpdates: "No",
    querySubject: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/query", formData)
      .then((result) => {
        console.log(result);
        alert(
          "Query raised successfully, we will get back to you soon.Thank you!"
        );
      })
      .catch((err) => {
        alert("Oops, something went wrong!");
        console.log(err);
      });
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

  return (
    <div id="query" className="form-wrapper">
      <span className="form-title">Query Sheet</span>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">
              Name:<span className="aestric">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="designation">
              Designation:<span className="aestric">*</span>
            </label>
            <input
              type="text"
              id="designation"
              name="designation"
              required
              value={formData.designation}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Organization:<span className="aestric">*</span>
            </label>
            <input
              type="text"
              id="organization"
              name="organization"
              required
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Office Address:<span className="aestric">*</span>
            </label>
            <input
              type="text"
              id="officeAddress"
              name="officeAddress"
              required
              value={formData.officeAddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              City:<span className="aestric">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Email Address:<span className="aestric">*</span>
            </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              required
              value={formData.emailAddress}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Telephone no.:<span className="aestric">*</span>
            </label>
            <input
              type="text"
              id="telephoneNo"
              name="telephoneNo"
              value={formData.telephoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">
              Mobile Number:<span className="aestric">*</span>
            </label>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              required
              value={formData.mobileNumber}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="professionalUpdates">
              Other Professional Updates:
            </label>
            <div className="radio-buttons">
              <label>
                <input
                  type="radio"
                  name="professionalUpdates"
                  value="Yes"
                  checked={formData.professionalUpdates === "Yes"}
                  onChange={handleChange}
                />{" "}
                <p>Yes</p>
              </label>
              <label>
                <input
                  type="radio"
                  name="professionalUpdates"
                  value="No"
                  checked={formData.professionalUpdates === "No"}
                  onChange={handleChange}
                />{" "}
                <p>No</p>
              </label>
            </div>
          </div>

          {/* Add pairs of fields accordingly */}

          <div className="form-group">
            <label htmlFor="querySubject">
              Subject of Query:<span className="aestric">*</span>
            </label>
            <select
              id="querySubject"
              name="querySubject"
              value={formData.querySubject}
              onChange={handleChange}
              required
            >
              {/* Options for the dropdown */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="query">
              Query:<span className="aestric">*</span>
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </form>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Query;
