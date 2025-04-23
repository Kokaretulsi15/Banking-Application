import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  ProgressBar,
  Alert,
} from "react-bootstrap";
import { FaEye } from "react-icons/fa";

const SavingAccount = () => {
  const [mobile, setMobile] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpVerified, setOtpVerified] = useState(false);
  const [error, setError] = useState("");
  const [pan, setPan] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [kycVerified, setKycVerified] = useState(false);

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [nomineeName, setNomineeName] = useState("");
  const [relationship, setRelationship] = useState("");

  const [personalInfoFilled, setPersonalInfoFilled] = useState(false);
  const [preferencesSet, setPreferencesSet] = useState(false);
  const [finalStepDone, setFinalStepDone] = useState(false);

  const handleSendOtp = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      return;
    }
    setError("");
    setOtpSent(true);
    console.log("OTP sent to", mobile);
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      setOtpVerified(true);
    } else {
      setError("Invalid OTP. Try again.");
    }
  };

  const handleVerifyKYC = () => {
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan)) {
      setError("Please enter a valid PAN number.");
      return;
    }
    if (!/^\d{12}$/.test(aadhaar)) {
      setError("Please enter a valid Aadhaar number.");
      return;
    }
    setError("");
    setKycVerified(true);
  };

  const handleFinalSubmit = () => {
    setPersonalInfoFilled(true);
    setPreferencesSet(true);
    setFinalStepDone(true);
    console.log("Final form submitted");
  };

  const getProgress = () => {
    if (!otpVerified) return 0;
    if (otpVerified && !kycVerified) return 25;
    if (kycVerified && !personalInfoFilled) return 50;
    if (personalInfoFilled && !preferencesSet) return 70;
    if (preferencesSet && !finalStepDone) return 90;
    if (finalStepDone) return 100;
    return 0;
  };

  return (
    <Container className="mt-5 bg-white p-4 rounded shadow">
      <div className="mb-4">
        <h4 className="fw-bold text-info">Open Saving Account</h4>
        <Row className="text-center fs-6 fw-semibold mb-2">
          <Col>Basic Info</Col>
          <Col>Personal Info</Col>
          <Col>Consent and Document Upload</Col>
        </Row>
        <ProgressBar now={getProgress()} variant="info" />
      </div>

      <Row>
        <Col md={4} className="border-end">
          <h5 className="fw-bold text-info">📄 Documents Required</h5>
          <ul className="list-unstyled ms-3 fs-6">
            <li>• PAN Card</li>
            <li>• Aadhaar Card</li>
            <li>• Passport-size Photo</li>
          </ul>

          <h5 className="fw-bold text-info mt-4">✅ Eligibility</h5>
          <ul className="list-unstyled ms-3 fs-6">
            <li>• Indian Resident</li>
            <li>• Valid Aadhaar & PAN</li>
          </ul>

          <h5 className="fw-bold text-info mt-4">💡 Features</h5>
          <ul className="list-unstyled ms-3 fs-6">
            <li>• Instant Account Opening</li>
            <li>• Mobile & Net Banking</li>
            <li>• UPI & ATM Access</li>
          </ul>
        </Col>

        <Col md={8}>
          <h4 className="fw-bold mb-3 text-info">
            {otpVerified
              ? kycVerified
                ? "KYC Verified ✅"
                : "PAN & Aadhaar Verification"
              : "Mobile Number Verification"}
          </h4>

          {error && <Alert variant="danger">{error}</Alert>}

          {/* Mobile Verification */}
          {!otpVerified && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>
                  Enter Mobile Number <span className="text-danger">*</span>
                </Form.Label>
                <InputGroup>
                  <InputGroup.Text>+91</InputGroup.Text>
                  <Form.Control
                    type="tel"
                    placeholder="Enter 10 digit Mobile Number"
                    value={mobile}
                    maxLength={10}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                  <InputGroup.Text>
                    <FaEye />
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>

              {!otpSent ? (
                <Button
                  variant="info"
                  className="w-100 fw-bold text-white"
                  onClick={handleSendOtp}
                >
                  Send OTP
                </Button>
              ) : (
                <>
                  <Form.Group className="mt-3">
                    <Form.Label>Enter OTP (use 123456 for demo)</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      maxLength={6}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    variant="info"
                    className="w-100 mt-3 fw-bold text-white"
                    onClick={handleVerifyOtp}
                  >
                    Verify OTP
                  </Button>
                </>
              )}
            </>
          )}

          {/* KYC */}
          {otpVerified && !kycVerified && (
            <>
              <Form.Group className="mb-3">
                <Form.Label>
                  Enter PAN Number <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter PAN Number"
                  value={pan}
                  maxLength={10}
                  onChange={(e) => setPan(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>
                  Enter Aadhaar Number <span className="text-danger">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Aadhaar Number"
                  value={aadhaar}
                  maxLength={12}
                  onChange={(e) => setAadhaar(e.target.value)}
                />
              </Form.Group>

              <Button
                variant="info"
                className="w-100 mt-3 fw-bold text-white"
                onClick={handleVerifyKYC}
              >
                Verify
              </Button>
            </>
          )}

          {kycVerified && (
            <>
              <Alert variant="success" className="mt-3">
                ✅ KYC verified successfully. You may proceed with the next steps!
              </Alert>

              <hr />
              <h5 className="text-info fw-bold mt-4">Personal Information</h5>
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="">Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Select>
              </Form.Group>

              <hr />
              <h5 className="text-info fw-bold mt-4">Nominee Details</h5>
              <Form.Group className="mb-3">
                <Form.Label>Nominee Name</Form.Label>
                <Form.Control
                  type="text"
                  value={nomineeName}
                  onChange={(e) => setNomineeName(e.target.value)}
                  placeholder="Enter nominee name"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Relationship</Form.Label>
                <Form.Control
                  type="text"
                  value={relationship}
                  onChange={(e) => setRelationship(e.target.value)}
                  placeholder="Relationship with nominee"
                />
              </Form.Group>

              <hr />
              <h5 className="text-info fw-bold mt-4">Account Preferences</h5>
              <Form.Check type="checkbox" label="Internet Banking" />
              <Form.Check type="checkbox" label="Mobile Banking" />
              <Form.Check type="checkbox" label="Debit Card" />
              <Form.Check type="checkbox" label="SMS Alerts" />

              <hr />
              <h5 className="text-info fw-bold mt-4">Upload Documents</h5>
              <Form.Group className="mb-3">
                <Form.Label>Passport-size Photo</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Signature</Form.Label>
                <Form.Control type="file" />
              </Form.Group>

              <hr />
              <h5 className="text-info fw-bold mt-4">Declaration</h5>
              <Form.Check
                type="checkbox"
                label="I hereby declare that the information provided is true to the best of my knowledge."
              />

              <Button
                variant="info"
                className="w-100 fw-bold mt-3"
                onClick={handleFinalSubmit}
                disabled={finalStepDone}
              >
                {finalStepDone ? "Submitted" : "Submit & Open Account"}
              </Button>

              {finalStepDone && (
                <Alert variant="success" className="mt-4">
                  🎉 Your account has been opened successfully. Please check your email for further instructions!
                </Alert>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SavingAccount;
