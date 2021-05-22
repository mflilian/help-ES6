/**
  * spread permite que voce passe cada elemento de uma array como parametro.
  */

 let list = [1, 2, 3, 4];

 function pa(i, j, k, l){
     return i*j*k*l;
 }
 
 pa(...list); // 24