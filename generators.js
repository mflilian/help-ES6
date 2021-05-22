/**
  * Generators são funções que podem ser pausadas e retomadas posteriormente.
  * O contexto da função é salvo nas pausas.
  */

 function* count(){
    let start = 0;
    while(true) {
      yield start;
      ++start;
    }
  }
  
  let iterator = count();
  
  iterator.next(); //{value: 0, done: false}
  iterator.next(); //{value: 1, done: false}
  iterator.next(); //{value: 2, done: false}
  iterator.return();