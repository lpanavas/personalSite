import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import Container from 'react-bootstrap/Container';

const Layout = ({ user, children }) => {
  return (
    <>
      <Header />
      <Container>
        <div>{children}</div>
        <Footer user={user} />
      </Container>
    </>
  );
};

export default Layout;
