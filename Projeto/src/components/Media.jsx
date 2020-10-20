import React from "react";
import { connect } from "react-redux";

import Card from "./Card";

function Media(props) {
  const { min, max } = props.numeros;
  return (
    <Card title='Média dos Números' blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    numeros: state.numeros,
  };
}

export default connect(mapStateToProps)(Media);
