/**
  * Promises são usadas para cálculos adiados e assíncronos.
  * Uma promise representa uma operação que ainda não foi concluída, mas é esperada no futuro.
  */
 
 var pe = new Promise(function (resolve, reject) {
    //Verifica se a data/hora atual é um número par e resolve
    if (Date.now() % 2 === 0) {
      //Passa o status 200 para sucesso na função de callback
      resolve(200);
    } else {
      //Passa a status 404 se o callback falhar
      reject(404);
    }
  });
  
  //Quando a promise for resolvida, execute a seguinte função de callabck
  pa.then(function (status) {
    console.log("Successfully resolved: " + status);
  });
  
  //Quando a promise for rejeitada com erro, execute a seguinte função de callback 
  pa.catch(function (status) {
    console.log("An error occurred: " + status);
  });
  