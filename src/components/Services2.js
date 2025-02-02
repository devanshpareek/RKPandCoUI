import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { GoLaw } from "react-icons/go";
import corporateLawFirm from "../Images/corporateLawIcon.jpeg";
import auditAndAssurance from "../Images/auditandassurance.jpeg";
import AccountAndBookkeeping from "../Images/advisorySection.jpeg";
import AdvisoryServices from "../Images/AdvisoryServices.jpg"
import taxAndRegulatory from "../Images/taxAndRegulatory.jpeg";
import ComplianceAndRegulation from "../Images/ComplianceAndRegulation.jpg";
import VirtualCfo from "../Images/VirtualCfo.jpg"
import financing from "../Images/financing.png";
import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import ServiceCrad from "./ServiceCrad";

export const Services2 = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const services = [
    {
      title: "Audit and Assuarance",
      img: auditAndAssurance,
      href: "/services/AuditAndAssurance",
    },
    {
      title: "Taxation",
      img: taxAndRegulatory,
      href: "/services/TaxAndRegulatory",
    },
    // {
    //   title: "Corporate Law Services",
    //   img: corporateLawFirm,
    //   href: "/services/CorporateLawServices",
    // },
    {
      title: "Accounting And Financial Services",
      img: AccountAndBookkeeping,
      href: "/services/AccountingAndBookkeeping",
    },
    {
      title: "Advisory Services",
      img: AdvisoryServices,
      href: "/services/AdvisoryServices",
    },
    {
      title:"Virtual CFO Services",
      img:VirtualCfo,
      href:"/services/VirtualCFOServices"
    },
    {
      title: "Compliance And Regulatory",
      img: ComplianceAndRegulation,
      href: "/services/ComplianceAndRegulatory",
    },
    {
      title: "Specialized Services",
      img: financing,
      href: "/services/SpecializedServices",
    },
  ];

  return (
    // <section
    //   style={{ marginTop: "3rem", paddingTop: "7rem" }}
    //   className="service"
    //   id="services"
    // >
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12">
    //         <div className="service-bx wow zoomIn">
    //           <h2>Services</h2>
    //           <p></p>
    //           <Carousel
    //             responsive={responsive}
    //             infinite={true}
    //             className="owl-carousel owl-theme service-slider"
    //           >

    //             <a
    //               style={{
    //                 textDecoration: "none",
    //                 color: "black",
    //               }}
    //               href="/services/AuditAndAssurance"
    //             >
    //               <div className="item">
    //                 <img src={auditAndAssurance} alt="Image" />
    //                 <h5>Audit And Assurance</h5>
    //               </div>
    //             </a>
    //             <a
    //               style={{
    //                 textDecoration: "none",
    //                 color: "black",
    //               }}
    //               href="/services/TaxAndRegulatory"
    //             >
    //               <div className="item">
    //                 <img src={taxAndRegulatory} alt="Image" />
    //                 <h5>Taxation</h5>
    //               </div>
    //             </a>
    //             {/* <a
    //               style={{
    //                 textDecoration: "none",
    //                 color: "black",
    //               }}
    //               href="/services/CorporateLawServices"
    //             >
    //               <div className="item">
    //                 <img src={corporateLawFirm} alt="Image" />
    //                 <h5>Corporate Law Services</h5>
    //               </div>
    //             </a> */}
    //             <a
    //               style={{
    //                 textDecoration: "none",
    //                 color: "black",
    //               }}
    //               href="/services/AccountingAndBookkeeping"
    //             >
    //               <div className="item">
    //                 <img src={advisoryService} alt="Image" />
    //                 <h5>Accounting And Bookkeeping</h5>
    //               </div>
    //             </a>
    //             <a
    //               style={{
    //                 textDecoration: "none",
    //                 color: "black",
    //               }}
    //               href="/services/AdvisoryServices"
    //             >
    //               <div className="item">
    //                 <img src={advisoryService} alt="Image" />
    //                 <h5>Advisory Services</h5>
    //               </div>
    //             </a>
    //             <a
    //               style={{
    //                 textDecoration: "none",
    //                 color: "black",
    //               }}
    //               href="/services/ComplianceAndRegulatory"
    //             >
    //               <div className="item">
    //                 <img src={advisoryService} alt="Image" />
    //                 <h5>Compliance And Regulatory</h5>
    //               </div>
    //             </a>

    //             <a
    //               style={{
    //                 textDecoration: "none",
    //                 color: "black",
    //               }}
    //               href="/services/SpecializedServices"
    //             >
    //               <div className="item">
    //                 <img src={financing} alt="Image" />
    //                 <h5>Specialized Services</h5>
    //               </div>
    //             </a>
    //           </Carousel>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <img className="background-image-left" src={colorSharp} alt="Image" />
    // </section>
    <section className="smooth-scroll-section services" id="services">
      {
        <Container className="animated-container">
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Services</h2>
                    <Row className="skillsContainer">
                      {services.map((service) => (
                        <ServiceCrad serviceDetails={service} />
                      ))}
                    </Row>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      }
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
