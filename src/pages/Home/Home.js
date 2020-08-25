import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph} from '../../styles';
import {Col, Image, Row, Card, CardDeck} from "react-bootstrap";
import Media from '../../components/Media'
// import { ProfileLink } from './styles';


const Cards = ({items}) => {
  return (
      <CardDeck>
      {items.map((item, index) => (
        <Card key={index} style={{ width: '22rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
          <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.summary}
            </Card.Text>
            <Card.Link href={item.link}>Details</Card.Link>
          </Card.Body>
        
        </Card>
        ))}
      </CardDeck>
  )
}

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
          <Cards items={user.selectedpapers} />
        </div>
      </Row>
      <Row>
        <div>
          <SectionTitle>Selected Projects</SectionTitle>
          <Cards items={user.selectedprojects} />
        </div>
      </Row>
    </Layout>
  );
};

export default Home;
