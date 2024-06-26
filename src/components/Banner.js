import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import 'animate.css';
import TrackVisibility from "react-on-screen";
import AllInOne from "../Images/allinone.jpeg";
import { useLocation } from "react-router-dom";
import { isMobileDevice } from "../App";

export const Banner = () => {
  const search = useLocation().search;
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section
      style={{
        ...(isMobileDevice &&
          document
            .getElementById("basic-navbar-nav")
            ?.classList?.contains("show") && { paddingTop: "260px" }),
      }}
      className="banner"
      id="home"
    >
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h1>Who we are</h1>
                  <p>
                    Founded in 2012, R K Pareek & Co. has grown to become a
                    trusted and respected provider of comprehensive auditing,
                    taxation, accounting, financial advisory and consultancy
                    services. We are dedicated to guiding our clients through
                    the complexities of the financial world with expertise,
                    integrity, and a commitment to excellence. Our firm prides
                    itself on delivering customized solutions that address the
                    unique challenges and opportunities of each client.
                  </p>{" "}
                  <button>
                    <a href="/about-us/history">Read More</a>{" "}
                    <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div>
                  <img
                    style={{
                      height: "24rem",
                    }}
                    src={AllInOne}
                    alt="Header Img"
                  />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
