"use client";
import React, { useState } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Deepak Bundela",
    role: "CEO & Managing Partner",
    img: "/Taciti assets/Deepak-1.webp",
    synopsis: [
      "With a remarkable career spanning over 25 years, Deepak emerges as a seasoned professional in management consulting, entrepreneurship and business leadership. His journey predominantly revolves around multinational manufacturing, life sciences and consumer packaged goods (CPG) sectors, where he has spearheaded impactful business transformation initiatives.",
      "Renowned for his unwavering commitment to clients, Deepak stands as a trusted advisor known for delivering unbiased guidance and exceptional consulting skills that consistently translate into tangible value. His reputation for honoring commitments underscores his credibility. Notably, he has been a driving force behind the conceptualization and execution of cutting-edge solutions, harnessing NextGen technologies to revolutionize the manufacturing and supply chain domains.",
      "Deepak's expertise extends to areas such as mergers and acquisitions integration, business process advisory and solutioning, enterprise and solution architecture, transformation advisory and the successful execution of digital transformation programs.",
      "Deepak is a distinguished individual holding an MBA from the prestigious Indian Institute of Management (IIM). He also possesses an undergraduate degree in Engineering from VNIT, Nagpur, India. His expertise extends to the realm of academia and industry, as he has presented at the CWG conference on Variant Configuration topics. Furthermore, Deepak's impactful contributions shine through in his design and delivery of cutting-edge solutions for Clinical Supply Chains, showcasing his commitment to innovative problem-solving.",
    ],
    journey: [
      "Worked for over 30+ clients across diversified industries in different capacities to help them adopt S/4HANA",
      "Helped clients in transforming business processes by adopting new technologies and delivering improved KPIs across value chains",
      "Assessed current IT ecosystems across people, processes and technologies to recommend improvements for delivering accelerated outcomes",
      "Worked as a solution architect across Manufacturing and Supply Chain areas to develop innovative end-to-end solutions and deliver successfully",
    ],
  },
  {
    id: 2,
    name: "Alok Shrivastava",
    role: "Managing Partner",
    img: "/Taciti assets/Alok-scaled-1.webp",
    synopsis: [
      "Alok carries 27 years of experience in program management, engagement management, service delivery management, DevOps, and business process consulting for SAP transformation and migration programs.",
      "Alok believes in driving from the front to engage client stakeholders in defining the right level of requirements to enable business-critical solutioning for global customers in Manufacturing, Utility, Oil & Gas and Retail. Projects supported by Alok have helped clients usher in next-generation growth.",
      "With a master's degree in International Business, Alok has additional credentials such as PSM Certified, ITIL Certified, Certified Engagement Manager, Certified Cornerstone On-Demand Analyst, etc.",
    ],
    journey: [
      "Customer Success Lead for S/4 Implementation Project for Leader of Architectural products",
      "Program Manager for the implementation of a cloud solution for Enterprise Learning Management System for a Hi-tech Customer, helping define the DevOps model",
      "Program Director for SAP Budgeting Application at the 3rd largest school district in the USA, Houston ISD, a Public sector client",
      "Engagement Director for a large portfolio of engagements for General Electric covering packaged software Implementations, process transformation, SAP RUN in DevOps model, >1000 resources engagement",
      "Business Process Advisor for Account Receivable process transformation at a large Power and Renewable energy client, reducing $4B cash outstanding",
      "Transition Manager for SAP AMS services post-Alstom & GE Power merger, among the top 10 SAP landscape",
      "Business Project Manager for Manufacturing and Sales Process Transformation for Cameron International, A Schlumberger company",
      "Master Data Management evaluation and implementation lead at NOL Singapore",
    ],
  },
  {
    id: 3,
    name: "Ram Battula",
    role: "Managing Partner",
    img: "/Taciti assets/Ram-1.webp",
    synopsis: [
      "Ram has more than 20 years of experience in SAP Technology Consulting and Product Development. He advises clients embarking on digital transformation with a specific focus on defining SAP S/4HANA adoption strategy, designing SAP enterprise architecture and setting up bimodal IT. He takes pride in solving complex business problems with innovative solutions utilizing the latest technology enablers. He also has a strong background in designing and deploying market-leading software products.",
      "Ram holds a bachelor's degree in Finance & Accounting from Andhra University and a Master's Degree in Computer Applications & Programming.",
    ],
    journey: [
      "Developed SAP S/4HANA Adoption strategy for Large-Scale Global Customers across industries and geographies - like Large Global Consumer Electronics Manufacturer & Retailer, Large Beverage and Consumer Product Manufacturing Company, Four large Utility Companies in the US, Multiple Global Manufacturing & CPG Companies",
      "Ideated, Designed & Developed Market-Leading Custom Code Remediation Product, deployed and used by more than 100+ Customers to accelerate their transition to SAP S/4HANA",
      "Lead Architect for the first-ever SAP S/4HANA Brownfield Conversion Project for a Global Consumer Goods Manufacturer",
      "Lead Technical Architect for the first-ever SAP S/4HANA Public Cloud Implementation for a Professional Services Company based in the US",
      "Experience across Manufacturing, Utilities, CPG, Professional Services, Mining, Media and Automotive Industries",
    ],
  },
  {
    id: 4,
    name: "Rishi Handa",
    role: "Managing Partner",
    img: "/Taciti assets/Rishi-scaled-1.webp",
    synopsis: [
      "Rishi has over 25 years of experience in management consulting and ERP-driven transformations. He excels in designing and executing global transformation programs, improving business processes, assessing technology needs and creating cloud adoption strategies for transformation projects. His successful projects include ERP transformations, complex M&A deals, strategic divestitures, in-depth ERP/CRM evaluations and adopting cloud solutions. Rishi is skilled at building teams, forging strategic partnerships, and fostering innovation to enhance market competitiveness.",
      "Rishi holds an MBA and an undergraduate degree in Engineering. In addition, he completed the Global Leadership and Management Program from Stanford University, received a Cloud Digital Leadership certificate from Google and completed an Artificial Intelligence-Implications for Business Strategy certificate program from MIT.",
    ],
    journey: [
      "Led an Order-to-Cash transformation for a US-based Environmental Sciences major to help improve the working capital situation by reducing days outstanding and streamlining finance operating expenses",
      "Lead partner for a global ERP-led transformation for a Manufacturing Client to harmonize systems and processes across business units",
      "Led an ERP roadmap, program planning, budgeting project for a large US-based retailer",
      "Led a global ERP program including transformation design, implementation for a fashion and apparel major",
    ],
  },
  {
    id: 5,
    name: "Lalit Bajaj",
    role: "Solution Head",
    img: "/Taciti assets/lalit-1.webp",
    synopsis: [
      "As an accomplished IT lead with over 21 plus years of experience across diverse industries, Lalit brings a wealth of expertise in delivering innovative and transformative solutions to drive efficiency, productivity and profitability for businesses.",
      "Throughout his career, Lalit has consistently demonstrated a deep understanding of SAP technologies and their applications, allowing him to effectively lead and collaborate with cross-functional teams. With a strong track record of implementing SAP solutions across multiple sectors and geographies, including but not limited to manufacturing, retail, chemical, pharmaceutical and logistics, he has developed a keen ability to tailor solutions to address specific industry challenges and requirements.",
      "Over the years, he has cultivated a customer-centric approach, focusing on building strong relationships with clients and stakeholders to align solutions with their strategic objectives and maximize their return on investment. Continuously staying abreast of emerging trends and technologies within the SAP/non-SAP ecosystem, with a passion for driving innovation and digital transformation.",
    ],
    journey: [
      "Solution Architect for one of the first green field SAP S/4 implementations of a leading Electric industry giant",
      "Business process advisory to validate the feasibility and viability of concepts for the digital transformation journey for Hi-tech and pharma clients",
      "Managing a large-scale team to provide round-the-clock global support for one of the manufacturing leaders",
      "Manufacturing COE lead to implement and rollout SAP projects across APAC and the Middle East for a Hi-tech industry client",
      "Logistics lead to implement warehouse and transportation processes in the European region for a leading retail business house",
      "Part of multiple SAP R/3 implementation, rollout, optimization and support projects across the globe for leading industry leaders",
    ],
  },
  {
    id: 6,
    name: "Madhusudan Pallerla",
    role: "Head of Technical Services",
    img: "/Taciti assets/Madhusudhan-2.webp",
    synopsis: [
      "Madhusudan is an accomplished SAP Technical Architect and Technical Manager with a career spanning over 25 years in the realm of SAP development, upgrades, migrations and S/4HANA implementations. His passion for staying updated with the latest trends in SAP technology has driven his success in leading mission-critical projects and building high-performing global teams. With a dedication to delivering optimized software solutions, he prides himself on being a hands-on leader with a keen eye for quality-driven results.",
      "Madhusudan holds a Bachelor's degree in Engineering from Bangalore University. Over the years, he has continued to expand his knowledge and skills through various SAP courses (OpenSAP) and certifications, such as becoming a Certified Scrum Master (CSM) by SCRUM ALLIANCE and achieving SAP's ASAP Methodology certification.",
      "His journey in the SAP landscape has been defined by continuous learning, leadership and a commitment to delivering exceptional results. He takes pride in his ability to adapt to dynamic challenges and leverage his expertise to drive innovation and success in the SAP ecosystem.",
    ],
    journey: [
      "Throughout his professional journey, he had the privilege of working with esteemed organizations, handling diverse SAP projects across industries",
      "From greenfield S/4HANA implementations to system migrations and upgrades, he has consistently demonstrated his expertise in crafting innovative solutions and leading cohesive teams",
      "His experience extends to various modules and dimensions of SAP applications and he has been involved in key projects focusing on S/4 Greenfield, S/4HANA Migrations and Upgrades, CFIN, Fiori, Data Migration and Managing SAP Security, Basis and Functional team, among others",
    ],
  },
  {
    id: 7,
    name: "Satya Mullapudi",
    role: "Business Process Advisory",
    img: "/Taciti assets/Satya.webp",
    synopsis: [
      "Satya is an accomplished Digital Transformation Leader with a career spanning over 30 years in the areas of ERP Platforms consolidation, transformation, global business process optimization advisory and solution architecture, and integration. Business value-led global transformations and implementations across manufacturing, CPG, life sciences, IM&C, Utility and Energy industries.",
      "He holds a Bachelor's Degree in Engineering from Bangalore University and Executive MBA in Operations Research and Marketing. Over the years, he has continued to expand his Leadership Skills by attending MIT Leadership program and Global Business Process and Integrated Solution through various Seminars, Workshops organized by industry, standards and research and SAP.",
      "In summary, his critical experience and journey in ERP Platforms and Transformation shaped by interactions with industry Leaders, Process Owners, Technology Vendors coupled with continuous learning, Adoptive Leadership and value-led Innovative solutions.",
    ],
    journey: [
      "He had the privilege of working with Fortune 50 and 500 organizations, consisting of CX level advisory, transformation roadmap to meet current and future market imperatives",
      "Led several greenfield S/4HANA implementations and ERP platform consolidation programs",
      "Played Enterprise Architect and Solution Architect roles focusing on industry-leading practices, using innovative and latest technologies, to drive productivity, user experience and optimized process, data, system interactions to deliver desired business results",
    ],
  },
  {
    id: 8,
    name: "Nikhil Nahar",
    role: "Head of Business Operations",
    img: "/Taciti assets/Nikhil-1.webp",
    synopsis: [
      "Nikhil is a dynamic and results-driven professional boasting a remarkable 14-year journey across strategic marketing, business development, brand and product management and event management.",
      "Throughout his career, he has accumulated a wealth of knowledge in various domains, including business operations, sales strategy, revenue generation, event management, and business strategies. His core strengths lie in crafting effective business and sales strategies, as well as executing impactful offline marketing campaigns.",
      "Nikhil is an electronics engineer complemented by a post-graduate diploma in marketing from Pune University. His professional journey spans diverse industries, infusing a distinctive and innovative outlook into the Taciti brand.",
    ],
    journey: [
      "He embarked on his professional journey in the banking and non-banking financial company (NBFC) sector, where he assumed roles focused on sales and business development",
      "For over a decade, he has been an integral part of the media and entertainment industry, assuming diverse roles that have allowed him to navigate the ever-evolving technological landscape",
      "With a profound understanding of the industry's dynamics, he has demonstrated expertise in crafting effective sales strategies tailored to a diverse market",
      "Adept at leadership, he boasts extensive experience in successfully managing teams of varying sizes across business operations, sales, and marketing domains",
    ],
  },
];

const coreValues = [
  {
    id: 1,
    title: "Integrity",
    description:
      "We uphold absolute integrity, transparency, and fairness in everything we do, building trust with our clients, teams, and partners.",
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our work, delivering the highest quality outcomes and setting new standards of success.",
  },
  {
    id: 3,
    title: "Innovation",
    description:
      "We embrace innovation to solve challenges, drive growth, and continuously improve for our clients and ourselves.",
  },
  {
    id: 4,
    title: "Respect & Teamwork",
    description:
      "We foster respect and teamwork, believing that the best solutions come from working together and valuing every voice.",
  },
  {
    id: 5,
    title: "Customer-Centricity",
    description:
      "Our customers are at the heart of everything we do. We focus on delivering value, building relationships, and ensuring their success.",
  },
];

export default function AboutUs() {
  const [popup, setPopup] = useState(null);

  return (
    <div>
      {/* HERO */}
      <section className="intro-section">
        <div className="intro-box">
          <h1 className="main-title">About Us</h1>
        </div>
      </section>

      {/* KNOW US */}
      <section className="life-section know-section">
        <div className="container text-center">
          <h2 className="section-heading">Know us</h2>
          <p className="know-text">
            Founded in 2019 as DPCon Solutions by enterprise professionals with
            over 25 years of experience. Recently we have undertaken a
            rebranding exercise and have changed the firm&apos;s name to Taciti
            Consulting.
          </p>
          <p className="know-text">
            At Taciti we offer unbiased and informed advisory services to
            empower businesses to adapt and grow in the ever-evolving digital
            landscape. We have worked with some of the biggest brands across
            the globe. Whether you&apos;re seeking strategic insights,
            innovative solutions, or practical implementation strategies, our
            mission is to support you in achieving your digital transformation
            goals and staying ahead of the competition. We are committed to
            delivering results and building long-term relationships with our
            clients.
          </p>
        </div>
      </section>

      {/* VISION / MISSION / VALUES */}
      <section className="vmv-section">
        <div className="vmv-quote-left">&ldquo;</div>
        <div className="vmv-quote-right">&rdquo;</div>
        <div className="container vmv-container">
          <div className="vmv-bg-shape vmv-bg-shape--1"></div>
          <div className="vmv-bg-shape vmv-bg-shape--2"></div>

          <div className="vmv-row">
            <div className="vmv-item">
              <div className="vmv-label">VISION</div>
              <div className="vmv-divider"></div>
              <p className="vmv-text">
                At Taciti, our vision is to cultivate a community of passionate
                and innovative minds, dedicated to providing unparalleled
                customer experience. We firmly believe in delivering tangible
                business value, transcending beyond mere services.
              </p>
            </div>
            <div className="vmv-item">
              <div className="vmv-label">MISSION</div>
              <div className="vmv-divider"></div>
              <p className="vmv-text">
                To be a trusted transformation partner for both Business and IT
                organizations by providing unbiased consulting to unearth
                &ldquo;True Transformations&rdquo; that drive higher
                organizational growth.
              </p>
            </div>
            <div className="vmv-item">
              <div className="vmv-label">VALUES</div>
              <div className="vmv-divider"></div>
              <p className="vmv-text">
                Customer centricity, Transparency, Innovative solutions,
                On-Time Delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="values-section">
        <div className="values-wrap">
          <h2 className="values-title">Our Values</h2>
          <div className="values-grid">
            {coreValues.map((value) => (
              <article key={value.id} className="value-card">
                <h3 className="value-name">{value.title}</h3>
                <p className="value-text">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR TEAM */}
      <section className="team-section">
        <div className="team-header">
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-summary">
            A reverse pyramid model with a highly experienced team of
            professionals, committed to designing industry solutions based on
            leading best practices and client needs. Deep expertise across
            business process re-engineering, benchmarking, large-scale
            transformation management, roadmap definition, and implementations.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="team-cell"
              onClick={() => setPopup(member)}
            >
              <img src={member.img} alt={member.name} className="team-photo" />
              <div className="team-overlay">
                <span className="team-name">{member.name}</span>
                <span className="team-role">{member.role}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP MODAL */}
      {popup && (
        <div
          role="dialog"
          aria-modal="true"
          className="fade modal show"
          tabIndex={-1}
          style={{ display: "block" }}
          onClick={() => setPopup(null)}
        >
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-background"></div>
              <div className="popupContainer">
                <div className="popup modal-body">
                  <div className="closeButton" onClick={() => setPopup(null)}>
                    Close
                  </div>
                  <div className="teamCard">
                    <div className="head">
                      <h2 className="text-center">{popup.name}</h2>
                      <div className="inner-design">
                        <p>{popup.role}</p>
                      </div>
                      <div
                        className="content-design"
                        style={{
                          color: "rgb(78, 87, 100)",
                          fontSize: "18px",
                          fontFamily: "Roboto-light",
                        }}
                      >
                        <p>
                          <strong>Professional Synopsis</strong>
                        </p>
                        {popup.synopsis?.map((paragraph, index) => (
                          <p key={`${popup.id}-synopsis-${index}`}>{paragraph}</p>
                        ))}
                        <p>
                          <strong>Professional Journey</strong>
                        </p>
                        <ul>
                          {popup.journey?.map((item, index) => (
                            <li key={`${popup.id}-journey-${index}`}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* HERO */
        .intro-section {
          background: url("/images/about-us-hero.png") no-repeat;
          height: 100vh;
          width: 100vw;
          background-size: cover;
          background-position: top;
        }
        .intro-box {
          margin-left: 150px;
          padding-top: 100px;
        }
        .main-title {
          color: #fff;
          font-size: 55px;
          font-family: "futuraptMedium";
        }

        /* KNOW US */
        .know-section {
          background: #fff;
        }
        .life-section {
          padding: 60px 0;
        }
        .section-heading {
          font-size: 1.9rem;
          font-weight: bold;
          margin-bottom: 24px;
          color: #013470;
        }
        .know-text {
          font-size: 14.5px;
          color: #4e5764;
          line-height: 1.78;
          text-align: left;
          margin-bottom: 16px;
          font-family: "Roboto", sans-serif;
        }

        /* VISION / MISSION / VALUES */
        .vmv-section {
          background: #eef4fb;
          padding: 70px 0;
          position: relative;
          overflow: hidden;
        }
        .vmv-quote-left {
          position: absolute;
          top: 20px;
          left: 36px;
          font-size: 130px;
          color: #174c93;
          opacity: 0.12;
          font-family: Georgia, serif;
          line-height: 1;
          user-select: none;
        }
        .vmv-quote-right {
          position: absolute;
          bottom: 0;
          right: 36px;
          font-size: 130px;
          color: #174c93;
          opacity: 0.12;
          font-family: Georgia, serif;
          line-height: 1;
          user-select: none;
        }
        .vmv-container {
          position: relative;
        }
        .vmv-bg-shape {
          position: absolute;
          background: rgba(23, 76, 147, 0.055);
          border-radius: 4px;
        }
        .vmv-bg-shape--1 {
          width: 55%;
          height: 110%;
          top: -5%;
          right: -4%;
          transform: skewX(-14deg);
        }
        .vmv-bg-shape--2 {
          width: 32%;
          height: 80%;
          top: 10%;
          right: 10%;
          transform: skewX(-14deg);
          background: rgba(23, 76, 147, 0.035);
        }
        .vmv-row {
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 2;
        }
        .vmv-item {
          display: grid;
          grid-template-columns: 150px 2px 1fr;
          align-items: start;
          gap: 0 36px;
          padding: 34px 0;
          border-bottom: 1px solid rgba(23, 76, 147, 0.14);
        }
        .vmv-item:last-child {
          border-bottom: none;
        }
        .vmv-label {
          font-size: 17px;
          font-weight: 800;
          color: #013470;
          font-family: "Futura PT Bold", sans-serif;
          letter-spacing: 1px;
          padding-top: 2px;
          text-align: right;
        }
        .vmv-divider {
          width: 2px;
          background: #174c93;
          align-self: stretch;
          min-height: 20px;
          border-radius: 2px;
        }
        .vmv-text {
          font-size: 14.5px;
          color: #4e5764;
          line-height: 1.78;
          font-family: "Roboto", sans-serif;
          margin: 0;
          text-align: justify;
        }

        /* OUR VALUES */
        .values-section {
          background: #eef4fb;
          padding: 12px 0 70px;
        }
        .values-wrap {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .values-title {
          margin: 0 0 24px;
          text-align: center;
          color: #013470;
          font-size: 40px;
          line-height: 1.15;
          font-family: "futuraptbold", sans-serif;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.4px;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }
        .value-card {
          background: #fff;
          border: 1px solid rgba(1, 52, 112, 0.14);
          border-radius: 8px;
          padding: 24px 20px;
          box-shadow: 0 8px 20px rgba(1, 52, 112, 0.06);
        }
        .value-name {
          margin: 0 0 10px;
          color: #013470;
          font-size: 24px;
          line-height: 1.2;
          font-family: "futuraptbold", sans-serif;
          font-weight: 700;
        }
        .value-text {
          margin: 0;
          color: #4e5764;
          font-size: 16px;
          line-height: 1.55;
          font-family: "Roboto", sans-serif;
        }

        /* MEET OUR TEAM */
        .team-section {
          background: #f2f5f8 url("/images/bg-about-us.webp") no-repeat right
            center;
          background-size: contain;
          padding: 30px 0 70px;
        }
        .team-header {
          max-width: 1320px;
          margin: 0 auto 34px;
          padding: 0 24px;
          text-align: center;
        }
        .team-title {
          color: #013470;
          font-size: 54px;
          line-height: 1.06;
          margin: 0 0 20px;
          font-family: "futuraptbold", sans-serif;
          font-weight: 700;
        }
        .team-summary {
          margin: 0 auto;
          max-width: 1240px;
          font-size: 20px;
          line-height: 1.5;
          color: #4e5764;
          font-family: "Roboto-Light", sans-serif;
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 24px;
        }
        .team-cell {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 4 / 4.8;
          background: #d9dee7;
        }
        .team-cell::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.45);
          opacity: 0;
          transition: opacity 0.35s ease;
          z-index: 1;
          pointer-events: none;
        }
        .team-cell:hover::before {
          opacity: 1;
        }
        .team-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
          transition: transform 0.35s ease;
        }
        .team-cell:hover .team-photo {
          transform: scale(1.03);
        }
        .team-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(7, 7, 7, 0.56);
          padding: 10px 14px 8px;
          z-index: 2;
        }
        .team-name {
          display: block;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.15;
          font-family: "Roboto-Bold", sans-serif;
          text-align: center;
        }
        .team-role {
          display: block;
          color: rgba(255, 255, 255, 0.95);
          font-size: 12px;
          line-height: 1.2;
          font-family: "Roboto", sans-serif;
          margin-top: 4px;
          text-align: center;
        }

        /* MODAL */
        .fade.modal.show {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(6, 57, 114, 0.62);
          padding: 24px;
          overflow-y: auto;
          overflow-x: hidden;
        }
        .modal-dialog {
          max-width: 1540px;
          width: 100%;
          margin: 0 auto;
          overflow-x: hidden;
        }
        .modal-content {
          border: none;
          border-radius: 22px;
          background: transparent;
          position: relative;
          overflow: hidden;
          box-shadow: 0 18px 56px rgba(1, 52, 112, 0.38);
        }
        .modal-background {
          position: absolute;
          inset: 0;
          background: #063972;
          opacity: 0.5;
          z-index: 1;
        }
        .popupContainer {
          position: relative;
          width: 100%;
          z-index: 2;
        }
        .popup.modal-body {
          position: relative;
          top: auto;
          left: auto;
          right: auto;
          transform: none;
          background: #f7f8fa !important;
          background-image: none !important;
          background-color: #f7f8fa !important;
          border-radius: 22px;
          max-height: 82vh;
          overflow-y: auto;
          overflow-x: hidden;
          padding: 26px 22px 24px;
          box-shadow: none;
        }
        .popup.modal-body::before {
          content: "";
          position: absolute;
          width: 150%;
          height: 56%;
          left: -28%;
          top: 40%;
          background: rgba(207, 230, 245, 0.9);
          transform: rotate(-12deg);
          pointer-events: none;
          z-index: 1;
        }
        .closeButton {
          position: absolute;
          right: 16px;
          top: 10px;
          z-index: 3;
          cursor: pointer;
          font-size: 18px;
          color: #2f3a4b;
          font-family: "Roboto", sans-serif;
          font-weight: 400;
        }
        .closeButton:hover {
          color: #013470;
        }
        .teamCard {
          position: relative;
          z-index: 2;
          margin-top: 8px;
        }
        .head h2 {
          font-size: 54px;
          line-height: 1.05;
          font-weight: 500;
          color: #013470;
          font-family: "futuraptMedium", sans-serif;
          margin: 14px 0 8px;
          text-align: center;
        }
        .inner-design p {
          font-size: 20px;
          line-height: 1.2;
          color: #4e5764;
          font-weight: 500;
          font-family: "Roboto", sans-serif;
          margin: 0 0 26px;
          text-align: center;
        }
        .content-design {
          position: relative;
          z-index: 2;
          color: #4e5764;
          font-size: 18px;
          line-height: 1.56;
          font-family: "Roboto-Light", sans-serif;
          overflow-x: hidden;
          word-break: break-word;
        }
        .content-design p {
          margin: 0 0 16px;
        }
        .content-design strong {
          color: #445061;
          font-family: "Roboto", sans-serif;
          font-weight: 600;
        }
        .content-design ul {
          margin: 0;
          padding-left: 34px;
        }
        .content-design li {
          margin-bottom: 10px;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .values-title {
            font-size: 34px;
          }
          .values-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .team-title {
            font-size: 42px;
          }
          .team-summary {
            font-size: 18px;
          }
          .team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .fade.modal.show {
            padding: 16px;
          }
          .popup.modal-body {
            max-height: 84vh;
            border-radius: 16px;
            padding: 20px 16px;
          }
          .head h2 {
            font-size: 42px;
          }
          .inner-design p {
            font-size: 18px;
          }
          .content-design {
            font-size: 16px;
          }
        }

        @media (max-width: 767px) {
          .intro-section {
            height: 50vw;
          }
          .intro-box {
            margin-left: 20px;
            padding-top: 50px;
          }
          .main-title {
            font-size: 40px;
          }
          .life-section {
            padding-left: 30px;
            padding-right: 30px;
          }
          .vmv-item {
            grid-template-columns: 1fr;
            gap: 10px 0;
            padding: 22px 0;
          }
          .vmv-label {
            text-align: left;
          }
          .vmv-divider {
            width: 36px;
            height: 2px;
            align-self: auto;
          }
          .vmv-section {
            padding: 40px 20px;
          }
          .team-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .values-section {
            padding: 8px 0 50px;
          }
          .values-title {
            font-size: 30px;
          }
          .values-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .value-card {
            padding: 18px 16px;
          }
          .value-name {
            font-size: 22px;
          }
          .value-text {
            font-size: 15px;
          }
          .team-title {
            font-size: 34px;
          }
          .team-summary {
            font-size: 16px;
            max-width: 95%;
          }
          .fade.modal.show {
            padding: 10px;
          }
          .popup.modal-body {
            max-height: 88vh;
            padding: 18px 14px 16px;
          }
          .head h2 {
            font-size: 32px;
            margin-top: 16px;
          }
          .inner-design p {
            font-size: 16px;
            margin-bottom: 18px;
          }
          .content-design {
            font-size: 14px;
            line-height: 1.5;
          }
          .content-design ul {
            padding-left: 22px;
          }
        }
      `}</style>
    </div>
  );
}
