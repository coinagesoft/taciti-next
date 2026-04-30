"use client";
import { useState } from "react";
import "./services.css";
import Link from "next/link";

const TABS = [
  {
    id: "strategy",
    label: "Strategy & Advisory",
    heading: "Strategy & Advisory",
    items: [
      "CFO & CIO Advisory",
      "Global Business Process & Technology Assessments",
      "M&A, Divestiture Due Diligence",
      "Digital Transformation Roadmap & Business Case Development",
      "ITSM Advisory",
      "Vendor Selection & Benchmarking",
    ],
    learnMore: "/services/Strategy_Advisory",
    image: "/Taciti assets/assets-24.png",
  },
  {
    id: "erp",
    label: "ERP Transformation",
    heading: "ERP Led Transformation",
    items: [
      "SAP S/4HANA Transformation",
      "ERP System Selection & Roadmap",
      "Large-Scale ERP Program Management",
      "ERP Post Go-Live Support",
      "Business Process Re-Engineering",
      "Data Migration & Integration",
    ],
    learnMore: "/services/process-advisory",
    image: "/Taciti assets/assets-22.png",
  },
  {
    id: "transformation",
    label: "Transformation Management",
    heading: "Transformation Management & Governance",
    items: [
      "Program & Project Management",
      "Change Management & Adoption",
      "PMO Setup & Governance",
      "Organizational Design",
      "Risk & Issue Management",
      "Transformation Reporting & Dashboard",
    ],
    learnMore: "/services/business-transformation",
    image: "/Taciti assets/assets-23.png",
  },
  {
    id: "technology",
    label: "Technology Services",
    heading: "Technology Services",
    items: [
      "Application Development & Modernization",
      "Cloud Migration & Infrastructure",
      "API & Integration Services",
      "Quality Assurance & Testing",
      "DevSecOps & Automation",
      "Data & Analytics Platform",
    ],
    learnMore: "/technology-services",
    image: "/Taciti assets/assets-25.png",
  },
  {
    id: "human",
    label: "Human Capital Management",
    heading: "Human Capital Management",
    items: [
      "HR Transformation Strategy",
      "SAP SuccessFactors Implementation",
      "Talent Acquisition & Onboarding",
      "Learning & Development",
      "Workforce Planning & Analytics",
      "Compensation & Benefits Optimization",
    ],
    learnMore: "/talent-management-transformation",
    image: "/Taciti assets/assets-26.png",
  },
  {
    id: "cyber",
    label: "Cyber Security",
    heading: "Cyber Security",
    items: [
      "Security Architecture & Design",
      "Vulnerability Assessment & Penetration Testing",
      "SAP Security & GRC",
      "Identity & Access Management",
      "Compliance & Risk Management",
      "Security Operations & Incident Response",
    ],
    learnMore: "/cyber-security",
    image: "/Taciti assets/assets-29.png",
  },
];

export default function OurServices() {
  const [activeTab, setActiveTab] = useState("strategy");
  const panel = TABS.find((t) => t.id === activeTab);

  return (
    <div className="os-page">
      {/* HERO */}
      <section className="os-hero">
        <div className="os-hero-content">
          <h1>Our Services</h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="os-intro">
        <h2>Empowering Digital Transformation &amp; Achieving Growth</h2>
        <p>
          Globally, companies operate in rapidly changing and complex
          environments that demand a robust and scalable ecosystem to compete
          and gain a competitive advantage. At Taciti Consulting, we specialize
          in providing end-to-end digital transformation services for
          businesses. Our unbiased advisory approach assists our clients in
          achieving growth and success in their industries.
        </p>
      </section>

      {/* SERVICE TABS */}
      <section className="os-tabs-section">
        {/* Tab bar */}
        <div className="os-tabs-bar">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`os-tab${activeTab === tab.id ? " active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active panel */}
        {panel && (
          <div className="os-panel active">
            <div className="os-panel-left">
              <h3>{panel.heading}</h3>
              <ul>
                {panel.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <Link href={panel.learnMore} className="os-panel-learn">
                Learn more
              </Link>
            </div>
            <div className="os-panel-right">
              <img src={panel.image} alt={panel.heading} />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}