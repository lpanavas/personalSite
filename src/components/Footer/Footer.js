import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope, faGraduationCap} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';


const Footer = ({user}) => {
  const basics = user.basics;
  return (
    <>
    <hr />
    <div className="col-6 col-md">
      <ul className="list-unstyled text-small">
        <li>
          <div>
            <FontAwesomeIcon icon={faEnvelope}/>
            <a className="text-muted"> turokhunter[at]gmail</a>
          </div>
        </li>
        {basics.profiles.map(prof => (
          <>
          <li>
            <a className="text-muted"
            href={prof.url}>
              <div>
                {(function(){
                  switch(prof.iconName){
                    case 'github':
                      return <FontAwesomeIcon icon={faGithub} />
                    case 'linkedin':
                      return <FontAwesomeIcon icon={faLinkedin} />
                    case 'scholar':
                      return <FontAwesomeIcon icon={faGraduationCap} />
                  }
                })()}
                 &nbsp;{prof.network}
              </div>
            </a>
          </li>
          </>
        ))} 
      </ul>
    </div>
    </>
  );
};

export default Footer
