import React, { Component } from 'react';
import Filho from './Filho';

class Pai extends Component {
  render() { 
    return (
      <div className="pai">
        <h3>Eu sou o Pai</h3>
        <Filho />
      </div>
    );
  }
}
 
export default Pai;