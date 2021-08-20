
// Linkando os slides do carousel e os botões
const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right') 
const prevButton = document.querySelector('.carousel__button--left')

// Linkando os dots do nav
const nav = document.querySelector('.carousel__nav')
const dots = Array.from(nav.children)

// Pegando o width do slide
const slideWidth = slides[0].getBoundingClientRect().width

// Indica qual a posição de cada slide na tela
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`
})


// Garante a movimentação dos slides
const moveToSlide = (track, currentSlide, targetSlide) => {

    track.style.transform = `translateX(-${targetSlide.style.left})`
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
    const h1 = targetSlide.children[0]
    const h5 = targetSlide.children[1]
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    if(vw >= 1024){
        h1.style.marginTop = '10%'
        h5.style.marginTop = '25%'
    }else{
        h5.style.bottom = "-400px"
    }

}


// Atualiza qual slide é o atual
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
}

// Evento ao clicar botão esquerdo
prevButton.addEventListener('click', (ev) => {
    const currentSlide = track.querySelector('.current-slide') 
    const prevSlide = currentSlide.previousElementSibling
    const currentDot = nav.querySelector('.current-slide')
    const prevDot = currentDot.previousElementSibling

    moveToSlide(track, currentSlide, prevSlide)
    updateDots(currentDot, prevDot)
})

// Evento ao clicar o botão direito
nextButton.addEventListener('click', (ev) => {

    const currentSlide = track.querySelector('.current-slide') 
    const nextSlide = currentSlide.nextElementSibling
    const currentDot = nav.querySelector('.current-slide')
    const nextDot = currentDot.nextElementSibling

    moveToSlide(track, currentSlide, nextSlide)
    updateDots(currentDot, nextDot)
})

// Clicar nos dots
nav.addEventListener('click', (ev) => {

    const targetDot = ev.target.closest('button')
   
    if(!targetDot) return
    
    const currentSlide = track.querySelector('.current-slide')
    const currentDot = nav.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex]

    moveToSlide(track, currentSlide, targetSlide)
    updateDots(currentDot, targetDot)
})