import React from 'react';
import logo from './logo.svg';
import './App.css';

function FormatDate(props) {
  return <h2>Esta es la hora temporizada {props.date.toLocaleTimeString()}.</h2>;
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
        <FormatDate date={this.state.date} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
	  <Hora />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editando <code>src/App.js</code> recargamos reload y vemos que pasa.
        </p>
        <a
          className="App-link"
          href="https://github.com/unimauro/TemporizadorReact"
          target="_blank"
          rel="noopener noreferrer"
        >
          Probando el Temporizador
        </a>
      </header>


 </div>
  );
}

export default App;
