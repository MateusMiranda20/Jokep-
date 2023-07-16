const resultado = document.querySelector('.result')
const humanoV = document.querySelector('#minhaPontuacao')
const maquinaV = document.querySelector('#pontuacaoDaMaquina')

let humanoGanha = 0;
let maquinaGanha = 0;

const ClickButton = (chamando) => {
    
    theMaquinaAndHuman(chamando, theGame())
}

const theGame = () => {
    const retorna = ['pedra', 'papel', 'tesoura']
    const soma = Math.floor(Math.random() * 3)

    return retorna[soma]

}

const theMaquinaAndHuman = (maquina, humano) => {

    console.log("Maquina" + maquina + "humano" + humano)

    if (maquina === humano) {
        resultado.innerHTML = "Deu empate! &#x1F644;"
    } else if (
        (humano === "pedra" & maquina === "tesoura") ||
        (humano === "tesoura" & maquina === "papel") ||
        (humano === "papel" & maquina === "pedra")
        ) {
        humanoGanha++
        minhaPontuacao.innerHTML = humanoGanha
        resultado.innerHTML = "Você ganhou &#x1F601;"
    } else {
        maquinaGanha++
        pontuacaoDaMaquina.innerHTML = maquinaGanha
        resultado.innerHTML = "Você perdeu para alexa &#x1F636;"
    }
}