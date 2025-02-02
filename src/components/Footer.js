import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import logo from "../Images/ICAI-India-Logo.png";
import Admin from "../App/Admin/Admin";
import useLocalStorageState from "use-local-storage-state";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  // text-align: center;
`;

const FooterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterColumn = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    flex: 1;
    margin: 0 20px;
  }
`;

const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  gap: 1rem;
`;

const FooterTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.1em;
  display: flex;
  justify-content: flex-start;
`;

const FooterItem = styled.p`
  margin: 5px 0;
  font-size: 0.9em !important;
`;

const FooterBottom = styled.div`
  border-top: 1px solid #444;
  padding-top: 10px;
`;

export const Footer = (props) => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useLocalStorageState(
    "isAdminLoggedIn",
    "false"
  );
  console.log(props.isMobileDevice);
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col
            size={12}
            sm={5}
            style={{
              display: "flex",
              gap: "1rem",
              margin: "1rem",
              marginTop: "3rem",
            }}
          >
            <img
              className={props.isMobileDevice ? "footer-mobile-logo" : ""}
              src={logo}
              alt="Logo"
            />
            <div>
              <h2
                style={{
                  textShadow: "2px 2px 5px darkslategrey",
                  marginTop: "0.5rem",
                  paddingTop: "0.5rem",
                  color: "white",
                }}
              >
                R K Pareek & Co.
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  marginTop: "-0.7rem",
                  textShadow: "2px 2px 5px darkslategrey",
                  color: "white",
                }}
              >
                Chartered Accountants
              </p>
            </div>
          </Col>
        </Row>
        <FooterContainer>
          <FooterWrapper>
            <FooterRow>
              <FooterColumn>
                <FooterTitle>Our Offices</FooterTitle>
                <FooterItem>Jaipur</FooterItem>
                <FooterItem>Jodhpur</FooterItem>
                <FooterItem>Pune</FooterItem>
                <FooterItem>Hyderabad</FooterItem>
              </FooterColumn>
              <FooterColumn>
                <FooterTitle>Services</FooterTitle>
                <a href="/services/AuditAndAssurance">
                  <FooterItem>Audit And Assurance</FooterItem>
                </a>
                <a href="/services/TaxAndRegulatory">
                  <FooterItem>Taxation</FooterItem>
                </a>

                <a href="/services/AccountingAndBookkeeping">
                  <FooterItem>Accounting And Financial Services</FooterItem>
                </a>
                <a href="/services/AdvisoryServices">
                  <FooterItem>Advisory Services</FooterItem>
                </a>
                <a href="/services/VirtualCFOServices">
                  <FooterItem>Virtual CFO Services</FooterItem>
                </a>
                <a href="/services/ComplianceAndRegulatory">
                  <FooterItem>Compliance And Regulatory</FooterItem>
                </a>

                <a href="/services/SpecializedServices">
                  <FooterItem>Specialized Services</FooterItem>
                </a>
              </FooterColumn>
              <FooterColumn>
                <FooterTitle>Contact Us</FooterTitle>
                <FooterItem>
                  Coorporate Office: Plot B1, 3rd Floor, Shiv Vatika, Opposite
                  Saint Teresa School , Mangyawas , New Sanganer Road,
                  Mansarovar, Jaipur Rajasthan India - 302020
                </FooterItem>
                <FooterItem>Phone: 9929833830, 9887805220</FooterItem>
                <FooterItem>
                  Email: rkpareek.ca@gmail.com, info@rkpareek.com
                </FooterItem>
                <FooterItem
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <iframe
                    className="map-location"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3559.460490707241!2d75.74419957543755!3d26.857106976680456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUxJzI1LjYiTiA3NcKwNDQnNDguNCJF!5e0!3m2!1sen!2sin!4v1738484462068!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    title="Our Location"
                  ></iframe>
                </FooterItem>
              </FooterColumn>
            </FooterRow>
            <FooterBottom>
              &copy; 2024 R K Pareek & Co. | All rights reserved.
            </FooterBottom>
          </FooterWrapper>
        </FooterContainer>
      </Container>
    </footer>
  );
};
