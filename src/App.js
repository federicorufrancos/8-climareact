import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {

  //divede the hook statte in independent elements, It's more easy to mantain
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [error, guardarError] = useState(false);
  const [resultado, guardarResultado] = useState({});

  //this is the replacement to componentDidUpdate and componentDidMount
  useEffect(() => {
    if(ciudad === '') return;
    console.log('buscar ciudad');
    const consultaAPI = async () => {
      const apiId = "2c99f0e1928eb19993e26714a9212467";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;
  
      const respuesta =  await fetch(url);
      const resultado = await respuesta.json();
      console.log('resultado ', resultado);
      //save the searched value in the state
      guardarResultado(resultado);
    }
    consultaAPI();
  },[ciudad, pais]); //this array indicates which hook states I want to listen when thay changes its state 


  const datosConsulta = datos => {
    console.log('datos ', datos);

    if(datos.ciudad === '' || datos.pais === ''){
      guardarError(true);
      return;
    }
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  let componente;
  //here I'm loading the component conditionally
  if (error) {
    componente = <Error mensaje="Ambos campos son obligatorios"/>
  } else if (resultado.cod === "404") {
    componente = <Error mensaje="La ciudad no existe en el registro"/>
  } else {
    componente = <Clima resultado={resultado}/>;
  }
  return (
      <div className="App">
        <Header titulo='Clima React App'/>
        <div className="container-form">
          <div className="container">
            <div className="row">
              <div className="col s12 m6">
                <Formulario datosConsulta={datosConsulta}/> 
              </div>    
              <div className="col s12 m6">
                {componente}
              </div>          
            </div>
          </div>
        </div>
      </div>
    );
}

//2c99f0e1928eb19993e26714a9212467

export default App;
