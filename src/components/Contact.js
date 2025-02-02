import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Images/queryImg.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";

export const Contact = (props) => {
  const [isOthersSelected, setIsOthersSelected] = useState(false);

  return (
    <section
      className="contact"
      id="queries"
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
            you with any question or inquiry.<br></br> Please fill out the form
            below and our team will get back to you shortly.
          </h5>
          {!props.isMobileDevice && (
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
          )}
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
                  <form onSubmit={() => {}}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Name" name="name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Contact No."
                          name="phone"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email" name="email" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <select
                          id="querySubject"
                          name="querySubject"
                          placeholder="Query Subject"
                          required
                          onChange={(event) => {
                            setIsOthersSelected(event.target.value === "Other");
                          }}
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
                            Other
                          </option>
                        </select>
                      </Col>
                      {isOthersSelected && (
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            placeholder="Specify Subject Matter"
                            name="othersSubjectMatter"
                          />
                        </Col>
                      )}

                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Query"
                          name="query"
                        ></textarea>
                        <button type="submit">
                          <span>Submit</span>
                        </button>
                      </Col>
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
