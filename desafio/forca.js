class Forca {

  constructor (palavraSecreta) {
    this.letrasChutadas = [];
    this.letras = palavraSecreta.split("");
    this.lacunas = this.letras.map(c => {return "_"});
    this.vidas = 6;
    this.estado = "aguardando chute";
    //Array para validação da entrada do usuário, evitando números e simbolos.
    this.entradaPermitida = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
  }

  chutar(letra) { 
    let lower = letra.toLowerCase(); //Transforma a entrada em minúsculo para não ter conflito nas regras do jogo.

    if (lower.length == 1 && !this.letrasChutadas.includes(lower) && this.entradaPermitida.includes(lower)) {
      this.letrasChutadas.push(lower);
      
      if (this.letras.includes(lower)) {

        this.lacunas = this.lacunas.map((l, i) => {
          if (this.letras[i] == lower) {
            return lower;
          } else {
            return l;
          }
        });

        if (!this.lacunas.includes('_')) {
          this.estado = "ganhou";
        }

      } else {
        this.vidas--;
        if (this.vidas == 0) {
          this.estado = "perdeu";
        }
      }
    }
  }

  buscarEstado() { return this.estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
          vidas: this.vidas, // Quantidade de vidas restantes
          palavra: this.lacunas, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
      }
  }
}

module.exports = Forca;
