import { CONFIGS } from "../config.js"

function About() {
    var image   = document.createElement('img')
    image.classList.add('img-fluid')
    image.src   = 'assets/img/logos/about.png'
    image.alt   = 'logo'
    image.style = 'margin-left: 5vw;'

    var img_col = document.createElement('div')
    img_col.classList.add('col-lg-6', 'order-1', 'order-lg-2')
    img_col.setAttribute('data-aos', 'fade-left')
    img_col.setAttribute('style', 'padding-top: 110px; padding-bottom: 110px;')
    img_col.appendChild(image)

    var title       = document.createElement('h3')
    title.innerHTML = CONFIGS.SHORT_ABOUT

    var description       = document.createElement('p')
    description.classList.add('fst-italic')
    description.innerHTML = CONFIGS.LONG_ABOUT

    var text_col = document.createElement('div')
    text_col.classList.add('col-lg-6', 'pt-4', 'pt-lg-0', 'order-2', 'order-lg-1', 'content')
    text_col.setAttribute('data-aos', 'fade-right')
    text_col.appendChild(title)
    text_col.appendChild(description)

    var row = document.createElement('div')
    row.classList.add('row')
    row.appendChild(img_col)
    row.appendChild(text_col)

    var container = document.createElement('div')
    container.classList.add('container')
    container.appendChild(row)

    var section = document.createElement('section')
    section.classList.add('about')
    section.id  = 'about'
    section.appendChild(container)

    return section
}

export { About }