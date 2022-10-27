import React from "react";

import { Link, useLocation } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { StyledNavMain, StyledNavSub } from "./styles";

const items = [
  {
    name: "Home",
    path: "/personalSite/",
    subpath: [
      {
        name: "Bio",
        path: "/personalSite/",
      },

      {
        name: "C.V.",
        path: "/personalSite/LiudasPanavasCV.pdf",
      },
    ],
  },
  {
    name: "Publications",
    path: "/personalSite/publications",
    subpath: [
      {
        name: "Conference",
        path: "/personalSite/#publications#conference",
      },
    ],
  },
  {
    name: "Projects",
    path: "/personalSite#projects",
    subpath: [
      {
        name: "Research",
        path: "/personalSite/projects#research",
      },
    ],
  },
];

const Header = () => {
  const location = useLocation();

  return (
    // <Navbar expand = "lg" bg="light" variant="light" fixed= "top">

    <Navbar fluid="true" expand="lg">
      <Navbar.Brand style={{ fontSize: "2rem" }} href="/">
        Liudas Panavas
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {items.map((i, idx) => (
            <Nav.Item key={idx} className="flex-column">
              <StyledNavMain
                style={{ color: "#000000" }}
                element={Link}
                href={i.path}
                key={i.name}
              >
                {i.name}
              </StyledNavMain>
              {i.subpath.map((j) => (
                <StyledNavSub element={Link} href={j.path} key={j.name}>
                  {j.name}
                </StyledNavSub>
              ))}
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
