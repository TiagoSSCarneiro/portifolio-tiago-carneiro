const listaImagens = document.querySelectorAll('.imagem-projeto')
console.log(listaImagens)
const listaSeta = document.querySelectorAll('.seta')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imgAtual = 0


function mostrarOuEsconderSeta() {
    const naoEhAPrimeiraImagem = imgAtual !== 0
    if(naoEhAPrimeiraImagem){
        console.log("adicionou a seta")
        setaVoltar.classList.remove('seta-ativa')
    }else {
        console.log('removeu a seta')
        setaVoltar.classList.add('seta-ativa')
    }

    const chegouNaUltimaImagem = imgAtual !== 0 && imgAtual === listaImagens.length-1
    if(chegouNaUltimaImagem) {
        console.log('Ultima Imagem')
        setaAvancar.classList.add('seta-ativa')
    
     }else{
         setaAvancar.classList.remove('seta-ativa')
     }

}

function mostrarImagens() {
    listaImagens[imgAtual].classList.add('mostrar')


}
function esconderImagens() {
    listaImagens.forEach(imagem => {
        imagem.classList.remove('mostrar')

    })
}

setaAvancar.addEventListener('click', function () {
    
    if (imgAtual === listaImagens.length - 1) {
        return  
    } 

    imgAtual++
    esconderImagens()
    mostrarImagens()
    mostrarOuEsconderSeta()

})

setaVoltar.addEventListener('click', function () {
    if (imgAtual == 0) {
        return
    }
    
    imgAtual--
    esconderImagens()
    mostrarImagens()
    mostrarOuEsconderSeta()

})

