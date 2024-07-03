import { FaDiamond } from "react-icons/fa6";

export const specialities = {
  TaxAndRegulatory: (
    <div>
      <h3>Specialities</h3>
      <p>
        <FaDiamond /> Direct Taxation – Domestic
      </p>
      <p>
        <FaDiamond /> Indirect Taxation – GST, Excise, Customs
      </p>
      <p>
        <FaDiamond /> International Taxation
      </p>
      <p>
        <FaDiamond /> Transfer Pricing
      </p>
    </div>
  ),
  AuditAndAssurance: (
    <div>
      <h3>Specialities</h3>

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
  ),
  CorporateLawServices: (
    <div>
      <h3>Specialities</h3>
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
      <h3>Specialities</h3>
      <p>
        {" "}
        <FaDiamond /> Business Advisory
      </p>
      <p>
        {" "}
        <FaDiamond /> Financial Consulting
      </p>
      <p>
        {" "}
        <FaDiamond /> Mergers and Acquisitions
      </p>
      <p>
        {" "}
        <FaDiamond /> Corporate Restructuring
      </p>
    </div>
  ),
  AccountingAndBookkeeping: (
    <div>
      <h3>Specialities</h3>
      <p>
        {" "}
        <FaDiamond /> Financial Statement Preparation
      </p>
      <p>
        {" "}
        <FaDiamond /> Bookkeeping Services
      </p>
      <p>
        {" "}
        <FaDiamond /> Management Reporting
      </p>
    </div>
  ),
  ComplianceAndRegulatory: (
    <div>
      <h3>Specialities</h3>
      <p>
        {" "}
        <FaDiamond /> Company Law Matters
      </p>
      <p>
        {" "}
        <FaDiamond /> Regulatory Compliance
      </p>
      <p>
        {" "}
        <FaDiamond /> Secretarial Services
      </p>
    </div>
  ),
  FinanceAndAccountingOutsourcingServices: (
    <div>
      <h3>Specialities</h3>
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
  ),
};
