import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import {Col, Image, Row} from "react-bootstrap";
import Media from '../../components/Media'
// import { ProfileLink } from './styles';

const Home = ({ user }) => {
  return (
    <Layout user={user}>
      <Row>
        <Col>
          <Image src="logo512.png" width={360} />
          <Media media={user.basics} />
        </Col>
        <Col>
          <div>
            <SectionTitle>About Me</SectionTitle>
            <Paragraph>{user.basics.summary}</Paragraph>
          </div>
        </Col>
      </Row>
      <Row>
        <div>
          <SectionTitle>Selected Papers</SectionTitle>
        </div>
      </Row>
      <Row>
        <div>
          <SectionTitle>Selected Projects</SectionTitle>
        </div>
      </Row>
    </Layout>
  );
};

export default Home;
