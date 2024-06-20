import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../Images/query.jpg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import axios from "axios";

export const OpportunityForm = (props) => {
  console.log(props.selectedOpportunity);

  const formInitialDetails =
    props.selectedOpportunity === "ca-aspirant"
      ? {
          name: "",
          email: "",
          telephoneNo: "",
          educationBackground: "",
          tenthScore: "",
          twelthScore: "",
          cptScore: "",
          pceScore: "",
          graduation: "",
          postGraduation: "",
          attachment: "",
          aboutYou: "",
        }
      : props.selectedOpportunity === "professional"
      ? {
          name: "",
          email: "",
          telephoneNo: "",
          educationBackground: "",
          cptScore: "",
          pceScore: "",
          finalScore: "",
          experience: "",
          attachment: "",
          aboutYou: "",
        }
      : {
          name: "",
          email: "",
          telephoneNo: "",
          educationBackground: "",
          pceScore: "",
          graduation: "",
          postGraduation: "",
          experience: "",
          attachment: "",
          aboutYou: "",
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
        setFormDetails({ ...formDetails, attachment: data.url });
      })
      .catch((error) => {
        alert(error);
      });
  }

  const [attachment, setAttachment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await tempSub(attachment);

    setButtonText("Sending...");
    let response = axios
      .post(`http://localhost:8080/${props.selectedOpportunity}`, {
        formData: formDetails,
      })
      .then((result) => {
        console.log(result);
        setStatus({ succes: true, message: "Application sent successfully" });

        alert(
          "Application submitted successfully, we will get back to you soon.Thank you!"
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
    <section
      className="opportunity-form"
      id="query"
      style={{
        ...(props.withoutBackground && { backgroundColor: "transparent" }),
      }}
    >
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
                  <h2>
                    {props.selectedOpportunity === "ca-aspirant"
                      ? "CA Aspirant"
                      : props.selectedOpportunity === "professional"
                      ? "Professional"
                      : "Job Seeker"}
                  </h2>
                  {props.selectedOpportunity === "ca-aspirant" ? (
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.name}
                            placeholder="Name"
                            onChange={(e) =>
                              onFormUpdate("name", e.target.value)
                            }
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
                            value={formDetails.educationBackground}
                            placeholder="Education Background"
                            onChange={(e) =>
                              onFormUpdate(
                                "educationBackground",
                                e.target.value
                              )
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.tenthScore}
                            placeholder="10th Score"
                            onChange={(e) =>
                              onFormUpdate("tenthScore", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.twelthScore}
                            placeholder="12th Score"
                            onChange={(e) =>
                              onFormUpdate("twelthScore", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.cptScore}
                            placeholder="CPT Score"
                            onChange={(e) =>
                              onFormUpdate("cptScore", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.pceScore}
                            placeholder="PCE Score"
                            onChange={(e) =>
                              onFormUpdate("pceScore", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.graduation}
                            placeholder="Graduation"
                            onChange={(e) =>
                              onFormUpdate("graduation", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.postGraduation}
                            placeholder="Post Graduation"
                            onChange={(e) =>
                              onFormUpdate("postGraduation", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={16} className="px-1">
                          <input
                            type="file"
                            accept="image/*"
                            name="attachment"
                            // required
                            onChange={(e) => {
                              setAttachment(e.target.files[0]);
                            }}
                            style={{
                              paddingLeft: "20%",
                            }}
                          />
                        </Col>
                        <label
                          className="resume-label"
                          style={{
                            marginTop: "-56px",
                            width: "fit-content",
                          }}
                        >
                          Resume:
                        </label>
                        <Col size={12} sm={16} className="px-1">
                          <textarea
                            rows="6"
                            value={formDetails.aboutYou}
                            placeholder="About You"
                            onChange={(e) =>
                              onFormUpdate("aboutYou", e.target.value)
                            }
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
                  ) : props.selectedOpportunity === "professional" ? (
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.name}
                            placeholder="Name"
                            onChange={(e) =>
                              onFormUpdate("name", e.target.value)
                            }
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
                            value={formDetails.educationBackground}
                            placeholder="Education Background"
                            onChange={(e) =>
                              onFormUpdate(
                                "educationBackground",
                                e.target.value
                              )
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.cptScore}
                            placeholder="CPT Score"
                            onChange={(e) =>
                              onFormUpdate("cptScore", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.pceScore}
                            placeholder="PCE Score"
                            onChange={(e) =>
                              onFormUpdate("pceScore", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.finalScore}
                            placeholder="Final Score"
                            onChange={(e) =>
                              onFormUpdate("finalScore", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.experience}
                            placeholder="Working Experience"
                            onChange={(e) =>
                              onFormUpdate("experience", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={16} className="px-1">
                          <input
                            type="file"
                            accept="image/*"
                            name="attachment"
                            // required
                            onChange={(e) => {
                              setAttachment(e.target.files[0]);
                            }}
                            style={{
                              paddingLeft: "20%",
                            }}
                          />
                        </Col>
                        <label
                          className="resume-label"
                          style={{
                            marginTop: "-56px",
                            width: "fit-content",
                          }}
                        >
                          Resume:
                        </label>
                        <Col size={12} sm={16} className="px-1">
                          <textarea
                            rows="6"
                            value={formDetails.aboutYou}
                            placeholder="About You"
                            onChange={(e) =>
                              onFormUpdate("aboutYou", e.target.value)
                            }
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
                  ) : (
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.name}
                            placeholder="Name"
                            onChange={(e) =>
                              onFormUpdate("name", e.target.value)
                            }
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
                            value={formDetails.educationBackground}
                            placeholder="Education Background"
                            onChange={(e) =>
                              onFormUpdate(
                                "educationBackground",
                                e.target.value
                              )
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.pceScore}
                            placeholder="PCE Score"
                            onChange={(e) =>
                              onFormUpdate("pceScore", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.graduation}
                            placeholder="Graduation"
                            onChange={(e) =>
                              onFormUpdate("graduation", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.postGraduation}
                            placeholder="Post Graduation"
                            onChange={(e) =>
                              onFormUpdate("postGraduation", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.experience}
                            placeholder="Working Experience"
                            onChange={(e) =>
                              onFormUpdate("experience", e.target.value)
                            }
                          />
                        </Col>

                        <Col size={12} sm={16} className="px-1">
                          <input
                            type="file"
                            accept="image/*"
                            name="attachment"
                            // required
                            onChange={(e) => {
                              setAttachment(e.target.files[0]);
                            }}
                            style={{
                              paddingLeft: "20%",
                            }}
                          />
                        </Col>
                        <label
                          className="resume-label"
                          style={{
                            marginTop: "-56px",
                            width: "fit-content",
                          }}
                        >
                          Resume:
                        </label>
                        <Col size={12} sm={16} className="px-1">
                          <textarea
                            rows="6"
                            value={formDetails.aboutYou}
                            placeholder="About You"
                            onChange={(e) =>
                              onFormUpdate("aboutYou", e.target.value)
                            }
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
                  )}
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
