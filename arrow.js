
 // Arrow functions possuem uma sintaxe menor do que as expressões de função.
 // Essas funções também vinculam lexicamente o valor `this` e são sempre anônimas.

  
 let ele = ["Hello", "World"];

 //Argumentos únicos não requerem parênteses ou chaves.
 //A declaração do return fica implícita.

 let nao = ele.map(x => x.length);
 
 // ES5
 var nao = ele.map(function(x) { return x.length; });
 
 //Funções multilinhas requerem chaves
 //Sem nenhum argumento nos parênteses

 let elenao = () => {
     console.log("Hello");
     console.log("World");
 };

 // ES5
 var elenao = function() {
     console.log("Hello");
     console.log("World");
 };

 //Para retornar ao literal(valor fixo ) é necessário o uso dos colchetes.
 let bla = () => ({ "myNumber" : 123 });


 //ES5
 var bla = function() {
     return { "myNumber" : 123 };
 };