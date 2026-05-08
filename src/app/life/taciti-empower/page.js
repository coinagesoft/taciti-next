"use client";

import React from "react";
import "./taciti-empower.css";

export default function TacitiEmpower() {
  return (
    <div className="taciti-empower-page">

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />

      {/* HERO */}
      <section className="intro-section">

        <div className="intro-box">
          <h1 className="main-title">Taciti Empower</h1>
        </div>

      </section>

      {/* TACITI EMPOWER TRAINING */}
      <section
        className="life-sections first-section"
        id="taciti-empower"
      >

        <div className="container">

          <div className="row d-flex justify-content-center align-items-center my-4">

            <div className="col-md-6 col-12 my-3 column-with-padding-for-text">

              <h2 className="life-heading mobile-center">
                Taciti Empower Training
              </h2>

              <p>
                We recently welcomed a new group of young SAP professionals
                with a structured induction and training program designed
                to support their transition into consulting roles.
              </p>

              <p>
                The sessions focused on essential skills such as communication
                and client engagement, while also introducing them to our
                workflows, expectations, and collaborative culture.
              </p>

              <p>
                The program reflected our commitment to nurturing talent
                and preparing our teams for long-term success in the SAP domain.
              </p>

            </div>

            <div className="col-md-6 col-12 my-3 text-center">

              <img
                src="/images/life/empower.png"
                className="life-image"
                alt="Taciti Empower training"
              />

            </div>

          </div>

        </div>

      </section>

      {/* SAP DATA MIGRATION COCKPIT */}
      <section className="life-sections dmc-section">

        <div className="container">

          <div className="row text-center">

            <h2 className="life-heading text-white">
              SAP Data Migration Cockpit (DMC)
            </h2>

          </div>

          <div className="row d-flex justify-content-center align-items-center my-4">

            <div className="col-md-6 col-12 my-3 text-center">

              <img
                src="/images/life/data-migration.png"
                className="life-image"
                alt="SAP Data Migration Cockpit"
              />

            </div>

            <div className="col-md-6 col-12 my-3 column-with-padding-for-text">

              <p>
                A comprehensive training session on SAP Data Migration
                Cockpit (DMC) was conducted to help participants understand
                its role in simplifying and streamlining the data migration
                process within SAP.
              </p>

              <p>
                The session covered how DMC minimizes manual effort,
                ensures data accuracy, and supports seamless transfer of
                data across various SAP modules like FICO, SD, MM, and PP.
              </p>

              <p>
                Common challenges faced during data migration were discussed,
                along with how DMC helps overcome them.
              </p>

              <p>
                A live demonstration provided hands-on exposure to the tool,
                giving participants practical insights into its real-time
                functionality and importance in SAP implementation projects.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* ABAP DEBUGGING */}
      <section className="life-sections">

        <div className="container">

          <div className="row text-center">

            <h2 className="life-heading">
              ABAP Debugging – A Brief for Functional Consultants
            </h2>

          </div>

          <div className="row d-flex justify-content-center align-items-center my-4">

            <div className="col-md-6 col-12 my-3 column-with-padding-for-text">

              <p>
                A focused session on ABAP Debugging for Functional Consultants
                was conducted to enhance their ability to analyse and understand
                the flow of SAP programs.
              </p>

              <p>
                The training emphasized how debugging skills help functional
                consultants identify issues in transactions, reports, or
                enhancements—such as incorrect pricing or missing data.
              </p>

              <p>
                It also highlighted how this knowledge enables smoother
                collaboration with technical teams and accelerates
                troubleshooting in support and AMS projects by allowing
                real-time code analysis.
              </p>

            </div>

            <div className="col-md-6 col-12 my-3 text-center">

              <img
                src="/images/life/abab.png"
                className="life-image"
                alt="ABAP Debugging Training"
              />

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}