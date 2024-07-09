import React from "react";
import { serviceDetails } from "./ServiceWiseDetails";
import "./Services.css";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { specialities } from "./Specialities";
import { isMobileDevice } from "../../App";
import { Footer } from "../../components/Footer";

const ServicesList = {
  TaxAndRegulatory: "Tax And Regulatory",
  AuditAndAssurance: "Audit And Assurance",
  CorporateLawServices: "Corporate Law Services",
  AdvisoryServices: "Advisory Services",
  FinanceAndAccountingOutsourcingServices:
    "Finance And Accounting Outsourcing Services",
  AccountingAndBookkeeping: "Accounting And Bookkeeping",
  ComplianceAndRegulatory: "Compliance And Regulatory",
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
            ...(isMobileDevice && {
              flexDirection: "column-reverse",
              gap: "2rem",
            }),
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
              ...(!serviceName.isMobileDevice && {
                borderRight: "1px solid black",
              }),
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
              ...(!serviceName.isMobileDevice && {
                marginRight: "-3rem",
                paddingLeft: "3rem",
              }),
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
                    style={{
                      ...(isMobileDevice && {
                        display: "flex",
                        justifyContent: "center",
                      }),
                    }}
                  >
                    <ul
                      style={{
                        width: "13rem",
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
                          style={{
                            fontSize: "12px",
                          }}
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
                          style={{
                            fontSize: "12px",
                          }}
                        >
                          Audit And Assurance
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
                          Accounting And Bookkeeping
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
                          style={{
                            fontSize: "12px",
                          }}
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
