import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
// import { ProfileLink } from './styles';

const Publicity = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Publicity</SectionTitle>
      </div>
    </Layout>
  );
};

export default Publicity;
