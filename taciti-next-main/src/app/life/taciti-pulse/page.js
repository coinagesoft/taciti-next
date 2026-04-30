"use client";

import React, { useState } from "react";

export default function TacitiPulse() {
  const testimonials = [
    {
      name: "Ronit Oswal",
      position: "Senior Business Systems Analyst",
      description: `Being a part of Taciti for the past four years has been an incredibly enriching experience. I have had countless opportunities to grow both professionally and personally, learning new skills and participating in various activities. The supportive and friendly environment, along with the amazing colleagues always willing to help, made my journey truly memorable. I am grateful for the experiences and proud to have been part of the Taciti family.`,
    },
    {
      name: "Swapnil Saini",
      position: "Practice Head",
      description: `Have had a great experience working at Taciti as an employer. Taciti has built an outstanding work environment that fosters collaboration, innovation, and continuous growth. The structured processes, strong leadership, and employeefocused initiatives create an engaging and productive workplace. We continue to expand our team and have been instrumental in attracting and retaining top-tier talent. The commitment to excellence, seamless recruitment process, and dedication to aligning the right talent with the right roles have made a significant impact on our success`,
    },
    {
      name: "Pallavi Angalakuduru",
      position: "Consultant",
      description: `Working at Taciti for the past four years has been an enriching experience. The company provides an excellent learning environment, offering continuous opportunities for professional growth. The team leaders like Madhusudan Pallerla, Ram Battula are highly experienced and possess strong leadership qualities, always guiding and supporting us to excel in our roles. The collaborative work culture and exposure to challenging projects have significantly contributed to my career development. I truly appreciate being a part of such a dynamic and growth-oriented`,
    },
    {
      name: "Kiran Chandak",
      position: "Business System Analyst",
      description: `I have had the privilege of working at Taciti Consulting for almost four years, and it has been an incredibly rewarding experience. From the very beginning, I was welcomed into a supportive and collaborative team that encouraged both my professional and personal growth. The company's commitment to innovation and excellence has helped me develop new skills and expand my knowledge in ways I never imagined when I first joined. Throughout my tenure, I have had the opportunity to work on a variety of projects that have allowed me to enhance my problem-solving abilities and sharpen my expertise. The leadership team at Taciti Consulting is exceptionally supportive, always providing guidance when needed, while empowering employees to take initiative and make meaningful contributions. The work culture here is one of mutual respect and trust, which has fostered a sense of belonging and a strong team spirit. Whether working on independent tasks or collaborating on larger projects, I have always felt valued as a part of the team. I am incredibly grateful for the opportunities Taciti Consulting has given me, and I look forward to continuing my career with them. I highly recommend this company to anyone seeking a challenging and rewarding work environment.`,
    },
    {
      name: "Dilip Pandey",
      position: "Project Manager",
      description: `Joining Taciti has been one of the most rewarding decisions of my career. Coming from a financial project management background, moving into IT was a big shift but with the incredible support I received, especially from Alok Shrivastava, it became a fulfilling and smooth journey. In the last four years, I have grown both professionally and personally. What truly sets Taciti apart is its empowering and inclusive culture. You are encouraged to speak up, take ownership, and grow alongside the organization it feels like you are building something with the company, not just working for it. Leadership genuinely cares about your growth, and that kind of support makes all the difference. Mistakes are met with understanding, and challenges are met with people who stand by you. The focus on work-life balance also ensures long-term well-being. I am proud to be part of Taciti and excited for all that lies ahead.`,
    },
    {
      name: "Devendra Khankar",
      position: "Senior Consultant",
      description: `Being part of Taciti has been a great learning experience. The company provides a collaborative and supportive environment that encourages growth and innovation. I have had the opportunity to work on impactful projects, take on new challenges, and continuously expand my skills. The leadership is approachable, and the team culture makes every project rewarding. I truly value the opportunities I have had here and look forward to contributing further to the company's success.`,
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
      />

      {/* Hero Section */}
      <section className="intro-section">
        <div className="intro-box">
          <h1 className="main-title">Taciti Pulse</h1>
        </div>
      </section>

      {/* <div className="row text-center my-5">
                <h2 className='life-heading'>Life @ Taciti - Taciti Pulse</h2>
            </div> */}

      <section className="life-sections employee-journey-section" id="employee">
        <div
          className="row text-center"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <h2 className="life-heading">Employee's Journey</h2>
        </div>

        <div className="container">
          <div
            className="row d-flex justify-content-center align-items-center my-4"
            style={{ marginLeft: "auto", marginRight: "auto" }}
          >
            <div className="col-md-12 col-12 mb-4">
              <p className="workforce-text">
                Hear directly from our team as they share their journeys,
                experiences, and growth at Taciti. These stories reflect the
                heart of our culture—where every voice is valued, and every
                milestone is celebrated.
              </p>
            </div>

            <div className="masonry-grid">
              {testimonials.map((item, i) => (
                <div className="masonry-item" key={i}>
                  <div className="card testimonial-card">
                    <div className="card-body">
                      <h5 className="card-title card-title-life">
                        {item.name}
                        <br />
                        <span style={{ fontSize: "12px", fontWeight: 300 }}>
                          {item.position}
                        </span>
                      </h5>

                      <div
                        className="card-text-wrapper"
                        style={{
                          maxHeight: expandedIndex === i ? "1000px" : "150px",
                        }}
                      >
                        <p className="card-text card-body-life">
                          {item.description}
                        </p>
                      </div>

                      {item.description.length > 250 && (
                        <button
                          className="btn btn-link p-0 mt-2"
                          onClick={() => toggleExpand(i)}
                          style={{
                            fontSize: "14px",
                            textDecoration: "none",
                            color: "#013470",
                            fontWeight: "bold",
                          }}
                        >
                          {expandedIndex === i ? "See Less" : "See More"}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Styles */}
      <style jsx>{`
        /* Hero Section */
        .intro-section {
          background: url("/images/taciti-pulse.png") no-repeat;
          height: 40vw;
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
        .workforce-text {
          padding-left: 100px;
          padding-right: 100px;
        }
        .employee-journey-section {
          padding-top: 0;
          padding-bottom: 40px;
        }

        .testimonial-card {
          width: 100%;
          height: 100%;
          border: 1px solid #e9ecef;
          border-radius: 8px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }

        .card-text-wrapper {
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
          position: relative;
        }

        .card-title-life {
          font-family: "futuraptMedium";
          font-size: 20px;
        }

        .card-body-life {
          font-family: "Roboto-light";
          font-size: 18px;
          color: #4e5764;
          text-align: justify;
        }

        .masonry-grid {
          column-count: 3;
          column-gap: 1rem;
        }
        .masonry-item {
          break-inside: avoid;
          margin-bottom: 1rem;
          display: inline-block;
          width: 100%;
        }

        @media (max-width: 992px) {
          .masonry-grid {
            column-count: 2;
          }
        }

        @media (max-width: 767px) {
          .intro-box {
            margin-left: 20px;
            padding-top: 60px;
          }
          .main-title {
            font-size: 40px;
          }
          .masonry-grid {
            column-count: 1;
          }
          .workforce-text {
            padding-left: 15px;
            padding-right: 15px;
            text-align: center;
          }
            
        }
      `}</style>
    </div>
  );
}
