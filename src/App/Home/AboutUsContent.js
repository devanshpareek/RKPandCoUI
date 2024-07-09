import { FaDiamond } from "react-icons/fa6";

export const aboutUsContent = (display, isMobileDevice) => {
  return display === "history" ? (
    <div>
      <h2>History</h2>
      <p>
        Founded in 2012, R K Pareek & Co. has grown to become a trusted and
        respected provider of comprehensive auditing, taxation, accounting,
        financial advisory and consultancy services. We are dedicated to guiding
        our clients through the complexities of the financial world with
        expertise, integrity, and a commitment to excellence. Our firm prides
        itself on delivering customized solutions that address the unique
        challenges and opportunities of each client.
      </p>
      <h2>Vision & Mission:</h2>
      <p>
        <FaDiamond />
        <b>Vision: </b> To be the leading provider of innovative and reliable
        financial solutions, empowering our clients to achieve their financial
        aspirations with confidence.
      </p>
      <p>
        {" "}
        <FaDiamond />
        <b>Mission: </b> To offer unparalleled auditing, financial and advisory
        services by combining deep industry knowledge, advanced technology and a
        client-focused approach, ensuring the success and satisfaction of our
        clients.
      </p>
      <h2>Our Values:</h2>
      <p>
        <FaDiamond /> <b>Integrity:</b> We adhere to the highest ethical
        standards, ensuring honesty and transparency in all our dealings.
      </p>
      <p>
        <FaDiamond /> <b>Excellence:</b> We pursue excellence in every task,
        striving to deliver superior services and outcomes.
      </p>
      <p>
        <FaDiamond /> <b>Client-Centric:</b> Our clients' needs and goals are at
        the heart of everything we do.
      </p>
      <p>
        <FaDiamond /> <b>Innovation:</b> We embrace innovation to stay ahead in
        a rapidly changing financial landscape.
      </p>
      <p>
        <FaDiamond /> <b>Collaboration:</b> We believe in the power of teamwork
        and work collaboratively to achieve the best results for our clients.
      </p>
    </div>
  ) : display === "values" ? (
    <div
      style={{
        marginTop: "2rem",
      }}
    ></div>
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
      {/* <h3
        style={{
          marginTop: "2rem",
        }}
      >
        SERVICES AND SPECIALTIES
      </h3> */}
      <div>
        {/* <div
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
        </div> */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <div>
            <h3
              style={{
                marginTop: "2rem",
              }}
            >
              Audit and Assurance
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <p>
                <FaDiamond /> <b> Statutory Audits:</b> Comprehensive audits to
                ensure compliance with regulatory requirements.
              </p>
              <p>
                <FaDiamond /> <b> Internal Audits:</b> Evaluating and improving
                the effectiveness of internal controls and processes.
              </p>
              <p>
                <FaDiamond /> <b> Compliance Audits:</b> Ensuring adherence to
                industry standards and regulations.
              </p>
              <p>
                <FaDiamond /> <b> Risk Management:</b> Identifying and
                mitigating financial and operational risks.
              </p>
            </div>
          </div>

          <div>
            <h3
              style={{
                marginTop: "2rem",
              }}
            >
              Taxation
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <p>
                <FaDiamond /> <b> Direct Taxation:</b> Strategic tax planning,
                compliance, and advisory services.
              </p>
              <p>
                <FaDiamond /> <b> Indirect Taxation:</b> Guidance on GST, VAT,
                and other indirect taxes.
              </p>
              <p>
                <FaDiamond /> <b> International Taxation:</b> Managing
                cross-border tax issues and compliance.
              </p>
              <p>
                <FaDiamond /> <b> Tax Planning and Advisory:</b> Customized tax
                strategies to optimize tax liabilities.
              </p>
            </div>
          </div>

          <div>
            <h3
              style={{
                marginTop: "2rem",
              }}
            >
              Accounting and Bookkeeping
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <p>
                <FaDiamond /> <b> Financial Statement Preparation:</b> Accurate
                and timely preparation of financial statements.
              </p>
              <p>
                <FaDiamond /> <b> Bookkeeping Services:</b> Efficient
                bookkeeping to maintain accurate financial records.
              </p>
              <p>
                <FaDiamond /> <b> Management Reporting:</b> Detailed reports to
                assist in informed decision-making.
              </p>
            </div>
          </div>

          <div>
            <h3
              style={{
                marginTop: "2rem",
              }}
            >
              Advisory Services
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <p>
                <FaDiamond /> <b> Business Advisory:</b> Strategic advice to
                enhance business performance and growth.
              </p>
              <p>
                <FaDiamond /> <b> Financial Consulting:</b> Financial planning
                and analysis to support business objectives.
              </p>
              <p>
                <FaDiamond /> <b> Mergers and Acquisitions:</b> Expert guidance
                through mergers, acquisitions, and corporate restructuring.
              </p>
              <p>
                <FaDiamond /> <b> Corporate Restructuring:</b> Tailored
                solutions for financial restructuring and turnaround management.
              </p>
            </div>
          </div>

          <div>
            <h3
              style={{
                marginTop: "2rem",
              }}
            >
              Compliance and Regulatory
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <p>
                <FaDiamond /> <b> Company Law Matters:</b> Assistance with
                company formation, compliance, and governance.
              </p>
              <p>
                <FaDiamond /> <b> Regulatory Compliance:</b> Ensuring adherence
                to legal and regulatory requirements.
              </p>
              <p>
                <FaDiamond /> <b> Secretarial Services:</b> Comprehensive
                corporate secretarial services.
              </p>
            </div>
          </div>

          <div>
            <h3
              style={{
                marginTop: "2rem",
              }}
            >
              Specialized Services
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <p>
                <FaDiamond /> <b> Virtual CFO Service:</b> Comprehensive Virtual
                CFO services to businesses seeking expert financial management.
              </p>
              <p>
                <FaDiamond /> <b> SEZ Unit Compliance:</b> Compliance and
                process management services to the SEZ Units.
              </p>
              <p>
                <FaDiamond />{" "}
                <b> Payroll and Human Resource Compliance Services:</b> Tailored
                solutions for Payroll and HR compliances services.
              </p>
              <p>
                <FaDiamond /> <b> Forensic Accounting:</b> Investigative
                services to uncover fraud and financial irregularities.
              </p>
              <p>
                <FaDiamond /> <b> Valuation Services:</b> Accurate business
                valuations for various purposes.
              </p>
              <p>
                <FaDiamond /> <b>Due Diligence:</b> Thorough due diligence for
                mergers, acquisitions, and investments.
              </p>
            </div>
          </div>

          <div>
            <h3
              style={{
                marginTop: "2rem",
              }}
            >
              Industries We Serve
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.3rem",
              }}
            >
              <p>
                <FaDiamond /> <b> Manufacturing:</b> Specialized services for
                the manufacturing sector, addressing unique financial and
                operational challenges.
              </p>
              <p>
                <FaDiamond /> <b> Information Technology:</b> Financial
                solutions tailored to the fast-paced IT industry.
              </p>
              <p>
                <FaDiamond /> <b> Healthcare:</b> Advisory and compliance
                services for healthcare providers and institutions.
              </p>
              <p>
                <FaDiamond /> <b> Hotel and Restaurant:</b> Financial solutions,
                advisory and compliance services for hotel and restaurant units.
              </p>
              <p>
                <FaDiamond /> <b> Real Estate:</b> Expert guidance for real
                estate developers, investors, and managers.
              </p>
              <p>
                <FaDiamond /> <b> Financial Services:</b> Comprehensive support
                for financial institutions and services.
              </p>
              <p>
                <FaDiamond /> <b> Retail and Consumer Goods:</b> Financial
                strategies to enhance the performance of retail businesses.
              </p>
              <p>
                <FaDiamond /> <b> Non-Profit Organizations:</b> Financial
                management and compliance services for non-profits.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
