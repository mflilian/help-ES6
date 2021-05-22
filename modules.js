/**
  * Um módulo é apenas um arquivo. Um script é um módulo.
  Os módulos podem carregar uns aos outros e usar diretivas especiais de exportação e importação,
  funções de chamada de um módulo para outro:
  ----- 'export' permite exportar variáveis ​​e funções de rótulos de palavras-chave que devem ser acessíveis de fora do módulo atual.
  ----- 'import' permite a importação de funcionalidade de outros módulos.
  */

// utils.js
export const pi = 3.14;
export function add(x, y){
    return x + y;
}

// index.js
import {pi, add} from utils;