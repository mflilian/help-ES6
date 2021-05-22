/**
 * Constante é uma variável de atribuição
 */
function pa(){
    const i = 1;

    let pe = i; // 1
    let i = 2; //erro
}

function paTwo(){
    const object = {
        nestedProperty: 1
    };

    object = 2; // erro
    object.nesteProperty = 2; //sem erro
}