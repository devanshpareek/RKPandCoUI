import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { Contact } from "./Contact";
import { OpportunityForm } from "./OpportunityForm";
import { useState } from "react";

export const Projects = ({ isMobileDevice }) => {
  const [selectedOpportunity, setSelectedOpportunity] = useState("ca-aspirant");

  return (
    <section className="project" id="opportunities">
      {/* <Container> */}
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h2>Opportunities</h2>
                <p>
                  Join our team according to your preference and experience,
                  here are some forms arranged according to our openings.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link
                        eventKey="first"
                        onClick={() => {
                          setSelectedOpportunity("ca-aspirant");
                        }}
                      >
                        CA Aspirant
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="second"
                        onClick={() => {
                          setSelectedOpportunity("professional");
                        }}
                      >
                        Professional
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        eventKey="third"
                        onClick={() => {
                          setSelectedOpportunity("job-seeker");
                        }}
                      >
                        Job Seeker
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <OpportunityForm
                    selectedOpportunity={selectedOpportunity}
                    withoutBackground={true}
                    isMobileDevice={isMobileDevice}
                  />
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
      {/* </Container> */}
    </section>
  );
};
