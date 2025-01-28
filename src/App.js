import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./App/Home/Home";
import { Services2 } from "./components/Services2";
import Services from "./App/Services/Services";
import { useState } from "react";
import Admin from "./App/Admin/Admin";
import Image1 from "../src/Images/HomePageCarouselImage/1. Image/CI1.jpg";
import Image2 from "../src/Images/HomePageCarouselImage/1. Image/CI2.jpg";
import Image3 from "../src/Images/HomePageCarouselImage/1. Image/CI3.jpg";
import Image4 from "../src/Images/HomePageCarouselImage/1. Image/CI4.jpg";
import Image5 from "../src/Images/HomePageCarouselImage/1. Image/CI5.jpg";

import { Container } from "react-bootstrap";
import Carousel from "./components/Carousel/Carousel";

let regexp = /android|iphone|kindle|ipad/i;
let details = navigator.userAgent;
export const isMobileDevice = regexp.test(details);
console.log(isMobileDevice);

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={showModal ? "App App-dull" : "App"}>
      <NavBar />
      <Container
        style={{
          height: "100vh",
          width: "100vw",
          minWidth: "100vw",
          maxWidth:"100vw",
          padding: 0,
          margin: "0",
          marginBottom: "5rem",
          ...(isMobileDevice && {
            marginBottom: "1rem",
          }),
        }}
      >
        <Carousel
          images={[Image1]}
          interval={3000}
          isHomePage={true}
        />
      </Container>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: (
              <>
                <Banner />
                <Services2 />
                <Skills />
                <Projects isMobileDevice={isMobileDevice} />
                <Contact isMobileDevice={isMobileDevice} />
                <Footer
                  showAdminDashboard={true}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </>
            ),
          },
          {
            path: "/admin",
            element: (
              <>
                <Admin showModal={showModal} setShowModal={setShowModal} />
                <Footer
                  showModal={showModal}
                  setShowModal={setShowModal}
                ></Footer>
              </>
            ),
          },
          {
            path: "/about-us/history",
            element: (
              <Home isMobileDevice={isMobileDevice} display={"history"} />
            ),
          },
          {
            path: "/about-us/vision",
            element: (
              <Home isMobileDevice={isMobileDevice} display={"vision"} />
            ),
          },
          {
            path: "/about-us/mission",
            element: (
              <Home isMobileDevice={isMobileDevice} display={"mission"} />
            ),
          },
          {
            path: "/about-us/values",
            element: (
              <Home isMobileDevice={isMobileDevice} display={"values"} />
            ),
          },
          {
            path: "/about-us/commitments",
            element: (
              <Home isMobileDevice={isMobileDevice} display={"commitments"} />
            ),
          },
          {
            path: "/about-us/practice-area",
            element: (
              <Home isMobileDevice={isMobileDevice} display={"practice-area"} />
            ),
          },
          {
            path: "/services/TaxAndRegulatory",
            element: (
              <Services
                isMobileDevice={isMobileDevice}
                serviceName={"TaxAndRegulatory"}
              />
            ),
          },
          {
            path: "/services/AuditAndAssurance",
            element: (
              <Services
                isMobileDevice={isMobileDevice}
                serviceName={"AuditAndAssurance"}
              />
            ),
          },
          // {
          //   path: "/services/CorporateLawServices",
          //   element: <Services serviceName={"CorporateLawServices"} />,
          // },
          {
            path: "/services/AccountingAndBookkeeping",
            element: (
              <Services
                isMobileDevice={isMobileDevice}
                serviceName={"AccountingAndBookkeeping"}
              />
            ),
          },
          {
            path: "/services/ComplianceAndRegulatory",
            element: (
              <Services
                isMobileDevice={isMobileDevice}
                serviceName={"ComplianceAndRegulatory"}
              />
            ),
          },
          {
            path: "/services/AdvisoryServices",
            element: (
              <Services
                isMobileDevice={isMobileDevice}
                serviceName={"AdvisoryServices"}
              />
            ),
          },
          {
            path: "/services/SpecializedServices",
            element: (
              <Services
                isMobileDevice={isMobileDevice}
                serviceName={"SpecializedServices"}
              />
            ),
          },
        ])}
      />
    </div>
  );
}

export default App;

// import { useState } from "react";
// import Admin from "./App/Admin/Admin";
// import Career from "./App/Career/Career";
// import Home from "./App/Home/Home";
// import Query from "./App/Query/Query";
// import Services from "./App/Services/Services";
// import Team from "./App/Team/Team";
// import Navbar from "./Components/Navbar/Navbar";
// import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
// import Footer from "./Components/Footer/Footer";
// import Navbar2 from "./Components/Navbar/Navbar2";

// function App() {
//   const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
//   console.log(isAdminLoggedIn);
//   return (
//     <div className="App">
//       <Navbar2/>

//       {/* <Navbar isAdminLoggedIn={isAdminLoggedIn} />
//       <Home />
//       <Team />
//       <Services />
//       <Query />
//       <Career />
//       <Admin /> */}
//       {/* <RouterProvider
//         router={createBrowserRouter([
//           {
//             path: "/",
//             element: <Home />,
//           },
//           {
//             path: "/home",
//             element: <Home />,
//           },
//           {
//             path: "/team",
//             element: <Team />,
//           },
//           {
//             path: "/query",
//             element: <Query />,
//           },
//           {
//             path: "/career",
//             element: <Career />,
//           },
//           {
//             path: "/admin",
//             element: (
//               <Admin
//                 isAdminLoggedIn={isAdminLoggedIn}
//                 setIsAdminLoggedIn={setIsAdminLoggedIn}
//               />
//             ),
//           },
//           {
//             path: "/services/tax-and-regulatory",
//             element: <Services serviceName={"TaxAndRegulatory"} />,
//           },
//           {
//             path: "/services/audit-and-assurance",
//             element: <Services serviceName={"AuditAndAssurance"} />,
//           },
//           {
//             path: "/services/corporate-law-services",
//             element: <Services serviceName={"CorporateLawServices"} />,
//           },
//           {
//             path: "/services/advisory-services",
//             element: <Services serviceName={"AdvisoryServices"} />,
//           },
//           {
//             path: "/services/finance-and-accounting-outsourcing-services",
//             element: (
//               <Services
//                 serviceName={"SpecializedServices"}
//               />
//             ),
//           },
//         ])}
//       /> */}
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Header from "./Components2/Header";
// import Features from "./Components2/Features";
// import Services from "./Components2/Services";

// const App = () => {
//   return (
//     <div className="App">
//       <Header />
//       <div className="f-heading">
//         <h1>Features</h1>
//         <p>nabbf ksj kskb ksjbksbks </p>
//       </div>
//       <Features />
//       <Services />
//     </div>
//   );
// };

// export default App;
