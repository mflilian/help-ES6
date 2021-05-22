/**
  * Set é uma coleçao de valores únicos. Um set pode ser is a collection of unique values.
  * Um set can be iterado na ordem em que os elementos foram inseridos.
  */

 var pa = new Set();

 pa.add(1);
 pa.add(2);
 pa.add("three");
 
 pa.has(1); // true
 
 pa.size; // 3
 
 pa.delete(2); // removes 2 from pa