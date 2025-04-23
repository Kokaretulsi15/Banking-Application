import React from "react";
//import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/aboutus.css";
import bankImage from '../Images/Bank1.png'; 

const AboutUs = () => {
  return (
    <div className="container py-5">
    <h2 className="about-header mb-5">About Us</h2>

    {/* Image + Intro Text */}
    <div className="card mb-4 p-4 shadow-sm">
      <div className="row align-items-center">
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img src={bankImage} alt="Bank" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <p className="para">
            Welcome to <strong>My Bank</strong>, your reliable digital banking partner committed to delivering secure, seamless, and innovative financial experiences.
          </p>
        </div>
      </div>
    </div>

    {/* Mission and Vision */}
    <div className="row">
      <div className="col-md-6 mb-4">
        <div className="card p-4 h-100 shadow-sm">
          <h4 className="section-title">Our Mission</h4>
          <p className="para">
            To provide transparent, secure, and user-friendly banking solutions that empower individuals and businesses to thrive financially.
          </p>
        </div>
      </div>
      <div className="col-md-6 mb-4">
        <div className="card p-4 h-100 shadow-sm">
          <h4 className="section-title">Our Vision</h4>
          <p className="para">
            To become the most innovative and trusted digital bank in the country, transforming the way people experience finance.
          </p>
        </div>
      </div>
    </div>

    {/* Core Values & What Makes Us Different Side-by-Side */}
<div className="row">
  <div className="col-md-6 mb-4">
    <div className="card p-4 h-100 shadow-sm">
      <h4 className="section-title">Our Core Values</h4>
      <ul className="custom-list">
        <li>Trust & Transparency</li>
        <li>Customer First</li>
        <li>Innovation & Growth</li>
        <li>Security & Compliance</li>
        <li>Integrity in All We Do</li>
      </ul>
    </div>
  </div>
  <div className="col-md-6 mb-4">
    <div className="card p-4 h-100 shadow-sm">
      <h4 className="section-title">What Makes Us Different</h4>
      <ul className="custom-list">
        <li>100% Digital Onboarding</li>
        <li>Zero Balance Accounts</li>
        <li>24/7 Smart Customer Support</li>
        <li>AI-powered Personal Finance Tools</li>
        <li>Low-interest Loans & Instant Approvals</li>
      </ul>
    </div>
  </div>
</div>

    {/* Security Section */}
    <div className="card p-4 shadow-sm">
      <h4 className="section-title">Your Security is Our Priority</h4>
      <p className="para">
        We follow the highest industry standards for data encryption and are fully compliant with RBI regulations. Your data and money are safe with us.
      </p>
    </div>
  </div>
  );
};

export default AboutUs;
