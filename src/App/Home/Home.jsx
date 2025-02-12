import React, { useState } from "react";
import "./Home.css";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { FaDiamond } from "react-icons/fa6";
import { aboutUsContent } from "./AboutUsContent";
import { isMobileDevice } from "../../App";
import { Footer } from "../../components/Footer";

const Home = (props) => {
  // const jsx = aboutUsContent[props.display];
  console.log(props.display);

  const jsx = aboutUsContent();
  const [active, setActive] = useState(props.display);
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={22} md={16} xl={17}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                    style={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {jsx}
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer isMobileDevice={props.isMobileDevice} showAdminDashboard={false} />
    </>
  );
  // return (
  //   <div className="home-page-wrapper">
  //     <div className="home-page">
  //       <div className="company-intro">
  //         <div className="title">Company Background</div>
  //         <p>
  //           R K Pareek & Co. is founded by CA Rishi Kant Pareek and CA Rachita
  //           Jain in the year 2012. It is equipped with experienced professional
  //           team of chartered accountants and having its offices at{" "}
  //           <b>Jaipur, Kota, Jodhpur and Hyderabad</b>. We have a successful
  //           track record of conducting a fully diversified{" "}
  //           <b>“One Stop Solution”</b>
  //           for all accounting, finance and compliance related needs including
  //           Statutory Audit, Compliance Audit & Assurance, Internal Audit,
  //           Indirect Taxation, International Taxation including Transfer Pricing
  //           Study, Management Consultancy and Outsourcing for Payroll, Inventory
  //           Accounting, Fixed Assets Management, and development of MIS.
  //         </p>

  // <p>
  //   Among our clients are several manufacturing, information technology,
  //   fantasy sports, foods, entertainment, power generation &
  //   distribution companies, banks and government organizations. R K
  //   Pareek & Co. is committed to engagement, team continuity and client
  //   satisfaction. We concentrate our entire efforts to the task of
  //   understanding and improving our client’s efficiencies and
  //   effectiveness.
  // </p>
  // <p>
  //   Our firm’s objective is to provide quality services while
  //   maintaining close personal ties to our clients and their executive
  //   staff. We are concerned with the financial wellbeing of our clients,
  //   and believe that good financial health is the best way to advance
  //   the general public's interest in a sound economy.
  // </p>
  //       </div>

  // <div className="vision-mission">
  //   <div className="title">Our Visions:</div>
  // <ul className="vision-mission-list">
  //   <li>
  //     To be a respected & trusted professional firm and recognised as a
  //     leading service provider in core areas.
  //   </li>
  //   <li>
  //     To be a reputed & reliable partner for other professional service
  //     providers.
  //   </li>
  //   </ul>
  // </div>

  // <div className="vision-mission">
  //   <div className="title">Our Mission:</div>
  //   <ul className="vision-mission-list">
  //     <li>
  //       To consistently provide excellent quality service to clients at
  //       all times.
  //     </li>
  //     <li>
  //       To leverage the credentials and experience of all internal
  //       stakeholders and be a partner in external stakeholders growth.
  //     </li>
  //   </ul>
  // </div>

  // <div className="vision-mission">
  //   <div className="title">Our Values:</div>
  //   <ul className="vision-mission-list">
  //     <li>
  //       Our core values are driven by integrity, ethical practices,
  //       independence and mutual respect.
  //     </li>
  //   </ul>
  // </div>
  // <div className="vision-mission">
  //   <div className="title">Our Commitments</div>
  //   <ul className="vision-mission-list">
  //     <li>
  //       Proactively understand requirements & provide concrete resolutions
  //       distinguishing client ethos, background & restrictions.
  //     </li>
  //     <li>
  //       Customized client service ensuring timely & quality deliverables.
  //     </li>
  //     <li>
  //       Distinctive service parameters having domain experience &
  //       expertise.
  //     </li>
  //     <li>Growth approach.</li>
  //   </ul>
  // </div>
  //       {expanded === false && (
  //         <button className="load-more-btn"
  //           onClick={() => {
  //             setExpanded(true);
  //           }}
  //         >
  //           Show More...
  //         </button>
  //       )}
  //       {expanded && (
  //         <div>
  // <div className="title">Practice Area</div>
  // <h3>SERVICES AND SPECIALTIES</h3>
  // <div className="practice-area-wrapper">
  //   <div>
  //     <h4>Assurance</h4>
  //     <ul>
  //       <li>Statutory Audits</li>
  //       <li>Internal Audits</li>
  //       <li>Tax Audits</li>
  //       <li>Bank Audits</li>
  //       <li>Cost Accounting Record Maintenance</li>
  //       <li>Due Diligence</li>
  //       <li>Investigations</li>
  //       <li>Certification Services</li>
  //     </ul>

  //     <h4>Taxation</h4>
  //     <ul>
  //       <li>Direct Taxation – Domestic</li>
  //       <li>International Taxation</li>
  //       <li>Transfer Pricing</li>
  //       <li>Indirect Taxation – GST, Excise, Customs</li>
  //     </ul>

  //     <h4>Management Consultancy</h4>
  //     <ul>
  //       {[
  //         "Funds Syndication",
  //         "Financial Analysis",
  //         "Business Valuation",
  //         "Succession Planning",
  //         "Business Set up & Development",
  //         "Wealth Management",
  //         "Arbitration",
  //       ].map((service, index) => (
  //         <li key={index}>{service}</li>
  //       ))}
  //     </ul>
  //   </div>
  //   <div>
  //     <h4>Industries Covered</h4>
  //     <ul>
  //       {[
  //         "Information Technology",
  //         "Food Chain & Processing",
  //         "Infrastructure",
  //         "Construction and Realities",
  //         "Banking and Finance",
  //         "FMCG",
  //         "Transport and Logistics",
  //         "Textile",
  //         "Manpower Supply",
  //         "Retail",
  //         "Foundry and Engineering",
  //         "Hospitality",
  //         "Education",
  //         "Infrastructure",
  //         "Printing and Packaging",
  //         "Consumer Durables",
  //       ].map((industry, index) => (
  //         <li key={index}>{industry}</li>
  //       ))}
  //     </ul>
  //   </div>
  // </div>
  //         </div>
  //       )}

  //       {expanded && (
  //         <button className="load-more-btn"
  //           onClick={() => {
  //             setExpanded(false);
  //           }}
  //         >
  //           Show Less...
  //         </button>
  //       )}
  //     </div>
  //     <div className="home-page">
  //       <div className="title">Quick Links</div>
  //       <ul>
  //         {externalLinks.map((categoryItem, index) => (
  //           <li key={index}>
  //             <h3>{categoryItem.category}</h3>
  //             <ul>
  //               {categoryItem.links.map((link, linkIndex) => (
  //                 <li key={linkIndex}>
  //                   <a
  //                     className="external-link"
  //                     href={link.url}
  //                     target="_blank"
  //                     rel="noopener noreferrer"
  //                   >
  //                     {link.name}
  //                   </a>
  //                 </li>
  //               ))}
  //             </ul>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   </div>
  // );
};

export default Home;
