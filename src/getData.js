import React from 'react'

export const getData = async(id,state) => {
    
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();

    
        return{
            name: data.name,
            species : data.species,
            image : data.image,
            gender : data.gender,
            episode : data.episode,
            location : data.location,
            status: data.status

        }



}
