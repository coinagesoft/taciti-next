"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { PiDotsThreeOutline } from "react-icons/pi";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export default function Header() {
  const [isDrawerOpen, setIsDrawerOpen]       = useState(false);
  const [isServicesOpen, setIsServicesOpen]   = useState(false);
  const [isServicesOpenInd, setIsServicesOpenInd] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [openDropdown, setOpenDropdown]       = useState(null);
  const [isCaseStudiesOpen, setIsCaseStudiesOpen] = useState(false);
  const searchInputRef = useRef(null);

  /* ── helpers ── */
  function closeAll() {
    setIsServicesOpen(false);
    setIsServicesOpenInd(false);
    setIsCaseStudiesOpen(false);
    setOpenDropdown(null);
  }

  function toggleDrawer() { setIsDrawerOpen(prev => !prev); }

  const toggleServices = (e) => {
    e.stopPropagation();
    if (isServicesOpen) { closeAll(); }
    else { closeAll(); setIsServicesOpen(true); setOpenDropdown("services"); }
  };

  const toggleServicesInd = (e) => {
    e.stopPropagation();
    if (isServicesOpenInd) { closeAll(); }
    else { closeAll(); setIsServicesOpenInd(true); setOpenDropdown("servicesInd"); }
  };

  const toggleCaseStudies = (e) => {
    e.stopPropagation();
    if (isCaseStudiesOpen) { closeAll(); }
    else { closeAll(); setIsCaseStudiesOpen(true); setOpenDropdown("caseStudies"); }
  };

  const toggleSearch = () => setIsSearchVisible(prev => !prev);

  const handleClickOutside = (event) => {
    if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
      setIsSearchVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* close drawer & all dropdowns on nav */
  const handleNav = () => {
    setIsDrawerOpen(false);
    closeAll();
  };

  return (
    <>
      <div className="headermain">

        {/* ── LOGO ── */}
        <div className="brandLogo">
          <Link href="/" onClick={handleNav}>
            <img src="/images/tactiti.svg" alt="Taciti Logo" height="70" width="160" />
          </Link>
        </div>

        {/* ── DESKTOP NAV ── */}
        <div className="LinkBox">
          <Link href="/about-us/">About Us</Link>

          {/* Our Services */}
          <div className="pb-4 dropdown pt-4">
            <div className="dropdown">
              <Link href="/services/">
                Our Services <RiArrowDropDownLine />
              </Link>
              <div className="dropdown-content">
                <Link href="/services/Strategy_Advisory/">Strategy &amp; Advisory</Link>
                <Link href="/services/process-advisory/">ERP Led Transformation</Link>
                <Link href="/services/business-transformation/">
                  Transformation Management &amp; Governance
                </Link>
                <Link href="/talent-management-transformation/">
                  Human Capital Management
                </Link>
                <Link href="/technology-services/">Technology Services</Link>
                <Link href="/cyber-security/">Cyber Security</Link>
              </div>
            </div>
          </div>

          {/* Industries */}
          <div className="pb-4 dropdown pt-4">
            <div className="dropdown">
              <Link href="/industries/">
                Industries <RiArrowDropDownLine className="arrowiconsx" />
              </Link>
              <div className="dropdown-content">
                <Link href="/industries/manufacturing/">Manufacturing</Link>
                <Link href="/industries/life-science/">Life Sciences</Link>
                <Link href="/industries/consumer-packaged-goods/">Consumer Packaged Goods</Link>
                <Link href="/industries/hi-tech/">Hi-Tech</Link>
                <Link href="/industries/utility/">Utilities</Link>
              </div>
            </div>
          </div>

          {/* Case Studies */}
          <div className="pb-4 dropdown pt-4">
            <div className="dropdown">
              <Link href="/case-studies/">
                Case Studies <RiArrowDropDownLine />
              </Link>
              <div className="dropdown-content">
                <Link href="/case-studies/erp-transformation">ERP Transformation</Link>
                <Link href="/case-studies/strategy-advisory">Strategy &amp; Advisory</Link>
                <Link href="/case-studies/technology-services">Technology Services</Link>
              </div>
            </div>
          </div>

          <Link href="/life/">Life @ taciti</Link>
          <Link href="/contact-us/">Contact Us</Link>
        </div>

        {/* ── HAMBURGER BUTTON ── */}
        <div className="drawerToggle">
          <img
            src="/images/bars.svg"
            height="25"
            width="25"
            alt="Menu"
            className="threeBars"
            onClick={toggleDrawer}
            style={{ cursor: "pointer" }}
          />
          <PiDotsThreeOutline className="searchbtn d-none" onClick={toggleSearch} />
        </div>

        {/* Search popup */}
        {isSearchVisible && (
          <div ref={searchInputRef} className="searchInputContainer">
            <input className="inputd" type="text" />
            <div className="searchIconContainer">
              <FaSearch className="searchiconPopup" />
            </div>
          </div>
        )}

        {/* ── MOBILE DRAWER ── */}
        <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
          <div className="drawerContent">

            {/* Drawer header */}
            <div className="crossBtnRight">
              <img
                src="/images/tactiti.svg"
                height="60"
                width="100"
                alt="Taciti"
                className="crossbtn"
                onClick={toggleDrawer}
                style={{ cursor: "pointer" }}
              />
              <img
                src="/images/cross.svg"
                height="30"
                width="30"
                alt="Close"
                className="crossbtn"
                onClick={toggleDrawer}
                style={{ cursor: "pointer" }}
              />
            </div>

            <div className="Rahil">

              {/* About Us */}
              <Link href="/about-us/" className="drawerLink" onClick={handleNav}>
                About Us
              </Link>

              {/* Our Services accordion */}
              <div className="dropdown">
                <div className="drawerLinkRow" onClick={toggleServices}>
                  <Link
                    href="/our-services/"
                    className="drawerLink"
                    onClick={handleNav}
                  >
                    Our Services
                  </Link>
                  <span className="toggle-sub-menu">
                    {openDropdown === "services"
                      ? <RiArrowDropUpLine className="RiArrowDropUpLineSx" />
                      : <RiArrowDropDownLine className="RiArrowDropDownLineSx" />}
                  </span>
                </div>
                {isServicesOpen && (
                  <div className="innerDropdownContent">
                    <Link href="/services/Strategy_Advisory/" onClick={handleNav}>
                      Strategy &amp; Advisory
                    </Link>
                    <Link href="/process-advisory/" onClick={handleNav}>
                      ERP Led Transformation
                    </Link>
                    <Link href="/business-transformation/" onClick={handleNav}>
                      Transformation Management &amp; Governance
                    </Link>
                    <Link href="/technology-services/" onClick={handleNav}>
                      Technology Services
                    </Link>
                    <Link href="/talent-management-transformation/" onClick={handleNav}>
                      Human Capital Management
                    </Link>
                    <Link href="/cyber-security/" onClick={handleNav}>
                      Cyber Security
                    </Link>
                  </div>
                )}
              </div>

              {/* Industries accordion */}
              <div className="dropdown">
                <div className="drawerLinkRow" onClick={toggleServicesInd}>
                  <Link
                    href="/industries/"
                    className="drawerLink"
                    onClick={handleNav}
                  >
                    Industries
                  </Link>
                  <span className="toggle-sub-menu">
                    {openDropdown === "servicesInd"
                      ? <RiArrowDropUpLine className="RiArrowDropUpLineSx" />
                      : <RiArrowDropDownLine className="RiArrowDropDownLineSx" />}
                  </span>
                </div>
                {isServicesOpenInd && (
                  <div className="innerDropdownContent">
                    <Link href="/manufacturing-industries/" onClick={handleNav}>Manufacturing</Link>
                    <Link href="/life-sciences/" onClick={handleNav}>Life Sciences</Link>
                    <Link href="/consumer-packaged-goods/" onClick={handleNav}>Consumer Packaged Goods</Link>
                    <Link href="/hi-tech/" onClick={handleNav}>Hi-Tech</Link>
                    <Link href="/utility/" onClick={handleNav}>Utilities</Link>
                  </div>
                )}
              </div>

              {/* Case Studies accordion */}
              <div className="dropdown">
                <div className="drawerLinkRow" onClick={toggleCaseStudies}>
                  <Link
                    href="/case-studies/"
                    className="drawerLink"
                    onClick={handleNav}
                  >
                    Case Studies
                  </Link>
                  <span className="toggle-sub-menu">
                    {openDropdown === "caseStudies"
                      ? <RiArrowDropUpLine className="RiArrowDropUpLineSx" />
                      : <RiArrowDropDownLine className="RiArrowDropDownLineSx" />}
                  </span>
                </div>
                {isCaseStudiesOpen && (
                  <div className="innerDropdownContent">
                    <Link href="/casestudy/case-study-category-erp-transformation#e" onClick={handleNav}>
                      ERP Transformation
                    </Link>
                    <Link href="/casestudy/case-study-category-strategy-advisory/" onClick={handleNav}>
                      Strategy &amp; Advisory
                    </Link>
                    <Link href="/casestudy/case-study-category-technology-services" onClick={handleNav}>
                      Technology Services
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/life/" className="drawerLink" onClick={handleNav}>
                Life @taciti
              </Link>
              <Link href="/contact-us/" className="drawerLink" onClick={handleNav}>
                Contact Us
              </Link>

            </div>
          </div>
        </div>

      </div>
    </>
  );
}
