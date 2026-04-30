"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [description, setDescription] = useState("");
  const [isOpenIndustries, setIsOpenIndustries] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isOpenServices, setIsOpenServices] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);
  const [isAgreed, setIsAgreed] = useState(false);

  const industries = [
    "Manufacturing",
    "Life Sciences",
    "Consumer Packaged Goods",
    "Hi-Tech",
    "Utilities",
    "Other",
  ];

  const services = [
    "Strategy & Advisory",
    "ERP Led Transformations",
    "Transformation Management & Governance",
    "Human Capital Management",
    "Technology Services",
    "Cyber Security",
    "Other",
  ];

  const industriesRef = useRef(null);
  const servicesRef = useRef(null);

  const toggleIndustriesDropdown = () => {
    setIsOpenIndustries(!isOpenIndustries);
  };

  const toggleServicesDropdown = () => {
    setIsOpenServices(!isOpenServices);
  };

  const handleIndustryClick = (industry) => {
    setSelectedIndustry(industry);
    setIsOpenIndustries(false);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsOpenServices(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpenIndustries && !industriesRef.current.contains(event.target)) {
        setIsOpenIndustries(false);
      }
      if (isOpenServices && !servicesRef.current.contains(event.target)) {
        setIsOpenServices(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpenIndustries, isOpenServices]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !company ||
      !country ||
      !selectedIndustry ||
      !selectedService
    ) {
      setMessage("Please fill out all required fields.");
      return;
    }

    if (!isAgreed) {
      setMessage("Please agree to the Privacy Policy.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/mailform", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          company,
          country,
          description,
          selectedIndustry,
          selectedService,
        }),
      });

      const data = await res.json();
      setMessage(
        data.success ? "Message sent successfully" : "Error sending message",
      );

      if (data.success) {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setCountry("");
        setDescription("");
        setSelectedIndustry(null);
        setSelectedService(null);
      }
    } catch (error) {
      setMessage("An error occurred.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <div id="contacthffkui">
        <div className="contactbg">
          <div className="contactbox">
            <h1 className="contacttext">Contact Us</h1>
          </div>
        </div>

        <div className="mainLineImgcont">
          <div className="contacttextc">
            <div className="contactheadfirst">
              To make requests for further information, contact us
            </div>
          </div>
          <div className="contacttextc">
            <text className="contactheadsub">
              We will respond within 2 business days of receiving your inquiry.
            </text>
          </div>

          <form className="Contact-form" onSubmit={handleSubmit}>
            <div className="contacttextc">
              <div className="contacttextwidth">
                <input
                  className="contactheadsec col-12 input-blue-bottom-border"
                  placeholder="First Name*"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div className="contacttextwidth">
                <input
                  className="contactheadsec col-12 input-blue-bottom-border"
                  placeholder="Last Name*"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="contacttextc">
              <div className="contacttextwidth">
                <input
                  className="contactheadsec col-12 input-blue-bottom-border"
                  placeholder="Email*"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="contacttextwidth">
                <input
                  className="contactheadsec col-12 input-blue-bottom-border"
                  placeholder="Phone No.*"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>

            <div className="contacttextc">
              <div className="contacttextwidth">
                <input
                  className="contactheadsec col-12 input-blue-bottom-border"
                  placeholder="Company Name*"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </div>

              <div className="contacttextwidth">
                <input
                  className="contactheadsec col-12 input-blue-bottom-border"
                  placeholder="Country*"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </div>

            <div className="contacttextc mt-4">
              <div className="contacttextwidth">
                <div className="custom-dropdown" ref={servicesRef}>
                  <div
                    className="dropdown-header"
                    onClick={toggleServicesDropdown}
                  >
                    {selectedService || "Select Services"}
                    {isOpenServices ? (
                      <MdArrowDropUp className="mdarrow" />
                    ) : (
                      <MdArrowDropDown className="mdarrow" />
                    )}
                  </div>
                  {isOpenServices && (
                    <ul className="dropdown-options">
                      {services.map((service, index) => (
                        <li
                          key={index}
                          onClick={() => handleServiceClick(service)}
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="contacttextwidth">
                <div className="custom-dropdown" ref={industriesRef}>
                  <div
                    className="dropdown-header"
                    onClick={toggleIndustriesDropdown}
                  >
                    {selectedIndustry || "Select Industries"}
                    {isOpenIndustries ? (
                      <MdArrowDropUp className="mdarrow" />
                    ) : (
                      <MdArrowDropDown className="mdarrow" />
                    )}
                  </div>
                  {isOpenIndustries && (
                    <ul className="dropdown-options">
                      {industries.map((industry, index) => (
                        <li
                          key={index}
                          onClick={() => handleIndustryClick(industry)}
                        >
                          {industry}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <div className="contacttextc">
              <div className="contacttextwidthdes">
                <textarea
                  className="col-12 input-blue-bottom-borderone"
                  placeholder="Please describe your requirements in brief"
                  style={{ resize: "vertical" }}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div
              className="contacttextc"
              style={{
                width: "100%",
                margin: "0 auto",
                padding: "0 0",
              }}
            >
              <label
                className="privacy-policy-label"
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  cursor: "pointer",
                  marginLeft: "0px",
                }}
              >
                <input
                  type="checkbox"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                  style={{
                    marginRight: "8px",
                    marginTop: "6px",
                  }}
                />
                <span
                  className="contactheadsec"
                  style={{ fontSize: "16px", color: "#000", lineHeight: "1.5" }}
                >
                  By submitting, I agree to Taciti Consulting's
                  <Link
                    href="/privacy"
                    style={{
                      marginLeft: "4px",
                      color: "#007bff",
                      textDecoration: "none",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>

            <div className="contacttextc mt-4">
              <button
                className="Contactsendmsg"
                type="submit"
                disabled={!isAgreed || isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </div>

            {message && (
              <div className="contacttextc mt-4">
                <p>{message}</p>
              </div>
            )}
          </form>
          <div className="our-offices-section">
            <h2 className="offices-title">Our Offices</h2>

            <div className="offices-row">
              <div className="office-col">
                <h3>Plano, TX, USA</h3>
                <p>Suite #225</p>
                <p>8580 Belleview Drive,</p>
                <p>Plano, TX 75024, USA</p>
                <p>Contact No. : +1 214 440 2463</p>
                <p>Email : info@taciti.com</p>
              </div>

              <div className="office-col">
                <h3>Pune, India</h3>
                <p>C-607, Teerth Technospace, Bengaluru-Mumbai</p>
                <p>Highway, Baner, Pune – 411045, India.</p>
                <p>Contact No. : 020 46781571</p>
                <p>Email : info@taciti.com</p>
              </div>

              <div className="office-col">
                <h3>Hyderabad, India</h3>
                <p>Trendz JR, 5B, Survey No:31-36, Vittal Rao</p>
                <p>Nagar, Madhapur, Hyderabad-500081, India</p>
                <p>Contact No. : 040 47082631</p>
                <p>Email : info@taciti.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
