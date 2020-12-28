import React, { Component } from 'react';
import Contexto from '../context/Contexto';
import Avo from './Avo';

class Bisavo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dinheiro: 100000,
    }
    this.gastar = this.gastar.bind(this);
  }

  gastar() {
    this.setState((prevState) => ({dinheiro:prevState.dinheiro - 100}))
  }

  render() { 
    const value = {
      dinheiro: this.state.dinheiro,
      gastar: this.gastar,
    }
    return (
      <Contexto.Provider value={value}>
        <div className="bisavo">
          <h1>Eu Sou o Bisavô</h1>
          <Avo />
        </div>
      </Contexto.Provider>
    );
  }
}
 
export default Bisavo;