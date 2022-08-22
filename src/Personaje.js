import React from 'react'

export const Personaje = ({url, title}) => {
  return (
    <div >
        <img src = {url} alt = {title}></img>
    </div>
  )
}
