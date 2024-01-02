import React, { useEffect, useState } from "react";
import "./Career.css"; // Your CSS file for styling
import axios from "axios";

const Career = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    gender: "",
    position: "",
    dob: "",
    highestQualification: "",
    resume: "No",
    lastWorkedCompany: "",
    experienceYears: "",
    experienceMonths: "",
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
      .post("http://localhost:8080/career", formData)
      .then((result) => {
        console.log(result);
        alert(
          "Application Submitted Successfully, we will get back to you soon.Thank you!"
        );
      })
      .catch((err) => {
        alert("Oops, something went wrong!");
        console.log(err);
      });
  };

  function toDataURL(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setFormData({
        ...formData,
        resume: reader.result,
      });
    };
    reader.onerror = error => {
      alert('Oops, something went wrong!')
    }
  }

  return (
    <div id="career" className="form-wrapper">
      <span className="form-title">Apply Here</span>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">First Name:<span className="aestric">*</span></label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="designation">Last Name:<span className="aestric">*</span></label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Email:<span className="aestric">*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Mobile Number:<span className="aestric">*</span></label>
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
            <label htmlFor="name">Gender:<span className="aestric">*</span></label>
            <input
              type="text"
              id="gender"
              name="gender"
              required
              value={formData.gender}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Position you are applying for:<span className="aestric">*</span></label>
            <select
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              required
            >
              {/* Options for the dropdown */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="name">Date Of Birth:<span className="aestric">*</span></label>
            <input
              type="text"
              id="telephoneNo"
              name="telephoneNo"
              value={formData.telephoneNo}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Highest Qualification:<span className="aestric">*</span></label>
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
            <label htmlFor="professionalUpdates">Resume:<span className="aestric">*</span></label>
            <input
              type="file"
              accept="image/*"
              id="resume"
              name="resume"
              required
              onChange={toDataURL}
            />
          </div>

          <div className="form-group">
            <label htmlFor="professionalUpdates">
              Last Company you worked for:<span className="aestric">*</span>
            </label>
            <input
              type="text"
              id="lastWorkedCompany"
              name="lastWorkedCompany"
              required
              value={formData.lastWorkedCompany}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="professionalUpdates">Years Of Experience:<span className="aestric">*</span></label>
            <input
              type="text"
              id="experienceYears"
              name="experienceYears"
              required
              value={formData.experienceYears}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="professionalUpdates">Months Of Experience:<span className="aestric">*</span></label>
            <input
              type="text"
              id="experienceMonths"
              name="experienceMonths"
              required
              value={formData.experienceMonths}
              onChange={handleChange}
            />
          </div>

          {/* Add pairs of fields accordingly */}
        </form>
        <button type="submit" onClick={handleSubmit}>
          Apply
        </button>
      </div>
    </div>
  );
};

export default Career;
