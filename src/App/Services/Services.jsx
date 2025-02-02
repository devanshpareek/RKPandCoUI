import React from "react";
import { serviceDetails } from "./ServiceWiseDetails";
import "./Services.css";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { specialities } from "./Specialities";
import { isMobileDevice } from "../../App";
import { Footer } from "../../components/Footer";

const ServicesList = {
  TaxAndRegulatory: "Taxation",
  AuditAndAssurance: "Audit And Assurance",
  CorporateLawServices: "Corporate Law Services",
  AdvisoryServices: "Advisory Services",
  SpecializedServices: "Specialized Services",
  AccountingAndBookkeeping: "Accounting And Financial Services",
  ComplianceAndRegulatory: "Compliance And Regulatory",
  VirtualCFOServices: "Virtual CFO Services",
};

const Services = (serviceName) => {
  const jsx = serviceDetails[serviceName.serviceName];
  const specialityList = specialities[serviceName.serviceName];

  return (
    <>
      <section className="banner" id="home">
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          {ServicesList[serviceName.serviceName]}
        </h2>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2rem",
            padding: "3rem",
            ...(isMobileDevice && {
              flexDirection: "column-reverse",
              alignItems: "center",
              gap: "2rem",
            }),
          }}
        >
          <Row
            className={
              isMobileDevice
                ? "aligh-items-center mobile-services-3"
                : "aligh-items-center services-3"
            }
          >
            <Col xs={22} md={16} xl={17}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                    style={{
                      ...(isMobileDevice && {
                        display: "flex",
                        justifyContent: "center",
                      }),
                    }}
                  >
                    <ul class="list-group">
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
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Audit And Assurance
                        </li>
                      </a>

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
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Taxation
                        </li>
                      </a>

                      {/* <a
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
                      </a> */}

                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        href="/services/AccountingAndBookkeeping"
                        class={`list-btn list-group-item ${
                          serviceName.serviceName === "AccountingAndBookkeeping"
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <li
                          id="list-group-item"
                          class={`list-btn list-group-item ${
                            serviceName.serviceName ===
                            "AccountingAndBookkeeping"
                              ? "active"
                              : ""
                          }`}
                          aria-current="true"
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Accounting And Financial Services
                        </li>
                      </a>

                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        href="/services/VirtualCFOServices"
                        class={`list-btn list-group-item ${
                          serviceName.serviceName === "VirtualCFOServices"
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <li
                          id="list-group-item"
                          class={`list-btn list-group-item ${
                            serviceName.serviceName === "VirtualCFOServices"
                              ? "active"
                              : ""
                          }`}
                          aria-current="true"
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Virtual CFO Services
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
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Advisory Services
                        </li>
                      </a>

                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        href="/services/ComplianceAndRegulatory"
                        class={`list-btn list-group-item ${
                          serviceName.serviceName === "ComplianceAndRegulatory"
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <li
                          id="list-group-item"
                          class={`list-btn list-group-item ${
                            serviceName.serviceName ===
                            "ComplianceAndRegulatory"
                              ? "active"
                              : ""
                          }`}
                          aria-current="true"
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Compliance And Regulatory
                        </li>
                      </a>

                      <a
                        style={{
                          textDecoration: "none",
                          color: "black",
                        }}
                        href="/services/SpecializedServices"
                        class={`list-btn list-group-item ${
                          serviceName.serviceName === "SpecializedServices"
                            ? "active"
                            : ""
                        }`}
                      >
                        {" "}
                        <li
                          id="list-group-item"
                          class={`list-btn list-group-item ${
                            serviceName.serviceName === "SpecializedServices"
                              ? "active"
                              : ""
                          }`}
                          aria-current="true"
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Specialized Services
                        </li>
                      </a>
                    </ul>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
          <Row
            className={
              isMobileDevice
                ? "aligh-items-center mobile-services-1"
                : "aligh-items-center services-1"
            }
          >
            <Col xs={18} md={13} xl={14}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <div>{jsx}</div>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
          <Row
            className={
              isMobileDevice
                ? "aligh-items-center mobile-services-2"
                : "aligh-items-center services-2"
            }
          >
            <Col xs={22} md={16} xl={17}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <div>{specialityList}</div>
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
