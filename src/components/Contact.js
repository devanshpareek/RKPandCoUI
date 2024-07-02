import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Images/queryImg.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";

export const Contact = (props) => {
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

  const [attachment, setAttachment] = useState("");
  const [t, st] = useState({});

  async function tempSub(img) {
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "unicorn-bridge");
    data.append("cloud_name", "dnuc0ukxf");
    data.append("api_key", "618922484172698");
    await fetch("https://api.cloudinary.com/v1_1/:dnuc0ukxf/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const aggregatedObj = { ...formDetails, attachment: data.url };
        st(aggregatedObj);
        console.log(aggregatedObj, Object.keys(aggregatedObj));
        setFormDetails(aggregatedObj);
        axios
          .post("http://localhost:8080/query", {
            queryData: aggregatedObj,
          })
          .then((res) => {
            console.log(res);
          });
        setStatus({ success: true, message: "Query sent successfully" });

        alert(
          "Query raised successfully, we will get back to you soon. Thank you!"
        );
      })
      .catch((error) => {
        alert(error);
      });
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = axios
  //     .post("http://localhost:8080/query", { queryData: formDetails })
  //     .then((result) => {
  //       console.log(result);
  //       setStatus({ succes: true, message: "Query sent successfully" });

  //       alert(
  //         "Query raised successfully, we will get back to you soon.Thank you!"
  //       );
  //     })
  //     .catch((err) => {
  //       setStatus({
  //         succes: false,
  //         message: "Something went wrong, please try again later.",
  //       });
  //       alert("Oops, something went wrong!");
  //       console.log(err);
  //     });
  //   setButtonText("Send");
  //   let result = await response;
  //   console.log(result);

  //   setFormDetails(formInitialDetails);
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formDetails);
    // console.log("Form submitted", attachment, t);
    // tempSub(attachment);
    // console.log(formDetails, t);

    setButtonText("Sending...");
    try {
      await axios
        .post("http://localhost:8080/query", {
          queryData: formDetails,
        })
        .then((res) => {
          alert(
            "Query raised successfully, we will get back to you soon. Thank you!"
          );
          setFormDetails(formInitialDetails);
        });
      setStatus({ success: true, message: "Query sent successfully" });
    } catch (error) {
      console.error("Error occurred:", error);
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
      alert("Oops, something went wrong!");
    } finally {
      console.log("plz come in finally");
      setButtonText("Send");
      setFormDetails(formInitialDetails);
    }
  };

  return (
    <section
      className="contact"
      id="query"
      style={{
        ...(props.withoutBackground && { backgroundColor: "transparent" }),
      }}
    >
      <Container>
        <Row className="align-items-center">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            Query
          </h2>
          <h5
            style={{
              textAlign: "center",
              color: "white",
            }}
          >
            We value your interest in R K Pareek & Co. and are here to assist
            you with any question or inquiry. Please fill out the form below and
            our team will get back to you shortly.
          </h5>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                  style={{
                    height: "20rem",
                  }}
                />
              )}
            </TrackVisibility>
          </Col>
          <Col
            size={12}
            md={6}
            style={{
              paddingTop: "4rem",
            }}
          >
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
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
                          value={formDetails.emailAddress}
                          placeholder="Email"
                          onChange={(e) =>
                            onFormUpdate("emailAddress", e.target.value)
                          }
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <select
                          id="querySubject"
                          name="querySubject"
                          placeholder="Query Subject"
                          value={formDetails.attachment}
                          onChange={(e) =>
                            onFormUpdate("attachment", e.target.value)
                          }
                          required
                        >
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Subject matter
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Advisory - Company Law & Legal Matters
                          </option>{" "}
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Advisory - Ind-AS & IFRS
                          </option>{" "}
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Advisory - International Taxation and transactions
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Advisory - Merges & Acquisition and Corporate
                            Restructuring
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Advisory - Other Law (SEBI, MSME, FEMA, FCRA)
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Advisory - Startup Assistance
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Advisory - Valuation Services
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Advisory - Banking transaction and NBFC's
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Advisory - RIPS
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Assurance & Risk Advisory - IFC, Management
                            Consultancy
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Auditing - Satutory, Internal, Tax etc
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Taxation - Direct
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Taxation - Indirect
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Others
                          </option>
                        </select>
                      </Col>

                      <Col size={12} className="px-1">
                        <input
                          type="text"
                          value={formDetails.querySubject}
                          placeholder="Query Subject"
                          onChange={(e) =>
                            onFormUpdate("querySubject", e.target.value)
                          }
                        />
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
