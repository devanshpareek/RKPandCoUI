import { FaDiamond } from "react-icons/fa6";

export const specialities = {
  TaxAndRegulatory: (
    <div>
      <h3>Expertise</h3>
      <p>
        <FaDiamond /> Income Tax
      </p>
      <p>
        <FaDiamond /> Goods and Service Tax
      </p>
      <p>
        <FaDiamond /> Customs
      </p>
      <p>
        <FaDiamond /> International Tax
      </p>
      <p>
        <FaDiamond /> Profession Tax
      </p>
    </div>
  ),
  AuditAndAssurance: (
    <div>
      <h3>Expertise</h3>

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
    </div>
  ),
  CorporateLawServices: (
    <div>
      <h3>Expertise</h3>
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
  ),
  AdvisoryServices: (
    <div>
      <h3>Expertise</h3>
      <p>
        {" "}
        <FaDiamond /> Business setup and process development
      </p>
      <p>
        {" "}
        <FaDiamond /> Corporate mergers and acquisitions
      </p>
    </div>
  ),
  AccountingAndBookkeeping: (
    <div>
      <h3>Expertise</h3>
      <p>
        {" "}
        <FaDiamond /> Cloud accounting and financial reporting
      </p>
      <p>
        {" "}
        <FaDiamond /> Reporting dashboard
      </p>
      <p>
        {" "}
        <FaDiamond /> Process and Reporting automation
      </p>
    </div>
  ),
  ComplianceAndRegulatory: (
    <div>
      <h3>Expertise</h3>
      <p>
        {" "}
        <FaDiamond /> Company Formation
      </p>
      <p>
        {" "}
        <FaDiamond /> Stectutory Regulatory Compliance
      </p>
      <p>
        {" "}
        <FaDiamond /> ODI and FDI Compliance
      </p>

      <p>
        {" "}
        <FaDiamond /> SE2 Setup and reportings
      </p>

      <p>
        {" "}
        <FaDiamond /> Employee Benefit Compliance
      </p>
    </div>
  ),
  SpecializedServices: (
    <div>
      <h3>Expertise</h3>
      {[
        "Accurate and well Intime valuation services",
        "Tailor made solutions for ERP",
      ].map((service, index) => (
        <p key={index}>
          <FaDiamond /> {service}
        </p>
      ))}
    </div>
  ),
  VirtualCFOServices: (
    <div>
      <h3>Virtual CFO Services</h3>
      {[
        "Financial Planning & Strategy",
        "Accounting & Compliance",
        "Tax Planning & Compliance",
        "Fundraising & Investor Relations",
      ].map((service, index) => (
        <p key={index}>
          <FaDiamond /> {service}
        </p>
      ))}
    </div>
  ),
};
