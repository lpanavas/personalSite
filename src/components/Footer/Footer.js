import React from 'react';
import Media from "../Media";
const Footer = ({user}) => {
  const basics = user.basics;
  return (
    <>
    <hr />
    <Media media ={basics} />
    <div className="col-6 col-md">
    <p style={{color:"gray"}}>This site was built using React and React-Bootstrap.</p>
    </div>
    </>
  );
};

export default Footer
