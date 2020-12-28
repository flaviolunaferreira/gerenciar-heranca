import React, { Component } from 'react';
import Contexto from '../context/Contexto';

class Filho extends Component {
  render() { 
    return (
      <div className="filho">
        <h4>Eu Sou o Filho</h4>
        <Contexto.Consumer>
          {value => (
            <div>
              {console.log(value)}
              <p>{`Eu tenho ${value.dinheiro} para gastar`}</p>
              <button onClick={value.gastar}>Pedir Cerveja!!!</button>
            </div>
            )
          }
        </Contexto.Consumer>
      </div>
    );
  }
}
 
export default Filho;