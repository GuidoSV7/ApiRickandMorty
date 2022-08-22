import React, { useEffect, useState } from 'react'
import { Personaje } from './Personaje'
import { getData } from "./getData";

export const RickMortyApiApp = () => {

    /*Valores getData*/
    const [valuegetdata, setvaluegetdata] = useState([])

    const [valueid, setvalueid] = useState(1);
    
    const aumentar = ()=>{
        setvalueid(valueid+1)
    }

    const reducir = ()=>{
        if(valueid > 1){
            setvalueid(valueid-1)
        }
        
    }

    useEffect(()=>{
        getData(valueid)
            .then(datas => setvaluegetdata(datas));

            
        
    },[valueid])
    
    console.log(valuegetdata.location.name)
    

  return (
    <div>
        <h1>Proyecto Rick y Morty</h1>
        <div className='contenedor_principal'>
            <div className='primer_div'>
                <Personaje 
                url = {valuegetdata.image}
                />

                <div className='div_buttons'>
                    <button onClick={reducir}>izquierda</button>
                    <button onClick={aumentar}>Derecha</button>
                </div>

            </div>

            <div className='segundo_div'>
                <h2>{valuegetdata.name}</h2>
                <p><strong>Genero:</strong> {valuegetdata.gender}</p>
                <p><strong>Especie:</strong> {valuegetdata.species}</p>
                <p><strong>Vivo o muerto?:</strong> {valuegetdata.status}</p>
                <p><strong>Localizacion:</strong> {valuegetdata.location.name}</p>
            </div>


            </div>

        </div>
  )
}
