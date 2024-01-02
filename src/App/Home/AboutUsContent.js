import { FaDiamond } from "react-icons/fa6";

export const aboutUsContent = (display,isMobileDevice) => {
  return display === "history" ? (
    <div>
      <h2>History</h2>
      <p>
        R K Pareek & Co. is founded by CA Rishi Kant Pareek and CA Rachita Jain
        in the year 2012. It is equipped with experienced professional team of
        chartered accountants and having its offices at{" "}
        <b>Jaipur, Kota, Jodhpur and Hyderabad</b>. We have a successful track
        record of conducting a fully diversified <b>“One Stop Solution”</b>
        for all accounting, finance and compliance related needs including
        Statutory Audit, Compliance Audit & Assurance, Internal Audit, Indirect
        Taxation, International Taxation including Transfer Pricing Study,
        Management Consultancy and Outsourcing for Payroll, Inventory
        Accounting, Fixed Assets Management, and development of MIS.
      </p>{" "}
      <p>
        Among our clients are several manufacturing, information technology,
        fantasy sports, foods, entertainment, power generation & distribution
        companies, banks and government organizations. R K Pareek & Co. is
        committed to engagement, team continuity and client satisfaction. We
        concentrate our entire efforts to the task of understanding and
        improving our client’s efficiencies and effectiveness.
      </p>
      <p>
        Our firm’s objective is to provide quality services while maintaining
        close personal ties to our clients and their executive staff. We are
        concerned with the financial wellbeing of our clients, and believe that
        good financial health is the best way to advance the general public's
        interest in a sound economy.
      </p>
    </div>
  ) : display === "vision" ? (
    <div
      style={{
        marginTop: "2rem",
      }}
    >
      <h2>Our Visions:</h2>
      <p>
        {" "}
        <FaDiamond />
        To be a respected & trusted professional firm and recognised as a
        leading service provider in core areas.
      </p>
      <p>
        {" "}
        <FaDiamond />
        To be a reputed & reliable partner for other professional service
        providers.
      </p>
    </div>
  ) : display === "mission" ? (
    <div
      style={{
        marginTop: "2rem",
      }}
    >
      <h2>Our Mission:</h2>
      <p>
        <FaDiamond />
        To consistently provide excellent quality service to clients at all
        times.
      </p>
      <p>
        <FaDiamond /> To leverage the credentials and experience of all internal
        stakeholders and be a partner in external stakeholders growth.
      </p>
    </div>
  ) : display === "values" ? (
    <div
      style={{
        marginTop: "2rem",
      }}
    >
      <h2>Our Values:</h2>
      <p>
        <FaDiamond /> Our core values are driven by integrity, ethical
        practices, independence and mutual respect.
      </p>
    </div>
  ) : display === "commitments" ? (
    <div
      style={{
        marginTop: "2rem",
      }}
    >
      <h2>Our Commitments</h2>
      <p>
        <FaDiamond /> Proactively understand requirements & provide concrete
        resolutions distinguishing client ethos, background & restrictions.
      </p>
      <p>
        <FaDiamond /> Customized client service ensuring timely & quality
        deliverables.
      </p>
      <p>
        <FaDiamond /> Distinctive service parameters having domain experience &
        expertise.
      </p>{" "}
      <p>
        {" "}
        <FaDiamond /> Growth approach.
      </p>
    </div>
  ) : display === "practice-area" ? (
    <div
      style={{
        marginTop: "2rem",
      }}
    >
      <h2
        style={{
          marginTop: "2rem",
        }}
      >
        Practice Area
      </h2>
      <h3
        style={{
          marginTop: "2rem",
        }}
      >
        SERVICES AND SPECIALTIES
      </h3>
      <div>
        <div
          style={{
            display: "flex",
            ...(isMobileDevice && { flexDirection: "column" }),
          }}
        >
          <div
            style={{
              marginTop: "2rem",
            }}
          >
            <h4>Assurance</h4>
            <p>
              {" "}
              <FaDiamond /> Statutory Audits
            </p>
            <p>
              {" "}
              <FaDiamond /> Internal Audits
            </p>
            <p>
              {" "}
              <FaDiamond /> Tax Audits
            </p>
            <p>
              {" "}
              <FaDiamond /> Bank Audits
            </p>
            <p>
              {" "}
              <FaDiamond /> Cost Accounting Record Maintenance
            </p>
            <p>
              {" "}
              <FaDiamond /> Due Dipgence
            </p>
            <p>
              {" "}
              <FaDiamond /> Investigations
            </p>
            <p>
              {" "}
              <FaDiamond /> Certification Services
            </p>
          </div>
          <div
            style={{
              marginTop: "2rem",
            }}
          >
            <h4>Taxation</h4>
            <p>
              {" "}
              <FaDiamond /> Direct Taxation – Domestic
            </p>
            <p>
              {" "}
              <FaDiamond /> International Taxation
            </p>
            <p>
              {" "}
              <FaDiamond /> Transfer Pricing
            </p>
            <p>
              {" "}
              <FaDiamond /> Indirect Taxation – GST, Excise, Customs
            </p>
          </div>
          <div
            style={{
              marginTop: "2rem",
            }}
          >
            <h4>Management Consultancy</h4>
            {[
              "Funds Syndication",
              "Financial Analysis",
              "Business Valuation",
              "Succession Planning",
              "Business Set up & Development",
              "Wealth Management",
              "Arbitration",
            ].map((service, index) => (
              <p key={index}>
                <FaDiamond /> {service}
              </p>
            ))}
          </div>
        </div>
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <h4>Industries Covered</h4>
          {[
            "Information Technology",
            "Food Chain & Processing",
            "Infrastructure",
            "Construction and Realities",
            "Banking and Finance",
            "FMCG",
            "Transport and Logistics",
            "Textile",
            "Manpower Supply",
            "Retail",
            "Foundry and Engineering",
            "Hospitality",
            "Education",
            "Infrastructure",
            "Printing and Packaging",
            "Consumer Durables",
          ].map((industry, index) => (
            <p key={index}>
              <FaDiamond /> {industry}
            </p>
          ))}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
