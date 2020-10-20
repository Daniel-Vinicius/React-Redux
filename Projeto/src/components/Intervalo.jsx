import "./Intervalo.css";
import React from "react";
import { connect } from "react-redux";

import Card from "./Card";
import { alterarNumeroMinimo, alterarNumeroMáximo } from "../store/actions/numerosAction";

function Intervalo(props) {
  const { min, max } = props;

  return (
    <Card title='Intervalo de Números' red>
      <div className='Intervalo'>
        <span>
          <strong>Mínimo: </strong>
          <input type='number' value={min} onChange={e => props.alterarMin(+e.target.value)}/>
        </span>

        <span>
          <strong>Máximo: </strong>
          <input type='number' value={max} onChange={e => props.alterarMax(+e.target.value)} />
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    max: state.numeros.max,
    min: state.numeros.min,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMin(novoNumero) {
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action); // o dispatch torna acessivel ao store sua action
    },
    alterarMax(novoNumero) {
      const action = alterarNumeroMáximo(novoNumero);
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
