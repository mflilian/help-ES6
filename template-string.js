/**
  * Template Strings são strings que permitem expressões embutidas.
  * Você pode utilizar string multi-linhas e interpolação de string com elas.
  */

 var x = "pa";
 var y = "bar";
 
 // es5
 var join = x + ' ' + y; // pa bar
 
 // es6
 var join = `${x} ${y}`; // pa bar
 
 /*
 pa
 bar
 */
 
 // es5
 var join = x + '\n' + y;
 
 // es6
 var join = `${x}
 ${y}`;