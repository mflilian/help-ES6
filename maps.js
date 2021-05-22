/**
  * O objeto Map é um mapa simples de chave/valor. Qualquer valor (objeto e valores primitivos) pode ser usado como uma chave ou um valor.
  */

 let x = {};
 let y = 9;
 let z = "pa";
 
 let m = new Map();
 
 m.set(x, 34);
 m.set(y, "bar");
 m.set(z, {data: "test"});
 
 m.get(x); // 34
 m.get(y); // "bar"
 m.get(z); // {data: "test"}
 
 m.size; // 3