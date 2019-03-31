import React from "react";

const Quote = ({ image, character, quote}) => (
  <figure >
    <img src={image} alt={character} width="60%"   />
    <figcaption>
      <blockquote>personnage :{character}</blockquote>
      <cite>quote : {quote} </cite>
 
     
    </figcaption>
  </figure>
);

export default Quote;

