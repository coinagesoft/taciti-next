"use client";
import "./cyber-security.css";

export default function CyberSecurity() {
  return (
    <div className="cs-page">

      {/* HERO */}
      <section className="cs-intro-section">
        <div className="cs-intro-box">
          <h1 className="cs-main-title">Cyber Security</h1>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="cs-overview">
        <h2>Overview</h2>
        <p>
          In today&apos;s era, digital transformation is at the forefront of many organizations.
          Quick ROI, digital experiences, and high adoption of cloud, AI and blockchain have
          changed risk postures adversely. SAP solutions are highly adopted due to their
          functionality, scalability and resiliency. However, this introduces inherent risks,
          making cybersecurity paramount.
        </p>
        <p>
          At Taciti, we provide comprehensive risk assessments and tailored security solutions
          for SAP systems. Through rigorous analysis, we mitigate unauthorized access and data
          breaches, fostering a culture of vigilance and resilience. This proactive approach
          safeguards assets and enables organizations to thrive securely in an interconnected
          world.
        </p>
      </section>

      {/* OUR SERVICES */}
      <section className="cs-services">
        <h2>Our Services</h2>
        <p className="cs-services-intro">
          Our primary objective is to fortify the ERP ecosystem, enhance awareness of cyber
          threats, and address compliance shortcomings related to SOX, NIST 800-53, PCI, GDPR,
          and ITAR regulations. We employ a risk-centric methodology aligned with industry best
          practices to meticulously craft a secure landscape.
        </p>

        {/* Top row: 3 cards */}
        <div className="cs-top-grid">

          <div className="cs-card">
            <div className="cs-card-icon">
              <img src="/Taciti assets/assets-13.png" alt="Application Security" />
            </div>
            <h3>Application Security</h3>
            <div className="cs-card-subheading">Role Designing Regulatory Requirements:</div>
            <ul>
              <li><span className="cs-list-icon" aria-hidden="true"></span>SOX Compliance</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>GDPR Compliance</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>ITAR Compliance</li>
            </ul>
            <div className="cs-card-subheading">Privilege Access Management:</div>
            <ul>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Least Privilege Principle</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Role-Based Access Control</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Critical Transaction Monitoring</li>
            </ul>
            <div className="cs-card-subheading">Segregation of Duties (SOD):</div>
            <ul>
              <li><span className="cs-list-icon" aria-hidden="true"></span>SOD Analysis</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Conflict Resolution</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Continuous Monitoring</li>
            </ul>
          </div>

          <div className="cs-card">
            <div className="cs-card-icon">
              <img src="/Taciti assets/assets-14.png" alt="Application Controls" />
            </div>
            <h3>Application Controls</h3>
            <ul>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Business process controls</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>IT General Controls (ITGCs)</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>SOD ruleset</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Controls effectiveness testing</li>
            </ul>
          </div>

          <div className="cs-card">
            <div className="cs-card-icon">
              <img src="/Taciti assets/assets-15.png" alt="GRC" />
            </div>
            <h3>GRC</h3>
            <ul>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Access Control (AC)</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Process Control (PC)</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Business Integrity</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Screening (BIS)</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Integration with IAM solutions (SailPoint, Saviynt) and ServiceNow</li>
            </ul>
          </div>

        </div>

        {/* Bottom row: 2 cards */}
        <div className="cs-bottom-grid">

          <div className="cs-card">
            <div className="cs-card-icon">
              <img src="/Taciti assets/assets-16.png" alt="Data Protection" />
            </div>
            <h3>Data Protection</h3>
            <ul>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Implement data masking solution in SAP ERP for regulatory compliance</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Map data in SAP ERP to adhere to ITAR export control regulations</li>
            </ul>
          </div>

          <div className="cs-card">
            <div className="cs-card-icon">
              <img src="/Taciti assets/assets-18.png" alt="Cyber Security" />
            </div>
            <h3>Cyber Security</h3>
            <ul>
              <li><span className="cs-list-icon" aria-hidden="true"></span>SAP ERP application scanning and monitoring for security vulnerabilities</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Code scanning and hardening for SAP ERP</li>
              <li><span className="cs-list-icon" aria-hidden="true"></span>Operationalizing people, process, and tools for SAP ERP vulnerability management</li>
            </ul>
          </div>

        </div>
      </section>

      {/* GUIDING PRINCIPLES */}
      <section className="cs-principles">
        <h2>Our Guiding Principles / Considerations</h2>
        <p className="cs-principles-intro">
          By adhering to these guiding principles, organizations can ensure a secure SAP
          environment that protects sensitive data, maintains compliance and supports
          business continuity.
        </p>
        <div className="cs-principles-grid">

          <div className="cs-principle-card">
            <h3>Risk Management</h3>
            <p>
              Implement a comprehensive risk management framework to identify, assess and
              mitigate security risks associated with SAP systems. Ensure continuous monitoring
              and regular audits to address emerging threats.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Least Privilege</h3>
            <p>
              Adopt the principle of least privilege by granting users the minimum level of
              access necessary to perform their job functions. Regularly review and adjust
              access rights to prevent unauthorized access.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Segregation of Duties (SoD)</h3>
            <p>
              Enforce segregation of duties to prevent conflicts of interest and reduce the
              risk of fraud. Ensure that no single individual has control over all critical
              aspects of a business process.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Data Protection and Privacy</h3>
            <p>
              Ensure the confidentiality, integrity, and availability of sensitive data within
              SAP systems by implementing data encryption, masking, and anonymization techniques
              to protect personal and business-critical information.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Compliance and Auditability</h3>
            <p>
              Maintain compliance with relevant regulations and standards (e.g., GDPR, SOX,
              HIPAA) by implementing robust security controls and maintaining comprehensive
              audit trails. Facilitate regular security assessments and audits.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Continuous Monitoring and Incident Response</h3>
            <p>
              Establish continuous monitoring mechanisms to detect and respond to security
              incidents in real-time. Develop and maintain an incident response plan to
              address security breaches promptly and effectively.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Security by Design</h3>
            <p>
              Integrate security into the SAP application development lifecycle from the
              outset. Follow secure coding practices, perform regular security testing and
              ensure that security requirements are addressed during design and development.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>User Training and Awareness</h3>
            <p>
              Conduct regular security training and awareness programs for all users to
              promote a security-conscious culture. Ensure that users understand their roles
              and responsibilities in maintaining the security of SAP systems.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Patch Management</h3>
            <p>
              Implement a proactive patch management process to ensure that all SAP systems
              and components are up-to-date with the latest security patches and updates.
              Regularly review and test patches before deployment.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Third-Party Integration Security</h3>
            <p>
              Assess and manage the security of third-party applications and integrations
              with SAP systems. Ensure that third-party solutions comply with organizational
              security policies and standards.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Access Control and Authentication</h3>
            <p>
              Implement strong access control and authentication mechanisms, including
              multi-factor authentication (MFA), to protect SAP systems from unauthorized
              access. Regularly review and update access control policies.
            </p>
          </div>

          <div className="cs-principle-card">
            <h3>Backup and Recovery</h3>
            <p>
              Establish a robust backup and recovery strategy to ensure the availability and
              integrity of SAP data in case of system failures, disasters or cyberattacks.
              Regularly test backup and recovery procedures.
            </p>
          </div>

        </div>
      </section>

      {/* OUR EXPERTISE */}
      <section className="cs-expertise">
        <h2>Our Expertise</h2>
        <div className="cs-expertise-grid">

          <div className="cs-expertise-card">
            <h3>Assessment</h3>
            <ul>
              <li>
                <span className="cs-list-icon" aria-hidden="true"></span>
                Comprehensive analysis and evaluation of existing IT infrastructure and systems
              </li>
              <li>
                <span className="cs-list-icon" aria-hidden="true"></span>
                Strategic recommendations tailored to optimize performance and security
              </li>
              <li>
                <span className="cs-list-icon" aria-hidden="true"></span>
                Actionable insights to enhance operational efficiency and mitigate risks
              </li>
            </ul>
          </div>

          <div className="cs-expertise-card">
            <h3>Digital Transformation</h3>
            <ul>
              <li>
                <span className="cs-list-icon" aria-hidden="true"></span>
                Customized digital strategies aligned with business goals
              </li>
              <li>
                <span className="cs-list-icon" aria-hidden="true"></span>
                Seamless integration of cutting-edge technologies for enhanced productivity and innovation
              </li>
              <li>
                <span className="cs-list-icon" aria-hidden="true"></span>
                Agile adaptation to evolving market trends and customer demands
              </li>
            </ul>
          </div>

          <div className="cs-expertise-card">
            <h3>Managed Services</h3>
            <ul>
              <li>
                <span className="cs-list-icon" aria-hidden="true"></span>
                Proactive monitoring and maintenance to ensure uninterrupted business operations
              </li>
              <li>
                <span className="cs-list-icon" aria-hidden="true"></span>
                Scalable solutions tailored to meet specific organizational needs
              </li>
              <li>
                <span className="cs-list-icon" aria-hidden="true"></span>
                Expert support and guidance to maximize IT investments and minimize downtime
              </li>
            </ul>
          </div>

        </div>
      </section>

    </div>
  );
}
