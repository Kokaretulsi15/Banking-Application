import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  InputGroup,
  ProgressBar,
  Card,
} from "react-bootstrap";
import { FaEye } from "react-icons/fa";

const CurrentAccount = () => {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [pan, setPan] = useState("");
  const [taxId, setTaxId] = useState("");

  const [addressProof, setAddressProof] = useState(null);
  const [signatoryName, setSignatoryName] = useState("");
  const [signatoryIdProof, setSignatoryIdProof] = useState(null);
  const [signatoryAddressProof, setSignatoryAddressProof] = useState(null);

  const [submitted, setSubmitted] = useState(false);

  const handleSendOtp = () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) return;
    setOtpSent(true);
    console.log("OTP sent to", mobile);
  };

  const handleVerifyOtp = () => {
    if (otp === "123456") {
      setOtpVerified(true);
      setStep(2);
    }
  };

  const handleSubmit = () => {
    const formData = new FormData();
  
    formData.append("mobile", mobile);
    formData.append("businessName", businessName);
    formData.append("businessType", businessType);
    formData.append("registrationNumber", registrationNumber);
    formData.append("pan", pan);
    formData.append("taxId", taxId);
  
    if (addressProof) formData.append("addressProof", addressProof);
    formData.append("signatoryName", signatoryName);
    if (signatoryIdProof) formData.append("signatoryIdProof", signatoryIdProof);
    if (signatoryAddressProof) formData.append("signatoryAddressProof", signatoryAddressProof);
  
    // Example log to see what was submitted
    for (let pair of formData.entries()) {
      console.log(pair[0] + ": ", pair[1]);
    }
  
    setSubmitted(true);
    console.log("Current account application submitted");
  };
  

  const getProgress = () => {
    if (!otpVerified) return 33;
    if (!submitted) return 66;
    return 100;
  };

  return (
    <Container className="mt-5 bg-white p-4 rounded shadow">
      <h3 className="text-info fw-bold mb-3">Open Current Account</h3>
      <ProgressBar now={getProgress()} variant="info" className="mb-4" />
      <Row>
        <Col md={4}>
          <Card className="p-3 mb-4 " style={{ backgroundColor: '#e8fafc' }}>
            <h5 className="text-info fw-bold">Documents Required</h5>
            <ul>
              <li>Business Registration Certificate</li>
              <li>Business PAN</li>
              <li>Tax Identification Number</li>
              <li>Address Proof</li>
              <li>ID & Address Proof for Signatory</li>
            </ul>
            <h5 className="text-info fw-bold mt-3">Eligibility</h5>
            <ul>
              <li>Registered Business</li>
              <li>Valid KYC Documents</li>
            </ul>
            <h5 className="text-info fw-bold mt-3">Features</h5>
            <ul>
              <li>Dedicated Business Banking</li>
              <li>Net & Mobile Banking Access</li>
              <li>Cheque & Overdraft Facility</li>
            </ul>
          </Card>
        </Col>

        <Col md={8}>
          <Card className="p-4">
            {step === 1 && (
              <>
                <h5 className="text-info fw-bold">Mobile Number Verification</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Enter Mobile Number <span className="text-danger">*</span></Form.Label>
                  <InputGroup>
                    <InputGroup.Text>+91</InputGroup.Text>
                    <Form.Control
                      type="tel"
                      placeholder="Enter 10 digit Mobile Number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                    />
                    <InputGroup.Text><FaEye /></InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                {!otpSent ? (
                  <Button variant="info" className="w-100 text-white fw-bold" onClick={handleSendOtp}>
                    Send OTP
                  </Button>
                ) : (
                  <>
                    <Form.Group className="mt-3">
                      <Form.Label>Enter OTP (use 123456 for demo)</Form.Label>
                      <Form.Control
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                      />
                    </Form.Group>
                    <Button variant="info" className="w-100 mt-3 text-white fw-bold" onClick={handleVerifyOtp}>
                      Verify OTP
                    </Button>
                  </>
                )}
              </>
            )}

            {step === 2 && (
              <>
                <h5 className="text-info fw-bold">Business Details</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Business Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Enter business name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Business Type</Form.Label>
                  <Form.Select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                  >
                    <option value="">Select type</option>
                    <option>Proprietorship</option>
                    <option>Partnership</option>
                    <option>Private Limited</option>
                    <option>LLP</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Business Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="Enter registration number"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Business PAN</Form.Label>
                  <Form.Control
                    type="text"
                    value={pan}
                    onChange={(e) => setPan(e.target.value)}
                    placeholder="Enter PAN"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Tax Identification Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={taxId}
                    onChange={(e) => setTaxId(e.target.value)}
                    placeholder="Enter Tax ID"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Business Address Proof (Upload)</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setAddressProof(e.target.files[0])}
                  />
                </Form.Group>

                <h5 className="text-info">Authorized Signatory</h5>
                <Form.Group className="mb-3">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={signatoryName}
                    onChange={(e) => setSignatoryName(e.target.value)}
                    placeholder="Enter signatory name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>ID Proof (Upload)</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setSignatoryIdProof(e.target.files[0])}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Address Proof (Upload)</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => setSignatoryAddressProof(e.target.files[0])}
                  />
                </Form.Group>

                <Form.Check
                  type="checkbox"
                  className="mb-3"
                  label="I confirm all provided details are accurate."
                />

                <Button
                  variant="info"
                  className="w-100 fw-bold text-white"
                  onClick={handleSubmit}
                  disabled={submitted}
                >
                  {submitted ? "Submitted" : "Submit & Open Account"}
                </Button>

                {submitted && (
                  <Alert variant="success" className="mt-4">
                    🎉 Your business account application has been submitted successfully.
                  </Alert>
                )}
              </>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CurrentAccount;
