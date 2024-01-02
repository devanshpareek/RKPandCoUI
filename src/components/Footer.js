import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../Images/ICAI-India-Logo.png";

export const Footer = (props) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {props.showAdminDashboard && <MailchimpForm />}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <h1
              style={{
                color: "white",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              Locations
            </h1>
            <div
              style={{
                display: "flex",

                // flexDirection: "column",
                justifyContent: "space-between",
              }}
              className="social-icon"
            >
              <a
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "1.5rem",
                  color: "#B8B8B8",
                }}
                href="#"
              >
                Jaipur
              </a>
              <p>|</p>
              <a
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "1.5rem",
                  color: "#B8B8B8",
                }}
                href="#"
              >
                Kota
              </a>
              <p>|</p>

              <a
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "1.5rem",
                  color: "#B8B8B8",
                }}
                href="#"
              >
                Jodhpur
              </a>
              <p>|</p>

              <a
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  fontSize: "1.5rem",
                  color: "#B8B8B8",
                }}
                href="#"
              >
                Hyderabad
              </a>
            </div>
            <p style={{
              fontSize:'1rem',marginTop:'3rem'
            }}>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
