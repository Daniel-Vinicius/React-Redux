REDUX

---

1- Instale o Redux e o React-Redux com os comandos:

    yarn add react-redux
    yarn add redux

---

2- Crie uma pasta chamada store em src e lá um arquivo .js como por exemplo storeConfig.js

---

3- No arquivo escreva um código parecido a esse:

```
import {createStore, combineReducers} from 'redux'
// importando o createStore e o combineReducers

const reducers = combineReducers({ 
// criando constando chamada reducers que evoca o combineReducers

numeros: function(state, action) {
// criando um reducer que seria como um estado no React chamado numeros

switch (action.type) {
//  dando um switch case no nome da action que por convenção chamamos de type

case('NUM_MIN_ALTERADO') : 
            return {
                ...state, min: action.payload
            }
// case ele for num_min_alterado retorne o estado anterior mais o min com o novo valor dele gerado pela action que por convenção chamamos de payload

case('NUM_MAX_ALTERADO') :
return {
...state, max: action.payload
}
 // mesma coisa de cima só que pra máximo

            default:
              return {
                  min: 0,
                  max: 0
        }
        }        
    },    
// caso não tenha nenhuma action disparada o padrão é 0 e 0

    nomes: function(state, action) {
        console.log('Reducer Nomes...')
        console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]
    }
       // criando um reducer de exemplo chamado nomes
})

function storeConfig() {
return createStore(reducers)
}
// criando uma função que poderia ter qualquer nome que retorna o método que importamos lá em cima o createStore e passando para ele a const reducers que tem os nossos reducers

export default storeConfig; 
// exportando tudo isso
```

---

4- lá em index.js

1- importe o Provider do react-redux e o seu store

```
import { Provider } from 'react-redux'
import configStore from './store/storeConfig'
```

2- crie uma const que chama seu store
`const store = configStore();`

3- coloque o provider em volta de tudo e passe pra ele a propriedade chamada store com o valor
```
ReactDOM.render(
<Provider store={store}>
<React.StrictMode>
<App />
</React.StrictMode>
</Provider>,
document.getElementById('root')
);

```
Agora o estado já é alterado se você mudar seu store, o que vamos fazer agora

---

5- Crie uma pasta chamada actions e dentro dela um arquivo com estensão.js

6- Exporte uma função js com este formato

```
export function alterarNumeroMinimo(novoNumero) {
return {
type: 'NUM_MIN_ALTERADO', 
payload: novoNumero
}
}

// novo numero seria o novo valor
// type é um nome pra identificar qual action foi disparada
// payload é o retorno da função, que agora pode ser chamado assim como no UseState comum.
```

---

7- Agora em algum componente importe o connect
`import { connect } from "react-redux";`

8- importe o arquivo de actions e suas actions
`import { alterarNumeroMinimo, alterarNumeroMáximo } from "../store/actions/numeros";`

9- Crie uma função com este nome (por convenção)

```
function mapDispatchToProps(dispatch) {
// criando função que exporta minha action para a store

return {
alterarMin(novoNumero) { 
const action = alterarNumeroMinimo(novoNumero);
// criando metodo que armazena numa const chamada action a função que criamos lá em actions e executa ela

dispatch(action); 
// o dispatch torna acessivel ao store sua action

},

alterarMax(novoNumero) {
const action = alterarNumeroMáximo(novoNumero);
dispatch(action);
}
 // mesma coisa pra maximo

}
}
```

Esta função também pode ser escrita desta forma: 

```
const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)
```

Porém quando for usar, se usava assim: 

```
props.alterarMin(numero) ou this.props.alterarMin(numero)
```

e agora usasse direto o método: 

```
  componentWillMount() {
    this.props.selectTab('tabList')
  }
```

como no exemplo acima


---

10 - crie uma função com este nome por convenção

```
function mapStateToProps(state) {
return {
max: state.numeros.max,
min: state.numeros.min,
};
}

// esta função pega o estado global e retorna de dentro dele o max e o min
```

---

11- Exporte seu componente executando as funções criadas e usando o connect

`export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);`

---

12- pegue os valores de mapStateToProps de props

`const { min, max } = props;`

---

13- pode usar macho!

``
         <input type='number' value={min} onChange={e => props.alterarMin(+e.target.value)}/>
``

---

14- Abstraindo

Crie uma pasta reducers em store, depois copie o código do reducer e jogue lá

```
const initialState = {
min: 0,
max: 0,
};

// criando const que armazena o estado inicial


export default function (state = initialState, action) { 
// inicializando reducer com o initialState

switch (action.type) {
case "NUM_MIN_ALTERADO":
return {
...state,
min: action.payload,
};
case "NUM_MAX_ALTERADO":
return {
...state,
max: action.payload,
};
default:
return state; 
// o default agora e o state
}
}
```

agora o arquivo de store é bem mais organizado

```
import {createStore, combineReducers} from 'redux'
import numerosReducer from './reducers/numerosReducers'

const reducers = combineReducers({
numeros: numerosReducer,
})

function storeConfig() {
return createStore(reducers)
}

export default storeConfig;
```

---

15- Crie um arquivo em actions chamado constsActions e lá armazene todas os types em const dessa forma:

`export const NUM_MIN_ALTERADO = 'NUM_MIN_ALTERADO'` e 


`export const NUM_MAX_ALTERADO = 'NUM_MAX_ALTERADO'`


Depois importe e use, isso diminiu a chance de erro

```
import {NUM_MIN_ALTERADO, NUM_MAX_ALTERADO} from './actionTypes'

export function alterarNumeroMinimo(novoNumero) {
return {
type: NUM_MIN_ALTERADO,
payload: novoNumero
}
}

export function alterarNumeroMáximo(novoNumero) {
return {
type: NUM_MAX_ALTERADO,
payload: novoNumero
}
}
```
