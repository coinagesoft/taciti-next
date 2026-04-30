"use client";
import "./talent-management.css";

export default function TalentManagementTransformation() {
  return (
    <div className="tm-page">

      {/* ── HERO ── */}
      <section className="tm-hero">
        <div className="tm-hero-content">
          <h1>Human Capital<br />Management</h1>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
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

      {/* ── TACITI'S CORE OFFERINGS ── */}
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

          <div className="tm-card tm-card--active">
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

      {/* ── TALENT MANAGEMENT FRAMEWORK ── */}
      <section className="tm-framework">
        <h2>Talent Management Framework</h2>
        <div className="tm-framework-wrap">
          <img
            src="/Taciti assets/assets-62.png"
            alt="Talent Management Framework"
            className="tm-framework-img"
          />
        </div>

        {/* Fallback steps (shown if image fails) */}
        <div className="tm-framework-steps" aria-hidden="true">
          <div className="tm-step">
            <div className="tm-step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8l4 4-4 4"/>
              </svg>
            </div>
            <div className="tm-step-box">Consulting, BSA, Roadmap</div>
          </div>
          <span className="tm-step-arrow">→</span>
          <div className="tm-step">
            <div className="tm-step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <div className="tm-step-box">Time &amp; Attendance</div>
          </div>
          <span className="tm-step-arrow">→</span>
          <div className="tm-step">
            <div className="tm-step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2a7 7 0 0 1 7 7c0 5-7 13-7 13S5 14 5 9a7 7 0 0 1 7-7z"/>
              </svg>
            </div>
            <div className="tm-step-box">Learning &amp; Development</div>
          </div>
          <span className="tm-step-arrow">→</span>
          <div className="tm-step">
            <div className="tm-step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <div className="tm-step-box">Performance Management</div>
          </div>
          <span className="tm-step-arrow">→</span>
          <div className="tm-step">
            <div className="tm-step-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <div className="tm-step-box">Succession Planning</div>
          </div>
        </div>
      </section>

      {/* ── KEY LMS SOLUTIONS ── */}
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
