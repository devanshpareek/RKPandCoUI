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

let regexp = /android|iphone|kindle|ipad/i;
let details = navigator.userAgent;
export const isMobileDevice = regexp.test(details);

function App() {
  return (
    <div className="App">
      <NavBar />
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: (
              <>
                <Banner />
                <Skills />
                <Services2 />
                <Projects />
                <Contact />
                <Footer showAdminDashboard={true} />
              </>
            ),
          },
          {
            path: "/about-us/history",
            element: <Home display={"history"} />,
          },
          {
            path: "/about-us/vision",
            element: <Home display={"vision"} />,
          },
          {
            path: "/about-us/mission",
            element: <Home display={"mission"} />,
          },
          {
            path: "/about-us/values",
            element: <Home display={"values"} />,
          },
          {
            path: "/about-us/commitments",
            element: <Home display={"commitments"} />,
          },
          {
            path: "/about-us/practice-area",
            element: <Home display={"practice-area"} />,
          },
          {
            path: "/services/TaxAndRegulatory",
            element: <Services serviceName={"TaxAndRegulatory"} />,
          },
          {
            path: "/services/AuditAndAssurance",
            element: <Services serviceName={"AuditAndAssurance"} />,
          },
          {
            path: "/services/CorporateLawServices",
            element: <Services serviceName={"CorporateLawServices"} />,
          },
          {
            path: "/services/AdvisoryServices",
            element: <Services serviceName={"AdvisoryServices"} />,
          },
          {
            path: "/services/FinanceAndAccountingOutsourcingServices",
            element: (
              <Services
                serviceName={"FinanceAndAccountingOutsourcingServices"}
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
//                 serviceName={"FinanceAndAccountingOutsourcingServices"}
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
