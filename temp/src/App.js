import React from 'react';
import logo from './logo.svg';
import './App.css';

function FormatoHora(props) {
  return <h1>Esta es la hora temporizada: {props.date.toLocaleTimeString()}.</h1>;
}

class Hora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>La Hora Temporizada!</h1>
        <FormatoHora date={this.state.date} />
      </div>
    );
  }
}

/* Verificando */



function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <Hora />
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://github.com/unimauro/TemporizadorReact"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub del Temporizador
        </a>
      </header>


 </div>
  );
}

export default App;
