import React from 'react';
import Turn from './Turn';
import PropTypes from 'prop-types';

const ListTurns = ({citas, eliminarCita}) => {

    // imprimir citas o mensaje
    const mensaje = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administrar citas' ;
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{mensaje}</h2>
                <div className="lista-citas">
                    {citas.map(cita => (
                        <Turn 
                            key={cita.nuevaCita.id}
                            cita={cita.nuevaCita}
                            eliminarCita={eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

ListTurns.propTypes = {citas : PropTypes.array.isRequired, eliminarCita : PropTypes.func.isRequired}

export default ListTurns;
