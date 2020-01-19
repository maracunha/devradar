import React, { useState } from 'react';

// Componente : Bloco isolado de HTML, CSS e JS e qual não interfere no restante da aplicação. 
// Propriedade : (atributo em HTML) Informações que um componente PAI para o componenten FILHO.
// Estado : Informação mantidas pelo componentes (Lembrar: imutabilidade)

function App() {
  const [counter, setCounter] = useState(0)

  function incrementCounter() {
    setCounter(counter + 1)
  }

  return (
    // <> esse cara aqui é o fragment
    <> esse cara aqui é o fragment
    <h1>Contar {counter}</h1>
    <button onClick={incrementCounter}>Incrementar</button>
    <h1>Hello Mano</h1>
    <h1>Hello Mano</h1>
    </>
  )
}

export default App;
