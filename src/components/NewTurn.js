import React from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInit= {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
};

class NewTurn extends React.Component {
    state = {...stateInit};

    handleChange = (e) => {
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // extraer los valores del state
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;
        // validar que los campos esten llenos
        if (mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === '' ) {
            this.setState({error: true});
            return;
        }
        // generar objeto con datos
        const nuevaCita = {...this.state.cita};
        nuevaCita.id = uuid();
        // actualizar state 
        this.props.createNewTurn({ nuevaCita });
        // traer state inicial despues de enviar form
        this.setState({...stateInit})
    }

    render() {

        // extraer error
        const {error} = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el form para una cita
                    </h2>
                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">Todos los campos son obligatorios</div> : null }
                    <form onSubmit={this.handleSubmit} >
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label text-capitalize">mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="mascota"
                                    type="text"
                                    className="form-control"
                                    placeholder="mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value={this.state.cita.mascota}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label text-capitalize">propietario</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    id="propietario"
                                    type="text"
                                    className="form-control"
                                    placeholder="propietario"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value={this.state.cita.propietario}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label text-capitalize">fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    id="fecha"
                                    type="date"
                                    className="form-control"
                                    placeholder="fecha"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value={this.state.cita.fecha}
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label text-capitalize">hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    id="hora"
                                    type="time"
                                    className="form-control"
                                    placeholder="hora"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value={this.state.cita.hora}
                                />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label text-capitalize">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    id="sintomas"
                                    className="form-control"
                                    placeholder="sintomas"
                                    name="sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>
                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nuevo turno"/>
                    </form>
                </div>                
            </div>
        );
    }
}

NewTurn.propTypes = {createNewTurn : PropTypes.func.isRequired}

export default NewTurn;