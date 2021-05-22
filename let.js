/**
  * Declara uma variável local no escopo do bloco atual, opcionalmente iniciando-a com um valor.
  */

 function foo(){
    for(let i = 0; i< 10; i++){
        // i está visivel
    }
    // i não está visivel
  }