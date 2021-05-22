/** 
* O objeto Proxy é usado para definir comportamentos customizados para operações fundamentais 
(por exemplo, pesquisa de propriedade, atribuição, enumeração, invocação de função, etc.)..
*/

let target = {
    guest: "Bem-vindo, Convidado"
  };
  
  let proxy = new Proxy(target, {
    get (obj, prop, val) {
        return val in obj ? obj[val] : 'Olá, ${val}'
    },
    set (obj, prop, val){
      if(prop === 'password'){
        if(val.length<8){
          throw new TypeError('O comprimento da senha deve ser maior que 8 caracteres');
        } else {
          obj[prop] = val;
        }
      } else {
        obj[prop] = val;
      }
    }
  });
  
  proxy.guest;  // "Bem-vindo, Convidado"
  proxy.userX; // "Olá, UserX"
  proxy.password = 'abc'; //O comprimento da senha deve ser maior que 8 caracteres.
  proxy.age = 22; //age=22
  
  
  
  