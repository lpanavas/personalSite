import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { StyledContent } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>
      <Header />
      <StyledContent>
        <div>{children}</div>
      </StyledContent>
      <Footer user={user} />
    </>
  );
};

export default Layout;
