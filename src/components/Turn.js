import React from 'react';
import PropTypes from 'prop-types';

const Turn = ({cita, eliminarCita}) => (
        <div className="media mt-3">
            <div className="media-body">
                {/*Object.keys(cita).map(key=>
                    key==='mascota' 
                    ? <h3 className="mt-0 text-capitalize">{cita[key]}</h3>
                    : key==='id' ? null 
                    : <p className="card-text text-capitalize"><span>{key}:</span> {cita[key]}</p>
                )*/}
                <h3 className="mt-0 text-capitalize">{cita.mascota}</h3>
                <p className="card-text text-capitalize"><span>propietario:</span> {cita.propietario}</p>
                <p className="card-text text-capitalize"><span>fecha:</span> {cita.fecha}</p>
                <p className="card-text text-capitalize"><span>hora:</span> {cita.hora}</p>
                <p className="card-text text-capitalize"><span>sintomas:</span> {cita.sintomas}</p>
                <button className="btn btn-danger" onClick={()=>eliminarCita(cita.id)} >Borrar &times;</button>
            </div>
        </div>
);

Turn.propTypes = {cita : PropTypes.object.isRequired, eliminarCita : PropTypes.func.isRequired}

export default Turn;
