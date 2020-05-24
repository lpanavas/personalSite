import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';

import { StyledSideNav } from './styles';

const items = [
  { name: 'Home', path: '/' },
  { name: 'Publications', path: '/projects' },
  { name: 'Projects', path: '/work' },
  { name: 'Publicity', path: '/education' },
];

const Header = () => {
  const location = useLocation();

  return (
    <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
      <SideNavItems>
        {items.map(i => (
          <SideNavLink
            isActive={
              location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </SideNavItems>
    </StyledSideNav>
  );
};

export default Header;
