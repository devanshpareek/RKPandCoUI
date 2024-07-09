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
  text-align: center;
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
  justify-content: center;
  margin-bottom: 20px;
`;

const FooterTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 1.1em;
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
            <img src={logo} alt="Logo" />
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
                <FooterItem>Kota</FooterItem>
                <FooterItem>Pune</FooterItem>
                <FooterItem>Hyderabad</FooterItem>
                <FooterItem>Delhi</FooterItem>
              </FooterColumn>
              <FooterColumn>
                <FooterTitle>Services</FooterTitle>
                <a href="/services/TaxAndRegulatory">
                  <FooterItem>Tax And Regulatory</FooterItem>
                </a>
                <a href="/services/AuditAndAssurance">
                  <FooterItem>Audit And Assurance</FooterItem>
                </a>

                <a href="/services/AccountingAndBookkeeping">
                  <FooterItem>Accounting And Bookkeeping</FooterItem>
                </a>
                <a href="/services/ComplianceAndRegulatory">
                  <FooterItem>Compliance And Regulatory</FooterItem>
                </a>
                <a href="/services/AdvisoryServices">
                  <FooterItem>Advisory Services</FooterItem>
                </a>
                <a href="/services/FinanceAndAccountingOutsourcingServices">
                  <FooterItem>
                    Finance And Accounting Outsourcing Services
                  </FooterItem>
                </a>
              </FooterColumn>
              <FooterColumn>
                <FooterTitle>Contact Us</FooterTitle>
                <FooterItem>
                  Main Office: 3, Ground Floor, Krishna Vihar – A, Mangyawas,
                  New Sanganer Road, Mansarovar, Jaipur, Rajasthan, India -
                  302020
                </FooterItem>
                <FooterItem>Phone: 9929833830, 9887805220</FooterItem>
                <FooterItem>Email: info@rkpareek.com</FooterItem>
              </FooterColumn>
            </FooterRow>
            <FooterBottom>
              &copy; 2024 RK Pareek & Company | All rights reserved.
            </FooterBottom>
          </FooterWrapper>
        </FooterContainer>
      </Container>
    </footer>
  );
};
