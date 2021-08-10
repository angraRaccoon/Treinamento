const interestBtns = document.querySelectorAll('#interest-button')
const modal = document.querySelector('.modal')
const header = document.getElementsByTagName('header')[0]
const main = document.getElementsByTagName('main')[0]
const footer = document.getElementsByTagName('footer')[0]

const closeBtn = document.querySelector('.close') 

interestBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'block'
        header.style.opacity = 0.2
        main.style.opacity = 0.2
        footer.style.opacity = 0.2
    })
})

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none'
    header.style.opacity = 1
    main.style.opacity = 1
    footer.style.opacity = 1
})

// Máscara setup

// Linkando inputs que precisam de mascara
document.addEventListener('DOMContentLoaded', () => {

    const phoneMask = new Cleave('#phone', {
        phone: true,
        phoneRegionCode: 'BR'
    })

    const cpfMask = new Cleave('#cpf', {
        delimiters: ['.','.','-'],
        blocks: [3,3,3,2]
    })
    
})



//Submit