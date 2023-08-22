import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Col, Row, Nav, Container } from "react-bootstrap";
import { FaInstagram, FaLinkedinIn, FaCopy } from "react-icons/fa";
import { TbBrandUpwork } from "react-icons/tb";

import NavDropdown from "react-bootstrap/NavDropdown";
import useIsDesktopSize from "../util/useIsDesktopSize.js";
import copyText from "../util/copyText.js";

const NavBar = () => {
  const isDesktop = useIsDesktopSize();
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const handleCopyText = () => {
    setCopied(true);
    copyText();
    setTimeout(() => {
      setCopied(false);
    }, 3500);
  };
  const toggleNav = () => {
    setExpanded(!expanded);
  };
  const generateContactLins = () => {
    if (!isDesktop) {
      return (
        <div className="contact-mobile mt-4">
          <Nav.Link
            id="email-link"
            href="mailto:sannymhart@gmail.com"
            onClick={handleCopyText}
          >
            {!copied ? (
              <>
                sannymhart@gmail.com <FaCopy className="ms-1" />
              </>
            ) : (
              <>
                <span className="copied">Copied!</span>
              </>
            )}
          </Nav.Link>
          <Row className="mt-2">
            <Col className="d-flex justify-content-center">
              <Nav.Link
                target="_blank"
                href="https://www.linkedin.com/in/sanny-m-2352a7217/"
              >
                <FaLinkedinIn />
              </Nav.Link>{" "}
              <Nav.Link
                target="_blank"
                href="https://www.instagram.com/sannymh_art/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
                className="me-5 ms-5"
              >
                <FaInstagram />
              </Nav.Link>
              <Nav.Link
                target="_blank"
                href="https://www.upwork.com/freelancers/~016f6c75a42a00a837"
              >
                <TbBrandUpwork />
              </Nav.Link>
            </Col>
          </Row>
        </div>
      );
    }
    return (
      <NavDropdown title="Contact" id="basic-nav-dropdown">
        <NavDropdown.Item href="mailto:sannymhart@gmail.com">
          sannymhart@gmail.com
        </NavDropdown.Item>{" "}
        <NavDropdown.Divider />
        <Row>
          <Col>
            <NavDropdown.Item
              target="_blank"
              href="https://www.instagram.com/sannymh_art/?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D"
              className="d-flex"
            >
              <FaInstagram />
            </NavDropdown.Item>
          </Col>
          <Col>
            <NavDropdown.Item
              target="_blank"
              href="https://www.linkedin.com/in/sanny-m-2352a7217/"
              className="d-flex"
            >
              <FaLinkedinIn />
            </NavDropdown.Item>
          </Col>
          <Col>
            <NavDropdown.Item
              target="_blank"
              href="https://www.upwork.com/freelancers/~016f6c75a42a00a837"
              className="d-flex"
            >
              <TbBrandUpwork />
            </NavDropdown.Item>
          </Col>
        </Row>
      </NavDropdown>
    );
  };
  return (
    <Navbar expand="lg" bg="white" expanded={expanded}>
      <Container fluid className="justify-content-end mt-4 bg-white pb-3">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => toggleNav()}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="w-100">
            <Row
              className={`w-100 ${
                !isDesktop
                  ? "justify-content-center"
                  : "justify-content-between"
              }`}
            >
              <Col lg={2}>
                <Row lg={2} className="text-center">
                  <NavLink
                    className="nav-link"
                    to="/"
                    onClick={!isDesktop ? () => toggleNav() : ""}
                  >
                    Home
                  </NavLink>{" "}
                  <NavLink
                    to="/about"
                    onClick={!isDesktop ? () => toggleNav() : ""}
                    className={` nav-link ${!isDesktop && "mt-1"}`}
                  >
                    About
                  </NavLink>
                </Row>
              </Col>

              <Col lg={2} className="text-center">
                {generateContactLins(isDesktop)}
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
