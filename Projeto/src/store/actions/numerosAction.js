import {
    NUM_MIN_ALTERADO,
    NUM_MAX_ALTERADO
} from './actionTypes'

export function alterarNumeroMinimo(novoNumero) { // novo numero seria o novo valor
    return {
        type: NUM_MIN_ALTERADO,  //type é um nome pra identificar qaul action foi disparada
        payload: novoNumero        // payload é o novo valor
    }
}

export function alterarNumeroMáximo(novoNumero) {
    return {
        type: NUM_MAX_ALTERADO,
        payload: novoNumero
    }
}