import React, { useState } from 'react';

function Formulario({datosConsulta}) {


    //setting up a state with hooks
    //busqueda is going to the STATE
    //guardarBusqueda is going to be the SETSTATE 
    //so now the state is named "busqueda"
    /*the equivalence will be:
        this.state = {
            ciudad: '',
            pais:''
        }
    */
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        //this.setState({ciudad: e.value});
        //I'm doing this copy because for example if the city changes, then the value from county will be lost
        guardarBusqueda({
            ...busqueda, [e.target.name]: e.target.value
        })
        console.log(busqueda);
    }

    const consultarClima = e => {
        e.preventDefault();
        datosConsulta(busqueda);
    }

    return (
        <form onSubmit={consultarClima}>
            <div className="input-field col s12">
                <input type="text" name="ciudad" id="ciudad" onChange={handleChange} />
                <label htmlFor="ciudad">Ciudad:</label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="pais">
                    <option value="">Selecionar un país</option>
                    <option value="US">Estados Unidos</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="PE">Peru</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yelloww accent-4" value="Buscar Clima"/>
            </div>
        </form>
        

    ); 
}

export default Formulario;