const botaoPlayPause = document.getElementById("play-pause")
const audio = document.getElementById("faixa")
const avanca = document.getElementById("proximo")
const volta = document.getElementById("anterior")
const num_capitulo = document.getElementById("capitulo")

const numeroCapitulos = 10
let capituloAtual = 1

let tocando = 0

function tocar(){
    audio.play()
    tocando = 1
    botaoPlayPause.className = "bi bi-pause-circle-fill"
}

function pausar(){
    audio.pause()
    tocando = 0
    botaoPlayPause.className = "bi bi-play-circle-fill"
}

function tocaOuPausa(){
    if(tocando == 0){
        tocar()
    } else {
        pausar()
    }
}

function avancar(){
    if(capituloAtual == numeroCapitulos){
        capituloAtual = 1
    } else {
        capituloAtual += 1
    }

    audio.src = "./books/dom-casmurro/"+capituloAtual+".mp3"
    num_capitulo.innerHTML = "Capitulo " + capituloAtual
    tocar()
}

function retroceder(){
    if(capituloAtual == 1){
        capituloAtual = 10
    } else {
        capituloAtual -= 1
    }

    audio.src = "./books/dom-casmurro/"+capituloAtual+".mp3"
    num_capitulo.innerHTML = "Capitulo " + capituloAtual
    tocar()
}

botaoPlayPause.addEventListener("click", tocaOuPausa);

avanca.addEventListener("click", avancar)

volta.addEventListener("click", retroceder)