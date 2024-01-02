import React from "react";
import { serviceDetails } from "./ServiceWiseDetails";
import "./Services.css";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { specialities } from "./Specialities";
import { isMobileDevice } from "../../App";
import { Footer } from "../../components/Footer";

const Services = (serviceName) => {
  const jsx = serviceDetails[serviceName.serviceName];
  const specialityList = specialities[serviceName.serviceName];

  return (
    <>
      <section className="banner" id="home">
        <Container
          style={{
            display: "flex",
            ...(isMobileDevice && { flexDirection: "column" }),
          }}
        >
          <Row className="aligh-items-center">
            <Col xs={18} md={13} xl={14}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <div className="services">{jsx}</div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
          <Row
            style={{
              borderLeft: "1px solid black",
            }}
            className="aligh-items-center"
          >
            <Col xs={22} md={16} xl={17}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <div
                      style={{
                        width: "22rem",
                      }}
                    >
                      {specialityList}
                    </div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
          <Row
            style={{
              borderLeft: "1px solid black",
            }}
            className="aligh-items-center"
          >
            <Col xs={22} md={16} xl={17}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <ul
                      style={{
                        width: "20rem",
                      }}
                      class="list-group"
                    >
                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        href="/services/TaxAndRegulatory"
                        class={`list-btn list-group-item ${
                          serviceName.serviceName === "TaxAndRegulatory"
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <li
                          id="list-group-item"
                          class={`list-btn list-group-item ${
                            serviceName.serviceName === "TaxAndRegulatory"
                              ? "active"
                              : ""
                          }`}
                          aria-current="true"
                        >
                          Tax And Regulatory
                        </li>
                      </a>

                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        href="/services/AuditAndAssurance"
                        class={`list-btn list-group-item ${
                          serviceName.serviceName === "AuditAndAssurance"
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <li
                          id="list-group-item"
                          class={`list-btn list-group-item ${
                            serviceName.serviceName === "AuditAndAssurance"
                              ? "active"
                              : ""
                          }`}
                          aria-current="true"
                        >
                          Audit And Assurance
                        </li>
                      </a>

                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        href="/services/CorporateLawServices"
                        class={`list-btn list-group-item ${
                          serviceName.serviceName === "CorporateLawServices"
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <li
                          id="list-group-item"
                          class={`list-btn list-group-item ${
                            serviceName.serviceName === "CorporateLawServices"
                              ? "active"
                              : ""
                          }`}
                          aria-current="true"
                        >
                          Corporate Law Services
                        </li>
                      </a>

                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        href="/services/AdvisoryServices"
                        class={`list-btn list-group-item ${
                          serviceName.serviceName === "AdvisoryServices"
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <li
                          id="list-group-item"
                          class={`list-btn list-group-item ${
                            serviceName.serviceName === "AdvisoryServices"
                              ? "active"
                              : ""
                          }`}
                          aria-current="true"
                        >
                          Advisory Services
                        </li>
                      </a>

                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        href="/services/FinanceAndAccountingOutsourcingServices"
                        class={`list-btn list-group-item ${
                          serviceName.serviceName ===
                          "FinanceAndAccountingOutsourcingServices"
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <li
                          id="list-group-item"
                          class={`list-btn list-group-item ${
                            serviceName.serviceName ===
                            "FinanceAndAccountingOutsourcingServices"
                              ? "active"
                              : ""
                          }`}
                          aria-current="true"
                        >
                          Finance And Accounting Outsourcing Services
                        </li>
                      </a>
                    </ul>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer showAdminDashboard={false} />
    </>
  );
};

export default Services;
