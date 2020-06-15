import React from 'react';
import Layout from '../../components/Layout';
import { Row} from 'react-bootstrap'
// import { ProfileLink } from './styles';

const Entry = ({entry}) => {
  return (
    <>
      <Row>
        <h5>
          {entry.title}
        </h5>
      </Row>
      <div dangerouslySetInnerHTML = {{__html:entry.html}}></div>
    </>
  )
}


const Projects = ({ user }) => {
  return (
    <Layout user={user}>
        {user.projects.map(section => (
          <>
            <Row>
              <h1>{section.title}</h1>
            </Row>
            <Row>
              <p>{section.summary}</p>
            </Row>
            {section.entries.map(entry =>(
                <Entry entry={entry}/>              
            ))}
          </>
        ))}
    </Layout>
  );
};

export default Projects;
