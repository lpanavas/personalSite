import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { Image, Row, Col} from 'react-bootstrap';
// import { ProfileLink } from './styles';

const BoldName = ({text = ''})=>{
    return (
        <div dangerouslySetInnerHTML={{
            __html: text.replace("Crnovrsanin, T", (match, i) => `<b>Crnovrsanin, T</b>`)
        }}></div>
      )
}

const Papers = ({papers}) => {
    return (
        <>
        {papers.map(pub => (
            <Row>
            <Col xs={3} md={2}>
                <Image src="logo512.png" thumbnail/>
            </Col>
            <Col xs={12} md={8}>
                <h4>{pub.title}</h4>
                <p>
                    <BoldName text={pub.authors}></BoldName>
                    {pub.venue}
                    {pub.year}
                </p>
                <p>
                    {pub.url ? <a href={pub.url} >PDF</a> : null}
                    {pub.supplement ? <a href={pub.url} > Supplement</a> : null}
                    {pub.video ? <a href={pub.url} > Video</a> : null}
                    {pub.previewvideo ? <a href={pub.previewvideo} > Preview Video</a> : null}
                    {pub.code ? <a href={pub.url} > Code</a> : null}
                </p>
            </Col>
            </Row>
          ))}
        </>
    )
}

const Publications = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Journal Publications</SectionTitle>
        <Papers papers = {user.publications.journal}/>
      </div>
      <div>
        <SectionTitle>Conference Publications</SectionTitle>
        <Papers papers = {user.publications.conference}/>
      </div>
    </Layout>
  );
};

export default Publications;
