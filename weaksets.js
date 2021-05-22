/**
  * O objeto WeakSet pertmite que você armazene objetos mantidos “fracamente” na coleção.
  */

 var x = {};
 var y = function(){};
 
 var ws = new WeakSet();
 
 ws.add(x);
 ws.add(y);
 
 ws.has(x); // true
 
 ws.delete(x);
 
 ws.clear(); // purge whole weakset