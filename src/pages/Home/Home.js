import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
// import { ProfileLink } from './styles';

const Home = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div>
          {user.skills.map(skill => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
        </ul>
      </div>
    </Layout>
  );
};

export default Home;
