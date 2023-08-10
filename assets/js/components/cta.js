function CTA(title_text, description_text, link, btn_text) {
    var title       = document.createElement('h3')
    title.innerHTML = title_text

    var description       = document.createElement('p')
    description.innerHTML = description_text

    var btn       = document.createElement('a')
    btn.classList.add('cta-btn')
    btn.href      = link
    btn.innerHTML = btn_text

    var center = document.createElement('div')
    center.classList.add('text-center')
    center.appendChild(title)
    center.appendChild(description)
    center.appendChild(btn)

    var container = document.createElement('div')
    container.classList.add('container')
    container.setAttribute('data-aos', 'zoom-in')
    container.appendChild(center)

    var section = document.createElement('section')
    section.classList.add('cta')
    section.id  = 'cta'
    section.appendChild(container)
    
    return section
}

export { CTA }