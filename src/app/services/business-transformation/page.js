"use client";
import "./business-transformation.css";

export default function BusinessTransformation() {
  return (
    <div className="bt-page">

      {/* ── HERO ── */}
      <section className="bt-hero">
        <div className="bt-hero-content">
          <h1>Transformation<br />Management &amp; Governance</h1>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="bt-overview">
        <h2>Overview</h2>
        <p>
          At Taciti, we specialize in providing comprehensive program and project management
          solutions that drive successful transformations. With a keen focus on program planning,
          budgeting and risk management, we are your dedicated partners in achieving
          transformative goals. Navigating the complex landscape of modern business demands more
          than just vision &ndash; it requires a robust framework of management and governance. Our
          seasoned experts understand the intricacies involved in orchestrating large-scale
          changes. From initial ideation to the final implementation, we offer end-to-end
          solutions that ensure your transformation journey is not only efficient but also
          aligned with your strategic objectives.
        </p>
      </section>

      {/* ── TRANSFORMATION MANAGEMENT SERVICES INCLUDE ── */}
      <section className="bt-services">
        <h2>Transformation Management &amp; Governance Services Include:</h2>
        <div className="bt-services-grid">
          <ul>
            <li>
              <span className="bt-icon" />
              Program and Project Management
            </li>
            <li>
              <span className="bt-icon" />
              Governance Design and Management
            </li>
            <li>
              <span className="bt-icon" />
              Methodology and Tools
            </li>
          </ul>
          <ul>
            <li>
              <span className="bt-icon" />
              Vendor Management
            </li>
            <li>
              <span className="bt-icon" />
              Organizational Change and Learning Management
            </li>
          </ul>
        </div>
      </section>

      {/* ── OUR EXPERTISE CARDS ── */}
      <section className="bt-expertise">
        <h2>Our Expertise</h2>
        <div className="bt-cards-grid">

          {/* Row 1 */}
          <div className="bt-card">
            <h3>Methodology</h3>
            <p>
              Ensuring the teams follow the approved project methodology and adapting it as
              necessary to align with organizational standards.
            </p>
            <p>Creating Agile DevOps methodology with Sprint deliverables.</p>
          </div>
          <div className="bt-card bt-card--active">
            <h3>Budget, Scope &amp; Timeline</h3>
            <p>
              Defining and monitoring the project scope and timeline, ensuring the team stays
              on track, and addressing any scope creep or timeline deviations. Assisting clients
              in creating project budgets.
            </p>
          </div>
          <div className="bt-card">
            <h3>Organizational Change &amp; Learning Management</h3>
            <p>
              Expertise to drive organizational change management and stakeholder enablement.
              Engaging and collaborating with stakeholders throughout the project to maintain
              alignment and secure their necessary involvement and buy-in.
            </p>
          </div>

          {/* Row 2 */}
          <div className="bt-card">
            <h3>Project RAID &amp; RACI</h3>
            <p>
              Managing the project plan, Risks, Assumptions, Issues, Dependencies (RAID) and
              Responsibilities (RACI) matrix for effective oversight and control. Overseeing
              project artifacts and document management.
            </p>
          </div>
          <div className="bt-card bt-card--active">
            <h3>Training &amp; Documentation</h3>
            <p>
              Ensuring adequate training and documentation support are provided to end users
              and stakeholders to facilitate a smooth transition to the new system.
            </p>
          </div>
          <div className="bt-card">
            <h3>Status Reporting</h3>
            <p>
              Generating and distributing regular status reports to stakeholders, keeping them
              informed about the project&apos;s progress and any relevant updates.
            </p>
          </div>

          {/* Row 3 */}
          <div className="bt-card">
            <h3>Managing Milestones</h3>
            <p>
              Identifying and tracking crucial project milestones to assess progress and
              ensure timely delivery of project objectives.
            </p>
          </div>
          <div className="bt-card">
            <h3>Pre and Post Go-live Support</h3>
            <p>
              Coordinating with the vendor to ensure adequate support is available to manage
              and resolve issues that arise before and after go-live.
            </p>
          </div>
          <div className="bt-card">
            <h3>Continuous Improvement</h3>
            <p>
              Identifying areas for improvement throughout the implementation and establishing
              mechanisms for continuous improvement post go-live.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
