import React from 'react';
import './assets/bootstrap.min.css';
import Header from './components/Header';
import NewTurn from './components/NewTurn';
import ListTurns from './components/ListTurns';

class App extends React.Component {
  state = { citas:[] };
  
  componentDidMount() {
    const citasLS = localStorage.getItem('citas');
    if (citasLS) {
      this.setState({ citas : JSON.parse(citasLS) });
    }
  }

  componentDidUpdate() {
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }

  createNewTurn = parameters => {
    // copiar state actual
    const citas = [...this.state.citas, parameters];
    this.setState({citas});
  }

  eliminarCita = id => {
    // copia state
    const citasActuales = [...this.state.citas];
    // filter para sacar el id
    const citas = citasActuales.filter(cita => cita.nuevaCita.id !== id);
    // actualizar state
    this.setState({citas});
  }

  render() {
    return (
      <div className="container">
        <Header titulo='Admin Pacientes Veterinaria' />
        <div className="col-md-10 mx-auto">
          <NewTurn createNewTurn={this.createNewTurn} />
        </div>
        <div className="mt-5 col-md-10 mx-auto">
          <ListTurns citas={this.state.citas} eliminarCita={this.eliminarCita} />
        </div>
      </div>
    );
  }
}

export default App;
