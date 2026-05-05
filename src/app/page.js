import "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div id="Home">
      {/* HERO */}
      <div className="landingBox">
        <div className="textBox textBox1">
          <h1 className="headhero">
            Empowering <br /> Digital <br /> Transformations
          </h1>
          <div className="descripitioncustom">
            Our expertise lies in providing end-to-end digital transformation
            services for businesses. Our unbiased advisory approach helps our
            clients grow and succeed in their industries. Our services include
            Strategy and Advisory, Process Re-engineering and Optimization and
            Technology Implementations.
          </div>
        </div>
      </div>

      {/* BLUE BG SECTIONS */}
      <div className="mainLineImg">
        {/* ABOUT US */}
        <div id="About" className="AboutUs">
          <div className="AboutUsBox">
            <h1 className="headTxt">About Us</h1>
            <h2 className="detailTxt">
              We Specialize In Business <br /> &amp; Technology Consulting
            </h2>
            <p className="para">
              Founded in 2019 as DPCon Solutions by enterprise professionals
              with over 25 years of experience,{" "}
              <br className="block" />
              we have recently undertaken a rebranding exercise and changed the
              firm&apos;s name to Taciti Consulting. <br className="block" />
              We offer unbiased advisory services and comprehensive end-to-end
              digital transformation solutions.
              <br className="block" />
              We have worked with some of the biggest brands across the globe
              through process and technology innovations,{" "}
              <br className="block" />
              helping them flourish as well as adding value to the internal and
              external stakeholders.
            </p>
            <Link href="/contact-us/">
              <button className="ContactBtn">Contact Us</button>
            </Link>
          </div>
        </div>

        {/* RECENT CLIENT ENGAGEMENTS */}
        <div id="Services" className="AboutUs">
          <div className="AboutUsBox">
            <h1 className="headTxt">Recent Client Engagements</h1>
            <h2 className="detailTxt2">
              End-to-End Digital Transformation Services
            </h2>
            <div className="container cont-sx mb-3">
              <div className="row">
                <div className="col-md-4">
                  <img
                    src="/images/orderCash.png"
                    className="cardImgRce"
                    height="110"
                    width="110"
                    alt="Order to Cash"
                  />
                  <h1 className="carHeadTxt">
                    Order-To-Cash <br /> Transformation
                  </h1>
                  <p className="parain">
                    A recent collaboration with a client from the environmental
                    and life sciences industry involved an impactful
                    &quot;Order-to-Cash Assessment and Process Improvement
                    Initiative&quot;.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="/images/businessImg.png"
                    className="cardImgRce"
                    height="110"
                    width="110"
                    alt="Business Transformation"
                  />
                  <h1 className="carHeadTxt">
                    Business Transformation
                    <br /> Through Cloud
                  </h1>
                  <p className="parain">
                    We spearheaded a worldwide transformation of a Learning
                    Management System (LMS) for a prominent global technology
                    leader.
                  </p>
                </div>
                <div className="col-md-4">
                  <img
                    src="/images/sap.png"
                    className="cardImgRce"
                    height="110"
                    width="110"
                    alt="SAP S/4HANA"
                  />
                  <h1 className="carHeadTxt">
                    SAP S/4HANA Led <br /> Digital Transformation
                  </h1>
                  <p className="parain">
                    We have been selected as a strategic ERP transformation
                    partner, we&apos;re streamlining global operations with SAP
                    S/4HANA for a global manufacturer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CASE STUDIES */}
        <div id="Industries" className="AboutUs">
          <div className="AboutUsBox">
            <h1 className="headTxt">Case Studies</h1>
            <h2 className="detailTxt2">Our Projects Make Us Proud</h2>
            <div className="container cont-sx">
              <div className="row">
                <div className="col-lg-4 col-md-6 col-12">
                  <div className="cardInCase">
                    <div className="cardhead">
                      <img
                        src="/images/stratergy.svg"
                        height="210"
                        width="100"
                        className="cardImgCase"
                        alt="Strategy & Advisory"
                      />
                    </div>
                    <div className="cardbody">
                      <h1 className="caseheadTxt">Strategy &amp; Advisory</h1>
                      <p className="casePara">
                        Optimizing working capital, an <br /> Order-To-Cash
                        transformation for a leading life sciences major
                      </p>
                      <Link
                        href="/case-studies/strategy-advisory"
                        style={{ textDecoration: "none" }}
                      >
                        <h2 className="caseStudy">
                          Relevant Case Studies
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="rgba(8, 106, 216, 1)"
                            className="bi bi-arrow-right mx-3"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                          </svg>
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="cardInCase">
                    <div className="cardhead">
                      <img
                        src="/images/erp.svg"
                        height="210"
                        width="100"
                        className="cardImgCase"
                        alt="ERP Transformation"
                      />
                    </div>
                    <div className="cardbody">
                      <h1 className="caseheadTxt">ERP Transformation</h1>
                      <p className="casePara">
                        A large scale SAP S/4HANA-led <br />
                        digital transformation for a US-based manufacturer
                      </p>
                      <Link
                        href="/case-studies/erp-transformation"
                        style={{ textDecoration: "none" }}
                      >
                        <h2 className="caseStudy">
                          Relevant Case Studies
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="rgba(8, 106, 216, 1)"
                            className="bi bi-arrow-right mx-3"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                          </svg>
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12">
                  <div className="cardInCase">
                    <div className="cardheadpng">
                      <img
                        src="/images/thumbnail7.png"
                        height="200"
                        width="500"
                        alt="Technology Services"
                        className="cardheadtech"
                      />
                    </div>
                    <div className="cardbody">
                      <h1 className="caseheadTxt">Technology Services</h1>
                      <p className="casePara">
                        Empowering innovation with <br /> No-Code/Low-Code (MS
                        Power Platform) for a manufacturing leader
                        <br />
                      </p>
                      <Link
                        href="/case-studies/technology-services"
                        style={{ textDecoration: "none" }}
                      >
                        <h2 className="caseStudy">
                          Relevant Case Studies
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="rgba(8, 106, 216, 1)"
                            className="bi bi-arrow-right mx-3"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fillRule="evenodd"
                              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                          </svg>
                        </h2>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link href="/case-studies">
              <button className="ContactBtn">Show All</button>
            </Link>
          </div>
        </div>
      </div>

      {/* STATS — Incremental Improvements */}
      <div id="Increamental" className="page-section incremental-section">
        <div className="xaxisSlide">
          <div className="contentBox">
            <h1 className="incremanetalHeadTxt">
              We are passionate about accelerated <br /> and incremental
              improvements
            </h1>

            {/* Desktop */}
            <div className="borderROundedRec mobileNone">
              <div className="innerBox">
                <img src="/images/client.png" height="70" width="70" alt="Clients" />
                <div className="contentCard">
                  <h1 className="num">11</h1>
                  <h1 className="text">Clients</h1>
                </div>
              </div>
              <div className="innerBox">
                <img src="/images/completed.png" height="70" width="70" alt="Completed" />
                <div className="contentCard">
                  <h1 className="num">24</h1>
                  <h1 className="text">Completed Projects</h1>
                </div>
              </div>
              <div className="innerBox">
                <img src="/images/ongoing.png" height="70" width="70" alt="Ongoing" />
                <div className="contentCard">
                  <h1 className="num">36</h1>
                  <h1 className="text">Ongoing Projects</h1>
                </div>
              </div>
              <div className="innerBox">
                <img src="/images/expert.png" height="70" width="70" alt="Experts" />
                <div className="contentCard">
                  <h1 className="num">220+</h1>
                  <h1 className="text">Experts at work</h1>
                </div>
              </div>
            </div>

            {/* Mobile */}
            <div className="borderROundedRec pcNone">
              <div>
                <div style={{ display: "flex", justifyContent: "space-around" }}>
                  <div className="innerBox" style={{ flexDirection: "column", justifyContent: "center" }}>
                    <img src="/images/client.png" height="70" width="70" alt="Clients" />
                    <div className="contentCard">
                      <h1 className="num" style={{ textAlign: "center" }}>11</h1>
                      <h1 className="text" style={{ textAlign: "center" }}>Clients</h1>
                    </div>
                  </div>
                  <div className="innerBox" style={{ flexDirection: "column" }}>
                    <img src="/images/completed.png" height="70" width="70" alt="Completed" />
                    <div className="contentCard">
                      <h1 className="num" style={{ textAlign: "center" }}>24</h1>
                      <h1 className="text" style={{ textAlign: "center" }}>Completed Projects</h1>
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                  <div className="innerBox" style={{ flexDirection: "column" }}>
                    <img src="/images/ongoing.png" height="70" width="70" alt="Ongoing" />
                    <div className="contentCard">
                      <h1 className="num" style={{ textAlign: "center" }}>36</h1>
                      <h1 className="text" style={{ textAlign: "center" }}>Ongoing Projects</h1>
                    </div>
                  </div>
                  <div className="innerBox" style={{ flexDirection: "column" }}>
                    <img src="/images/expert.png" height="70" width="70" alt="Experts" />
                    <div className="contentCard">
                      <h1 className="num" style={{ textAlign: "center" }}>220+</h1>
                      <h1 className="text" style={{ textAlign: "center" }}>Experts at work</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PARTNERSHIPS & CERTIFICATIONS */}
      <div className="bookBox page-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12 text-center pt-5">
              <div className="d-flex flex-column align-items-center">
                <h2 className="fw-bold mb-4">
                  Our <span className="text-primary fw-bold">Partnership</span>
                </h2>
                <div className="d-flex justify-content-center gap-4 gap-md-5 flex-wrap">
                  <div className="text-center">
                    <img
                      src="/images/SAP_Silver_Partner_R.png"
                      alt="SAP Silver Partner"
                      className="img-fluid"
                      style={{ maxWidth: "200px" }}
                    />
                    <p className="mt-2 mb-0">Silver Partner</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="/images/SecurityBridge-logo-tm-grey.png"
                      alt="Security Bridge"
                      className="img-fluid"
                      style={{ maxWidth: "260px" }}
                    />
                    <p className="mt-2 mb-0">Silver Partner</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 col-12 text-center pt-5 pt-md-5">
              <div className="d-flex flex-column align-items-center">
                <h2 className="fw-bold mb-4">
                  Our <span className="text-primary fw-bold">Certifications</span>
                </h2>
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 gap-md-5">
                  <img
                    src="/images/CCPA Compliance Badge_Dark.png"
                    alt="CCPA"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                  <img
                    src="/images/SOC 2 Type 2 Social Post Image (3).png"
                    alt="SOC 2 Type 2"
                    className="img-fluid"
                    style={{ maxWidth: "150px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
