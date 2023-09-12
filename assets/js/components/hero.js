import { CONFIGS } from "../config.js"

function Hero() {
    var title       = document.createElement('h1')
    title.innerHTML = CONFIGS.NAME

    var description       = document.createElement('h2')
    description.innerHTML = CONFIGS.SLOGAN

    var link        = document.createElement('a')
    link.classList.add('btn-get-started', 'scrollto')
    link.setAttribute('style', 'font-size: 25px; font-weight: 500;')
    link.href       = '#about'
    link.innerHTML  = 'Sobre'

    var container   = document.createElement('div')
    container.classList.add('container', 'position-relative')
    container.setAttribute('data-aos', "fade-up")
    container.setAttribute('data-aos-delay', '500')
    container.appendChild(title)
    container.appendChild(description)
    container.appendChild(link)

    var section     = document.createElement('section')
    section.classList.add('d-flex', 'align-items-center')
    section.id      = 'hero'
    section.appendChild(container)

    return section
}

export { Hero }