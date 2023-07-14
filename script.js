const result = document.querySelector(".result")
const pontuacaoMinha = document.querySelector("#minhaPontuacao")
const maquinaPontucao = document.querySelector("#pontuacaoDaMaquina")

let pontosMeu = 0;
let pontosDaMaquina = 0;

const ClickButton = (chamando) => {

    JogarOJogo(chamando, jogarOuPerder())
}

const jogarOuPerder = () => {
    const mapa = ['pedra', 'papel', 'tesoura']
    const saida = Math.floor(Math.random() * 3)

    return mapa[saida]
}

const JogarOJogo = (human, maquina) => {

    console.log('Humano:' + human + "Maquina" + maquina)

    if (human === maquina) {
        result.innerHTML = "Deu empate! &#x1F644;"

    } else if (
        (human === 'pedra' && maquina === 'tesoura') ||
        (human === 'tesoura' && maquina === 'papel') ||
        (human === 'papel' && maquina === 'pedra')
    ) {
        pontosMeu++
        minhaPontuacao.innerHTML = pontosMeu
        result.innerHTML = "Parabéns você ganhou! &#x1F601;"
    } else {
        pontosDaMaquina++;
        pontuacaoDaMaquina.innerHTML = pontosDaMaquina;
        result.innerHTML = "Você perdeu para alexa! &#x1F636;" 
    }

}