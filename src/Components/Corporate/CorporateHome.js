import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Card } from 'react-bootstrap';
import {
  FaUniversity,
  FaHandHoldingUsd,
  FaShippingFast,
  FaExchangeAlt,
  FaMobileAlt,
  FaMoneyBillWave,
  FaChartLine
} from 'react-icons/fa';
import '../../css/corporatehome.css';

function CorporateHome() {
  const corporateServices = [
    {
      title: 'Accounts & Deposits',
      desc: 'Open and manage business accounts, deposits & more.',
      icon: <FaUniversity size={30} color="#00cfff" />,
      link: '/corporate/accounts'
    },
    {
      title: 'Loans & Credit',
      desc: 'Business loans, overdrafts & working capital solutions.',
      icon: <FaHandHoldingUsd size={30} color="#00cfff" />,
      link: '/corporate/loans'
    },
    {
      title: 'Trade Finance',
      desc: 'LCs, guarantees, import/export finance and support.',
      icon: <FaShippingFast size={30} color="#00cfff" />,
      link: '/corporate/trade-finance'
    },
    {
      title: 'Payments & Collections',
      desc: 'Cash management, bulk payments, and receivables tools.',
      icon: <FaExchangeAlt size={30} color="#00cfff" />,
      link: '/corporate/payments'
    },
    {
      title: 'Digital Banking',
      desc: 'Netbanking, mobile apps and APIs for businesses.',
      icon: <FaMobileAlt size={30} color="#00cfff" />,
      link: '/corporate/digital'
    },
    {
      title: 'Treasury & Forex',
      desc: 'Hedging, forex rates & international payments.',
      icon: <FaMoneyBillWave size={30} color="#00cfff" />,
      link: '/corporate/treasury'
    },
    {
      title: 'Advisory Services',
      desc: 'Financial planning, investment, and capital advice.',
      icon: <FaChartLine size={30} color="#00cfff" />,
      link: '/corporate/advisory'
    }
  ];

  return (
    <>
      {/* Navigation Bar */}
      <Navbar expand="lg" bg="info" variant="light" className="p-3">
        <Navbar.Brand href="/" className="fw-bold text-white">
          Corporate Banking
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNav" />
        <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <NavDropdown title="Accounts & Deposits" id="accountsDropdown">
              <NavDropdown.Item href="/corporate/accounts">Current Accounts</NavDropdown.Item>
              <NavDropdown.Item href="/">Fixed Deposits</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Loans & Credit" id="loansDropdown" className="text-white fw-bold">
              <NavDropdown.Item href="/">Business Loans</NavDropdown.Item>
              <NavDropdown.Item href="/">Overdrafts</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Trade Finance" id="tradeDropdown" className="text-white fw-bold">
              <NavDropdown.Item href="/">Import Services</NavDropdown.Item>
              <NavDropdown.Item href="/">Export Services</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Payments & Collections" id="paymentsDropdown" className="text-white fw-bold">
              <NavDropdown.Item href="/">Online Payments</NavDropdown.Item>
              <NavDropdown.Item href="/">Cash Management</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Digital Banking" id="digitalDropdown" className="text-white fw-bold">
              <NavDropdown.Item href="/">Corporate Netbanking</NavDropdown.Item>
              <NavDropdown.Item href="/">Mobile Banking</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Treasury & Forex" id="treasuryDropdown" className="text-white fw-bold">
              <NavDropdown.Item href="/">Forex Rates</NavDropdown.Item>
              <NavDropdown.Item href="/">Currency Hedging</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Advisory Services" id="advisoryDropdown" className="text-white fw-bold">
              <NavDropdown.Item href="/">Financial Advisory</NavDropdown.Item>
              <NavDropdown.Item href="/">Investment Guidance</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Button variant="outline-light" className="fw-bold">Login</Button>
        </Navbar.Collapse>
      </Navbar>

      {/* Corporate Services Section */}
      <div className="mt-5 container">
        <h4 className="text-info fw-bold mb-4 text-center">Our Corporate Services</h4>
        <div className="row">
          {corporateServices.map((service, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <Card className="square-card shadow-sm text-center p-3 h-100">
                <Card.Body>
                  <div className="mb-3">{service.icon}</div>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.desc}</Card.Text>
                  <a href={service.link}>
                    <Button variant="info" className="mt-2">Explore</Button>
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CorporateHome;
