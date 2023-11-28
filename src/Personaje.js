import React from 'react'

export const Personaje = ({ url, title, id }) => {
  return (
    <div>
      <img src={url} alt={title} id={id}></img>
    </div>
  );
};