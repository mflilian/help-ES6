/**
 * Default, parametro criado em função args e passado um valor padrão
 */

function pa(msg="Eu sou default") {
    return msg
}

pa(); // Eu sou default

/**
 * Versão ES5
 */

function ES5Pa(msg){
    msg = msg || "Eu sou default";
    return msg;
}


ES5Pa(); // Eu sou default