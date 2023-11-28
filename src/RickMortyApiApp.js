import React, { useEffect, useState } from 'react';
import { Personaje } from './Personaje';
import { getData } from './getData';
import $ from 'jquery'; // Importa jQuery

export const RickMortyApiApp = () => {
  const [valuegetdata, setvaluegetdata] = useState([]);
  const [valueid, setvalueid] = useState(1);

  const aumentar = () => {
    setvalueid(valueid + 1);
  };

  const reducir = () => {
    if (valueid > 1) {
      setvalueid(valueid - 1);
    }
  };

  useEffect(() => {
    getData(valueid).then((datas) => setvaluegetdata(datas));

    // Agrega el evento de clic utilizando jQuery
    $('#imagenPersonaje').on('click', function () {
      // Aplica el efecto de zoom
      $(this).toggleClass('zoomed');
    });

    // Limpia el evento al desmontar el componente
    return () => {
      $('#imagenPersonaje').off('click');
    };
  }, [valueid]);

  return (
    <div>
      <h1>Proyecto Rick y Morty</h1>
      <div className="contenedor_principal">
        <div className="primer_div">
        <Personaje url={valuegetdata.image} id="imagenPersonaje" />

          <div className="div_buttons">
            <button onClick={reducir}>izquierda</button>
            <button onClick={aumentar}>Derecha</button>
          </div>
        </div>

        <div className="segundo_div">
          <h2>{valuegetdata.name}</h2>
          <p>
            <strong>Genero:</strong> {valuegetdata.gender}
          </p>
          <p>
            <strong>Especie:</strong> {valuegetdata.species}
          </p>
          <p>
            <strong>Vivo o muerto?:</strong> {valuegetdata.status}
          </p>
          {valuegetdata.location && (
            <p>
              <strong>Localizacion:</strong> {valuegetdata.location.name}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
