import React from 'react';

function Clima({resultado}) {

    console.log('resultado en clima ', resultado);
    const { name, main } = resultado;


    const kelvin = 273.15;
    
    if(!name) return null;
    return (
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es:</h2>
                <p className="temperatura">
                { parseInt(main.temp - kelvin, 10)} <span>&#x2103;</span>
                </p>
                {/*parseInt prints only the integar part of the number*/}
                <p>Temperatura Máxima: { parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
                <p>Temperatura Mínima: { parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
            </div>
        </div>
    ); 
}

export default Clima;