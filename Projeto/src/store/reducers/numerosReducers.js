import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from '../actions/actionTypes'

const initialState = {       // criando const que armazena o estado inicial
  min: 0,
  max: 0,
};

export default function (state = initialState, action) {    // inicializando reducer com o initialState
  switch (action.type) {
    case NUM_MIN_ALTERADO :
      return {
        ...state,
        min: action.payload,
      };
    case NUM_MAX_ALTERADO:
      return {
        ...state,
        max: action.payload,
      };
    default:
      return state;                      // o default agora e o state
  }
}
