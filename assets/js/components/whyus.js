import { CONFIGS } from "../config.js"

function WhyUs() {
    var title_span       = document.createElement('span')
    title_span.innerHTML = 'MVV'

    var title       = document.createElement('h2')
    title.innerHTML = 'MVV'

    var subs       = document.createElement('p')
    subs.innerHTML = 'Tem algo a nos dizer? Entre em contato'

    var section_title = document.createElement('div')
    section_title.classList.add('section-title')
    section_title.setAttribute('style', 'margin-top: 80px;')
    section_title.appendChild(title_span)
    section_title.appendChild(title)
    //section_title.appendChild(subs)

    var row = document.createElement('div')
    row.classList.add('row')

    for (var i=0; i<CONFIGS.REASONS.length; i++) {
        var span       = document.createElement('span')
        span.innerHTML = CONFIGS.REASONS[i][0]

        var title       = document.createElement('h4')
        title.innerHTML = CONFIGS.REASONS[i][1]

        var description = document.createElement('p')
        description.innerHTML = CONFIGS.REASONS[i][2]

        var box = document.createElement('div')
        box.classList.add('box')
        box.appendChild(span)
        box.appendChild(title)
        box.appendChild(description)

        var col = document.createElement('div')
        col.classList.add('col-lg-4')
        col.setAttribute('data-aos', 'fade-up')
        col.setAttribute('style', 'height: 300px;')
        col.setAttribute('data-aos-delay', (150*i).toString())
        col.appendChild(box)

        row.appendChild(col)
    }

    var container = document.createElement('div')
    container.classList.add('container')
    container.appendChild(section_title)
    container.appendChild(row)

    var section = document.createElement('section')
    section.classList.add('why-us')
    section.id  = 'why-us'
    section.appendChild(container)

    return section
}

export { WhyUs }