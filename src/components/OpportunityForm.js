import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Images/opportunityImg.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";
import emailjs from "@emailjs/browser";

export const OpportunityForm = (props) => {
  const [status, setStatus] = useState({});

  const [resumeLink, setResumeLink] = useState();

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
        setResumeLink(data.url);
        alert("Resume uploaded successfully, you can go ahead now!");
      })
      .catch((error) => {
        alert(error);
      });
  }

  const [attachment, setAttachment] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nm154ny", "template_m9zwcw1", form.current, {
        publicKey: "43KYaLBgwBzGjGxDw",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      className="opportunity-form"
      id="query"
      style={{
        ...(props.withoutBackground && { backgroundColor: "transparent" }),
      }}
    >
      <h2>Opportunities</h2>
      <p>
        Join our team according to your preference and experience, here are some
        forms arranged according to our openings.
      </p>
      <Container>
        <Row className="align-items-center">
          {!props.isMobileDevice && (
            <Col
              style={{
                marginTop: "-13rem",
              }}
              size={12}
              md={6}
            >
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
          )}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* <h2>
                    {props.selectedOpportunity === "ca-aspirant"
                      ? "CA Aspirant"
                      : props.selectedOpportunity === "professional"
                      ? "Professional"
                      : "Job Seeker"}
                  </h2> */}

                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" placeholder="Name" name="name" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" placeholder="Email" name="email" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          placeholder="Contact No."
                          name="contactNo"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Education Background"
                          name="educationBackground"
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="10th Score"
                          name="tenthScore"
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="12th Score"
                          name="twelthScore"
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="CPT Score"
                          name="cptScore"
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="PCE Score"
                          name="pceScore"
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Graduation"
                          name="graduation"
                        />
                      </Col>

                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          placeholder="Post Graduation"
                          name="postGraduation"
                        />
                      </Col>

                      <Col size={12} sm={16} className="px-1">
                        <select
                          id="jobRole"
                          name="jobRole"
                          placeholder="Job Role"
                        >
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Job Role
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            Professional
                          </option>
                          <option
                            style={{
                              color: "black",
                            }}
                          >
                            CA Aspirant
                          </option>
                        </select>
                      </Col>

                      <Col
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                        size={12}
                        sm={16}
                        className="px-1"
                      >
                        <Col size={12} sm={9}>
                          <input
                            type="file"
                            accept="image/*"
                            // required
                            onChange={(e) => {
                              setAttachment(e.target.files[0]);
                            }}
                            style={{
                              paddingLeft: "20%",
                            }}
                          />
                        </Col>
                        <button
                          style={{
                            marginTop: "-7px",
                            borderRadius: "1rem",
                          }}
                          onClick={() => {
                            alert(
                              "We are uploading your resume, plz wait for conformation before submitting the form."
                            );
                            tempSub(attachment);
                          }}
                          type="button"
                        >
                          <span>Upload</span>
                        </button>
                      </Col>
                      <label
                        className="resume-label"
                        style={{
                          marginTop: "-56px",
                          marginLeft: "20px",
                          width: "fit-content",
                          fontSize: "17px",
                          fontWeight: "normal",
                        }}
                      >
                        Resume
                      </label>
                      <Col
                        style={{
                          display: "none",
                        }}
                        size={12}
                        sm={16}
                        className="px-1"
                      >
                        <input name="attachment" value={resumeLink}></input>
                      </Col>

                      <Col size={12} sm={16} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="About You"
                          name="aboutYou"
                        ></textarea>
                      </Col>

                      <Col
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                        size={12}
                        sm={16}
                        className="px-1"
                      >
                        <button type="submit">
                          <span>Send</span>
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
