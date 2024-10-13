class Heroi {
    constructor (nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        let ataque = ""
    switch (this.tipo){
        case 'mago'
        ataque = 'magia'
        break;
     case 'guerreiro'
       ataque = 'espada'
       break;
     case 'monge'
       ataque = 'artes marciais'
       break
    case 'ninja'
       ataque = 'shuriken'
       break
    default:
        ataque = 'ataque desconhecido'
break;
}
console.log(`O ${this.tipo} atacou usando ${ataque}.`);
    }

}

function criarheroi(){
    const nome = prompt("Digite o nome do heroi : ");
    const idade = parseInt (prompt("Digite sua idade "))
    const tipo = prompt("Digite o tipo de heroi(mago,guerreiro,monge,ninja :)")
    const heroi = new Heroi(nome, idade, tipo)
    heroi.atacar()
}
criarHeroi();