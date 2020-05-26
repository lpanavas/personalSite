import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { Nav, Navbar} from 'react-bootstrap';

const items = [
  { name: 'Home', path: '/' },
  { name: 'Publications', path: '/publications' },
  { name: 'Projects', path: '/projects' },
  { name: 'Publicity', path: '/publicity' },
];

const Header = () => {
  const location = useLocation();

  return (
    <Navbar expand = "lg">
      <Navbar.Brand href="/">Tarik Crnovrsanin</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {items.map(i => (
            <Nav.Item >
              <Nav.Link
                element={Link}
                href={i.path}
                key={i.name}
              >
                {i.name}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
