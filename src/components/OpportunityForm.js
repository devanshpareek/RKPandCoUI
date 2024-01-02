import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Images/query.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";

export const OpportunityForm = (props) => {
  const formInitialDetails = {
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
    attachment: "",
    query: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = axios
      .post("http://localhost:8080/query", formDetails)
      .then((result) => {
        console.log(result);
        setStatus({ succes: true, message: "Query sent successfully" });

        alert(
          "Query raised successfully, we will get back to you soon.Thank you!"
        );
      })
      .catch((err) => {
        setStatus({
          succes: false,
          message: "Something went wrong, please try again later.",
        });
        alert("Oops, something went wrong!");
        console.log(err);
      });
    setButtonText("Send");
    let result = await response;
    console.log(result);

    setFormDetails(formInitialDetails);
    // if (result.code == 200) {
    //   setStatus({ succes: true, message: "Message sent successfully" });
    // } else {
    //   setStatus({
    //     succes: false,
    //     message: "Something went wrong, please try again later.",
    //   });
    // }
  };

  function toDataURL(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setFormDetails({
        ...formDetails,
        attachment: reader.result,
      });
    };
    reader.onerror = (error) => {
      alert("Oops, something went wrong!");
    };
  }

  return (
    <section className="opportunity-form" id="query" style={{
      ...(props.withoutBackground && {backgroundColor:'transparent'})
    }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.name}
                          placeholder="Name"
                          onChange={(e) => onFormUpdate("name", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Contact No."
                          onChange={(e) =>
                            onFormUpdate("telephoneNo", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.designation}
                          placeholder="Designation"
                          onChange={(e) =>
                            onFormUpdate("designation", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.organization}
                          placeholder="Organization"
                          onChange={(e) =>
                            onFormUpdate("organization", e.target.value)
                          }
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.officeAddress}
                          placeholder="Office Address"
                          onChange={(e) =>
                            onFormUpdate("officeAddress", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.city}
                          placeholder="City"
                          onChange={(e) => onFormUpdate("city", e.target.value)}
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email"
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} className="px-1">
                        {/* <input
                          type="text"
                          value={formDetails.querySubject}
                          placeholder="Query Subject"
                          onChange={(e) =>
                            onFormUpdate("querySubject", e.target.value)
                          }
                        /> */}

                        <select
                          id="querySubject2"
                          name="querySubject"
                          placeholder="Query Subject"
                          value={formDetails.querySubject}
                          onChange={(e) =>
                            onFormUpdate("querySubject", e.target.value)
                          }
                          required
                        >
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Option 1
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Option 1
                          </option>{" "}
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Option 1
                          </option>{" "}
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Option 1
                          </option>
                        </select>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="file"
                          accept="image/*"
                          name="attachment"
                          // required
                          onChange={toDataURL}
                        />{" "}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.query}
                          placeholder="Query"
                          onChange={(e) =>
                            onFormUpdate("query", e.target.value)
                          }
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
