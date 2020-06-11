import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import {Row, Col, Image} from 'react-bootstrap'
// import { ProfileLink } from './styles';

const TextInfo = ({entries}) => {
    return (
        <>
        {entries.map(entry => (
            <Row>
            <Col xs={15} md={10}>
                <p><b>{entry.title}</b></p>
                <p>
                    {entry.summary}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
}


const MediaInfo = ({entries}) => {
    return (
        <>
        {entries.map(entry => (
            <Row>
            <Col xs={3} md={2}>
                <Image src="logo512.png" thumbnail/>
            </Col>
            <Col xs={12} md={8}>
                <p><b>{entry.title}</b></p>
                <p>
                    {entry.summary}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
}


const Publicity = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle id='Awards'>Awards</SectionTitle>
        <TextInfo entries = {user.awards}/>
      </div>
      <div>
        <SectionTitle id='press'>Press</SectionTitle>
        <MediaInfo entries = {user.press}/>
      </div>
    </Layout>
  );
};

export default Publicity;