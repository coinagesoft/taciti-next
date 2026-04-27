"use client";
import "./talent-management.css";

export default function TalentManagementTransformation() {
  return (
    <div className="tm-page">

      {/* HERO */}
      <section className="tm-intro-section">
        <div className="tm-intro-box">
          <h1 className="tm-main-title">Human Capital Management</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="tm-overview">
        <h2>Overview</h2>
        <p>
          Accelerated digital connectivity, transformed talent models, and cognitive technologies
          are driving significant changes in work and workplaces. Jobs are evolving, leading to
          the &quot;unleashed workforce,&quot; where the focus is on redefining work to create new values
          and meaning for employers, employees, stakeholders and our communities at large. Taciti
          Consulting helps ensure that you have everything in place to successfully execute your
          Talent Management Strategy and boost your workforce&apos;s performance in order to achieve
          business goals.
        </p>
      </section>

      {/* CORE OFFERINGS */}
      <section className="tm-offerings">
        <h2>Taciti&apos;s Core Offerings</h2>
        <div className="tm-cards-grid">

          <div className="tm-card">
            <h3>Cornerstone OnDemand (CSOD) Based Solution</h3>
            <ul>
              <li>Dynamic Learning Plans</li>
              <li>Skill Assessment/Validation</li>
              <li>Process Libraries</li>
            </ul>
          </div>

          <div className="tm-card">
            <h3>Integrating COE With CSOD Expertise</h3>
            <ul>
              <li>Real-time Integration Solutions for Enrollments &amp; Completions</li>
            </ul>
          </div>

          <div className="tm-card">
            <h3>Industry Add-ons to Augment CSOD</h3>
            <ul>
              <li>Skill Validations</li>
              <li>AOP-Based Enrollment</li>
              <li>Bulk Printing of Certificates</li>
              <li>RPA for Administrative Tasks</li>
            </ul>
          </div>

          <div className="tm-card">
            <h3>Governance</h3>
            <ul>
              <li>Program Governance</li>
              <li>Service Delivery Management</li>
              <li>Agile DevOps</li>
            </ul>
          </div>

          <div className="tm-card">
            <h3>Reporting</h3>
            <ul>
              <li>Standard &amp; Reporting 2.0</li>
              <li>Power BI Dashboards</li>
              <li>Qlik Reports</li>
            </ul>
          </div>

          <div className="tm-card">
            <h3>CSOD Data Transformation</h3>
            <ul>
              <li>Accelerated Data Preparation</li>
              <li>Utilities for Loading Skill Validations Data</li>
            </ul>
          </div>

          <div className="tm-card">
            <h3>Testing Suite</h3>
            <ul>
              <li>Automated Testing Suite</li>
              <li>E2E Testing Solution</li>
            </ul>
          </div>

          <div className="tm-card">
            <h3>Support Model</h3>
            <ul>
              <li>SLA-driven Release Management</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TALENT MANAGEMENT FRAMEWORK */}
      <section className="tm-framework">
        <h2>Talent Management Framework</h2>
        <div className="tm-framework-steps">
          <div className="tm-step">
            <div className="tm-step-icon">
              <img src="/Taciti assets/assets-08.png" alt="Consulting" />
            </div>
            <div className="tm-step-box">Consulting, BSA, Roadmap</div>
          </div>

          <div className="tm-step-arrow">→</div>

          <div className="tm-step">
            <div className="tm-step-icon">
              <img src="/Taciti assets/assets-09.png" alt="Time and Attendance" />
            </div>
            <div className="tm-step-box">Time &amp; Attendance</div>
          </div>

          <div className="tm-step-arrow">→</div>

          <div className="tm-step">
            <div className="tm-step-icon">
              <img src="/Taciti assets/assets-10.png" alt="Learning and Development" />
            </div>
            <div className="tm-step-box">Learning &amp; Development</div>
          </div>

          <div className="tm-step-arrow">→</div>

          <div className="tm-step">
            <div className="tm-step-icon">
              <img src="/Taciti assets/assets-11.png" alt="Performance Management" />
            </div>
            <div className="tm-step-box">Performance Management</div>
          </div>

          <div className="tm-step-arrow">→</div>

          <div className="tm-step">
            <div className="tm-step-icon">
              <img src="/Taciti assets/assets-12.png" alt="Succession Planning" />
            </div>
            <div className="tm-step-box">Succession Planning</div>
          </div>
        </div>
      </section>

      {/* KEY LMS SOLUTIONS */}
      <section className="tm-lms">
        <h2>Key LMS Solutions</h2>
        <p className="tm-lms-intro">
          Taciti&apos;s team has built multiple add-on solutions to cater to the manufacturing
          (hi-tech and automobile) industry&apos;s needs (skill-based learning) to improve
          efficiencies, revenue and customer satisfaction. These solutions can function on
          major Learning Management System (LMS) applications, including Cornerstone
          OnDemand (CSOD).
        </p>
        <div className="tm-lms-grid">
          <div className="tm-lms-item">
            <h3>Skills Validation Solution</h3>
            <p>
              Integrated solution for skills validation to provide the ability to validate the
              learner&apos;s skills based on multiple criterias (Observer, Self, Manager, TRB).
            </p>
          </div>
          <div className="tm-lms-item">
            <h3>Custom Learning Plan</h3>
            <p>
              Learning plans are based on skill assessments and provide the ability for learners
              to create their own plans based on aspirations or career growth opportunities.
            </p>
          </div>
          <div className="tm-lms-item">
            <h3>Enrollment Solution</h3>
            <p>
              Ability to enroll in a curriculum based on the Annual Operating Plan (AOP) and
              new-hire guidelines defined by the business, driven by revenue targets and employee
              growth plans.
            </p>
          </div>
          <div className="tm-lms-item">
            <h3>Automation Solutions</h3>
            <p>
              Due date updates at the child level are automated through a BOT for certificate
              approval and external user deactivation.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
