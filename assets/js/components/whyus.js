function WhyUs(items) {
    var row = document.createElement('div')
    row.classList.add('row')

    for (var i=0; i<items.length; i++) {
        var span       = document.createElement('span')
        span.innerHTML = items[i][0]

        var title       = document.createElement('h4')
        title.innerHTML = items[i][1]

        var description = document.createElement('p')
        description.innerHTML = items[i][2]

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
    container.appendChild(row)

    var section = document.createElement('section')
    section.classList.add('why-us')
    section.id  = 'why-us'
    section.appendChild(container)

    return section
}

export { WhyUs }