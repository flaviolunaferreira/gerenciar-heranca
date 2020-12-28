import React, { Component } from 'react';
import Pai from './Pai';

class Avo extends Component {
  render() { 
    return (
      <div className="avo">
        <h2>Eu sou o Avo</h2>
        <Pai />
      </div>
    );
  }
}
 
export default Avo;