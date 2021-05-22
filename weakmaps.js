/**
  * O objeto WeakMap é uma coleção de pares key/value na qual as chaves são fracamente referenciadas.
  * As chaves devem ser objetos, e os valores podem ser de tipos arbitrários.
  */

 var x = {};
 var y = function(){};
 var z = "pa";
 
 var w = new WeakMap();
 
 w.set(x, "bar");
 w.set(y, 123);
 w.set(z, "xyz"); // erro - key precisa ser um objeto
 
 w.get(x); // bar
 w.get(y); // 123
 
 w.has(x); // true