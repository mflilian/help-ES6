/**
  * rest sao parametros passados como array para uma função
  */

 function pa(...x){
    // x é um array
    return x.length;
  }

  pa(1, 2, 3, 4); // 4