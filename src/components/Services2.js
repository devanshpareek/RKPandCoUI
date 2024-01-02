import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

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

  return (
    <section style={{ marginTop: "3rem" }} className="service" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="service-bx wow zoomIn">
              <h2>Services</h2>
              <p></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme service-slider"
              >
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  href="/services/TaxAndRegulatory"
                >
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Tax and Regulatory</h5>
                  </div>
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  href="/services/AuditAndAssurance"
                >
                  <div className="item">
                    <img src={meter2} alt="Image" />
                    <h5>Audit And Assurance</h5>
                  </div>
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  href="/services/CorporateLawServices"
                >
                  <div className="item">
                    <img src={meter3} alt="Image" />
                    <h5>Corporate Law Services</h5>
                  </div>
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  href="/services/AdvisoryServices"
                >
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Advisory Services</h5>
                  </div>
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  href="/services/FinanceAndAccountingOutsourcingServices"
                >
                  <div className="item">
                    <img src={meter1} alt="Image" />
                    <h5>Finance And Accounting Outsourcing Services</h5>
                  </div>
                </a>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
