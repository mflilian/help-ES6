/**
  * Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto.
  */
 class Animal { 
    constructor(type, sound) {
      this.type = type;
      this.sound = sound;
    }
    
    fazBarulho() {
      return ('O ' + this.type + ' faz ' + this.sound);
    }
  }
  
  let ikki = new Animal("cachorro", "auau");
  
  ikki.fazBarulho(); // retorna "O cachorro faz auau"
  
  /**
   * ES5 version
   */
  function ES5Animal(type, sound) {
   this.type = type;
   this.sound = sound;
  }
  
  ES5Animal.prototype.fazBarulho = function() {
   return 'A ' + this.type + ' faz ' + this.sound;
  }
  
  var choninha = new ES5Animal("gata", "meow");
  
  choninha.fazBarulho();  // retorna "A gata faz meow"