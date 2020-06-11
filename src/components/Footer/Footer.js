import React from 'react';
import Media from "../Media";
const Footer = ({user}) => {
  const basics = user.basics;
  return (
    <>
    <hr />
    <Media media ={basics} />
    </>
  );
};

export default Footer
