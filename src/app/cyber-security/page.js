"use client";
import "./cyber-security.css";

/* ─── Circular arrow SVG — exactly as in screenshots ─── */
const BulletIcon = () => (
  <svg
    className="cs-list-icon"
    aria-hidden="true"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z" />
  </svg>
);

export default function CyberSecurity() {
  return (
    <div className="cs-page">

      {/* ════════════════════════════════════════
          HERO
          Screenshot 1: Dark blue gradient bg,
          "Cyber Security" white h1 bottom-left,
          illustration top-right,
          curved white bottom cutout
      ════════════════════════════════════════ */}
      <section className="cs-intro-section">
        <div className="cs-intro-box">
          <h1 className="cs-main-title">Cyber Security</h1>
        </div>
      </section>

      {/* ════════════════════════════════════════
          OVERVIEW
          Screenshot 2: centered, white bg
          "Overview" — bold dark blue h2
          Two paragraphs — gray body text
      ════════════════════════════════════════ */}
      <section className="cs-overview">
        <h2>Overview</h2>

        <p>
          In today&apos;s era, digital transformation is at the forefront of
          many organizations. Quick ROI, digital experiences, and high adoption
          of cloud, AI and blockchain have changed risk postures adversely. SAP
          solutions are highly adopted due to their functionality, scalability
          and resiliency. However, this introduces inherent risks, making
          cybersecurity paramount.
        </p>

        <p>
          At Taciti, we provide comprehensive risk assessments and tailored
          security solutions for SAP systems. Through rigorous analysis, we
          mitigate unauthorized access and data breaches, fostering a culture
          of vigilance and resilience. This proactive approach safeguards assets
          and enables organizations to thrive securely in an interconnected
          world.
        </p>
      </section>

      {/* ════════════════════════════════════════
          OUR SERVICES
          Screenshot 2 bottom: "Our Services" orange h2
          Screenshot 3: 3 cards with circular blue icon
          Screenshot 4: 2 cards below
      ════════════════════════════════════════ */}
      <section className="cs-services">
        <h2>Our Services</h2>

        <p className="cs-services-intro">
          Our primary objective is to fortify the ERP ecosystem, enhance
          awareness of cyber threats, and address compliance shortcomings
          related to SOX, NIST 800-53, PCI, GDPR, and ITAR regulations. We
          employ a risk-centric methodology aligned with industry best practices
          to meticulously craft a secure landscape. By doing so, we ensure
          comprehensive protection and resilience against evolving cyber threats,
          enabling organizations to operate securely and efficiently in a
          complex digital environment.
        </p>

        {/* TOP 3-COL — screenshot 3 */}
        <div className="cs-top-grid">

          {/* APPLICATION SECURITY
              Screenshot 3 left: circular icon, bold title,
              sub-headings with plain text "Role Designing...",
              then bullet (•) lists, then next sub-heading */}
          <div className="cs-card">
            <div className="cs-card-icon">
              <img
                src="https://taciti-wp-backend-prd-h3c8hrcfh6hme2fb.southindia-01.azurewebsites.net/wp-content/uploads/2024/06/application-security-19-Copy.png"
                alt="Application Security"
                width={82}
                height={82}
              />
            </div>
            <h3>Application Security</h3>

            <p className="cs-card-subheading">
              Role Designing Regulatory Requirements:
            </p>
            {/* Screenshot 3: disc bullets (•) inside left card */}
            <ul className="cs-bullet-list">
              <li>SOX Compliance</li>
              <li>GDPR Compliance</li>
              <li>ITAR Compliance</li>
            </ul>

            <p className="cs-card-subheading">
              Privilege Access Management:
            </p>
            <ul className="cs-bullet-list">
              <li>Least Privilege Principle</li>
              <li>Role-Based Access Control</li>
              <li>Critical Transaction Monitoring</li>
            </ul>

            <p className="cs-card-subheading">
              Segregation of Duties (SOD):
            </p>
            <ul className="cs-bullet-list">
              <li>SOD Analysis</li>
              <li>Conflict Resolution</li>
              <li>Continuous Monitoring</li>
            </ul>
          </div>

          {/* APPLICATION CONTROLS
              Screenshot 3 center: circular icon, bold title,
              circular arrow icon list, bold text items */}
          <div className="cs-card">
            <div className="cs-card-icon">
              <img
                src="https://taciti-wp-backend-prd-h3c8hrcfh6hme2fb.southindia-01.azurewebsites.net/wp-content/uploads/2024/06/application-control-19.png"
                alt="Application Controls"
                width={82}
                height={82}
              />
            </div>
            <h3>Application Controls</h3>

            <ul>
              <li><BulletIcon /><strong>Business process controls</strong></li>
              <li><BulletIcon /><strong>IT General Controls (ITGCs)</strong></li>
              <li><BulletIcon /><strong>SOD ruleset</strong></li>
              <li><BulletIcon /><strong>Controls effectiveness testing</strong></li>
            </ul>
          </div>

          {/* GRC
              Screenshot 3 right: circular icon, bold title,
              circular arrow icon list, bold text items */}
          <div className="cs-card">
            <div className="cs-card-icon">
              <img
                src="https://taciti-wp-backend-prd-h3c8hrcfh6hme2fb.southindia-01.azurewebsites.net/wp-content/uploads/2024/02/assets-41.png"
                alt="GRC"
                width={82}
                height={82}
              />
            </div>
            <h3>GRC</h3>

            <ul>
              <li><BulletIcon /><strong>Access Control (AC)</strong></li>
              <li><BulletIcon /><strong>Process Control (PC)</strong></li>
              <li><BulletIcon /><strong>Business Integrity</strong></li>
              <li><BulletIcon /><strong>Screening (BIS)</strong></li>
              <li>
                <BulletIcon />
                <strong>
                  Integration with IAM solutions (SailPoint, Saviynt) and ServiceNow
                </strong>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM 2-COL — screenshot 4 top */}
        <div className="cs-bottom-grid">

          {/* DATA PROTECTION */}
          <div className="cs-card">
            <div className="cs-card-icon">
              <img
                src="https://taciti-wp-backend-prd-h3c8hrcfh6hme2fb.southindia-01.azurewebsites.net/wp-content/uploads/2024/06/admin-ajax-1.png"
                alt="Data Protection"
                width={82}
                height={82}
              />
            </div>
            <h3>Data Protection</h3>

            <ul>
              <li>
                <BulletIcon />
                <strong>
                  Implement data masking solution in SAP ERP for regulatory compliance
                </strong>
              </li>
              <li>
                <BulletIcon />
                <strong>
                  Map data in SAP ERP to adhere to ITAR export control regulations
                </strong>
              </li>
            </ul>
          </div>

          {/* CYBER SECURITY */}
          <div className="cs-card">
            <div className="cs-card-icon">
              <img
                src="https://taciti-wp-backend-prd-h3c8hrcfh6hme2fb.southindia-01.azurewebsites.net/wp-content/uploads/2024/06/cyber-security-19.png"
                alt="Cyber Security"
                width={82}
                height={82}
              />
            </div>
            <h3>Cyber Security</h3>

            <ul>
              <li>
                <BulletIcon />
                <strong>
                  SAP ERP application scanning and monitoring for security vulnerabilities
                </strong>
              </li>
              <li>
                <BulletIcon />
                <strong>Code scanning and hardening for SAP ERP</strong>
              </li>
              <li>
                <BulletIcon />
                <strong>
                  Operationalizing people, process, and tools for SAP ERP vulnerability management
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          GUIDING PRINCIPLES
          Screenshot 4 bottom: bold blue h2, centered intro text
          Screenshot 5: 3-col cards, thin border,
          left-aligned bold blue title ~20px,
          gray body text ~15px
          Hover = dark navy card bg + white text
      ════════════════════════════════════════ */}
      <section className="cs-principles">
        <h2>Our Guiding Principles / Considerations</h2>

        <p className="cs-principles-intro">
          By adhering to these guiding principles, organizations can ensure a
          secure SAP environment that protects sensitive data, maintains
          compliance and supports business continuity.
        </p>

        <div className="cs-principles-grid">

          {/* Row 1 — screenshot 5 */}
          <div className="cs-principle-card">
            <h3>Risk Management</h3>
            <p>
              Implement a comprehensive risk management framework to identify,
              assess and mitigate security risks associated with SAP systems.
              Ensure continuous monitoring and regular audits to address
              emerging threats.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Least Privilege</h3>
            <p>
              Adopt the principle of least privilege by granting users the
              minimum level of access necessary to perform their job functions.
              Regularly review and adjust access rights to prevent unauthorized
              access.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Segregation of Duties (SoD)</h3>
            <p>
              Enforce segregation of duties to prevent conflicts of interest
              and reduce the risk of fraud. Ensure that no single individual
              has control over all critical aspects of a business process.
            </p>
          </div>

          {/* Row 2 — screenshot 5 bottom */}
          <div className="cs-principle-card">
            <h3>Data Protection and Privacy</h3>
            <p>
              Ensure the confidentiality, integrity, and availability of
              sensitive data within SAP systems by implementing data
              encryption, masking, and anonymization techniques to protect
              personal and business-critical information.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Compliance and Auditability</h3>
            <p>
              Maintain compliance with relevant regulations and standards
              (e.g., GDPR, SOX, HIPAA) by implementing robust security
              controls and maintaining comprehensive audit trails. Facilitate
              regular security assessments and audits.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Continuous Monitoring and Incident Response</h3>
            <p>
              Establish continuous monitoring mechanisms to detect and respond
              to security incidents in real-time. Develop and maintain an
              incident response plan to address security breaches promptly and
              effectively.
            </p>
          </div>

          {/* Row 3 */}
          <div className="cs-principle-card">
            <h3>Security by Design</h3>
            <p>
              Integrate security into the SAP application development lifecycle
              from the outset. Follow secure coding practices, perform regular
              security testing and ensure that security requirements are
              addressed during the design and development phases.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>User Training and Awareness</h3>
            <p>
              Conduct regular security training and awareness programs for all
              users to promote a security-conscious culture. Ensure that users
              understand their roles and responsibilities in maintaining the
              security of SAP systems.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Patch Management</h3>
            <p>
              Implement a proactive patch management process to ensure that all
              SAP systems and components are up-to-date with the latest security
              patches and updates. Regularly review and test patches before
              deployment.
            </p>
          </div>

          {/* Row 4 */}
          <div className="cs-principle-card">
            <h3>Third-Party Integration Security</h3>
            <p>
              Assess and manage the security of third-party applications and
              integrations with SAP systems. Ensure that third-party solutions
              comply with organizational security policies and standards.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Access Control and Authentication</h3>
            <p>
              Implement strong access control and authentication mechanisms,
              including multi-factor authentication (MFA), to protect SAP
              systems from unauthorized access. Regularly review and update
              access control policies.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Backup and Recovery</h3>
            <p>
              Establish a robust backup and recovery strategy to ensure the
              availability and integrity of SAP data in case of system failures,
              disasters or cyberattacks. Regularly test backup and recovery
              procedures.
            </p>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════
          OUR EXPERTISE
          Screenshot 6: light blue bg (#eaf4fb)
          "Our Expertise" bold blue centered h2
          3 cols: no card border, centered bold blue title,
          circular arrow bullets, normal gray text
      ════════════════════════════════════════ */}
      <section className="cs-expertise">
        <h2>Our Expertise</h2>

        <div className="cs-expertise-grid">

          <div className="cs-expertise-card">
            <h3>Assessment</h3>
            <ul>
              <li>
                <BulletIcon />
                Comprehensive analysis and evaluation of existing IT
                infrastructure and systems
              </li>
              <li>
                <BulletIcon />
                Strategic recommendations tailored to optimize performance
                and security
              </li>
              <li>
                <BulletIcon />
                Actionable insights to enhance operational efficiency and
                mitigate risks
              </li>
            </ul>
          </div>

          <div className="cs-expertise-card">
            <h3>Digital Transformation</h3>
            <ul>
              <li>
                <BulletIcon />
                Customized digital strategies aligned with business goals
              </li>
              <li>
                <BulletIcon />
                Seamless integration of cutting-edge technologies for enhanced
                productivity and innovation
              </li>
              <li>
                <BulletIcon />
                Agile adaptation to evolving market trends and customer demands
              </li>
            </ul>
          </div>

          <div className="cs-expertise-card">
            <h3>Managed Services</h3>
            <ul>
              <li>
                <BulletIcon />
                Proactive monitoring and maintenance to ensure uninterrupted
                business operations
              </li>
              <li>
                <BulletIcon />
                Scalable solutions tailored to meet specific organizational needs
              </li>
              <li>
                <BulletIcon />
                Expert support and guidance to maximize IT investments and
                minimize downtime
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}