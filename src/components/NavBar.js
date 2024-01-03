import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import CALOGO from "../Images/ICAI-India-Logo.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/RKPandCoUI/">
            <img src={CALOGO} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Brand href="/RKPandCoUI/">
            <h2
              style={{
                textShadow: "2px 2px 5px darkslategrey",
                marginTop: "0.5rem",
                paddingTop: "0.5rem",
              }}
            >
              {/* R K <u className="company-title-underline">Pareek & Co.</u> */}
              R K Pareek & Co.
            </h2>
            <p
              style={{
                fontSize: "0.9rem",
                marginTop: "-0.7rem",
                textShadow: "2px 2px 5px darkslategrey",
              }}
            >
              Chartered Accountants
            </p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse
            id="basic-navbar-nav"
          >
            <Nav className="ms-auto">
              <Nav.Link
                href={"/RKPandCoUI/#home"}
                className={
                  activeLink === "home" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                Who we are
              </Nav.Link>
              <Nav.Link
                href={"/RKPandCoUI/#team"}
                className={
                  activeLink === "team" ? "active navbar-link" : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("team")}
              >
                Team
              </Nav.Link>

              <Nav.Link
                href={"/RKPandCoUI/#services"}
                className={
                  activeLink === "services"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("services")}
              >
                Services
              </Nav.Link>

              <Nav.Link
                href={"/RKPandCoUI/#opportunities"}
                className={
                  activeLink === "opportunities"
                    ? "active navbar-link"
                    : "navbar-link"
                }
                onClick={() => onUpdateActiveLink("opportunities")}
              >
                Opportunities
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to="/RKPandCoUI/#query">
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Navbar.Collapse>
          {/* )} */}
        </Container>
      </Navbar>
    </Router>
  );
};
