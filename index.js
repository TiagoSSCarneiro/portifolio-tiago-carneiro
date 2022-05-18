const listaImagens = document.querySelectorAll('.projeto')
const listaSeta = document.querySelectorAll('.seta')
const setaVoltar = document.getElementById('seta-voltar')
const setaAvancar = document.getElementById('seta-avancar')

let imgAtual = 0


function mostrarSeta() {
    listaSeta.forEach(seta =>{
        seta.classList.add('seta-ativa')
    })
  
}

function mostrarImagens () {
    listaImagens[imgAtual].classList.add('img-ativa')


}
function esconderImagens() {
    listaImagens.forEach(imagem => {
        imagem.classList.remove('img-ativa')

    })
}

setaAvancar.addEventListener('click', function () {
    //Verificar se chegou na ultima imagem
    //se sim, tirar seta e dar o return

    console.log(imgAtual)
    console.log(listaImagens.length-1)
   
    imgAtual ++ 
   
    esconderImagens()
    mostrarImagens()
    //mostrarSeta()
    if (imgAtual === listaImagens.length-1) {
        console.log('teste seta')
      
    }  
})

setaVoltar.addEventListener('click', function () {
    if (imgAtual == 0) return
    imgAtual --
    esconderImagens()
    mostrarImagens()
   
})

