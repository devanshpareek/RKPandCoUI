import { FaDiamond } from "react-icons/fa6";

export const specialities = {
  TaxAndRegulatory: (
    <div>
      <h4>Tax And Regulatory</h4>
      <p>
        <FaDiamond /> Direct Taxation – Domestic
      </p>
      <p>
        <FaDiamond /> International Taxation
      </p>
      <p>
        <FaDiamond /> Transfer Pricing
      </p>
      <p>
        <FaDiamond /> Indirect Taxation – GST, Excise, Customs
      </p>
    </div>
  ),
  AuditAndAssurance: (
    <div>
      <h4>Audit And Assurance</h4>

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
      <h2>Corporate Law Services</h2>
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
      <h2>Advisory Services</h2>
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
  FinanceAndAccountingOutsourcingServices: (
    <div>
      <h2>Finance and Accounting Outsourcing Services</h2>
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
