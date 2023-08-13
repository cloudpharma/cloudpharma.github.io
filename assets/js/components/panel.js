function formatar_data(data) {
    var cortada = data.split("T")[0]
    var partes  = cortada.split("-")
    return partes[2] + "/" + partes[1] + "/" + partes[0]
}


function Panel(items) {
    var title_span       = document.createElement('span')
    title_span.innerHTML = 'Estoque'

    var title       = document.createElement('h2')
    title.innerHTML = 'Estoque'

    var subs       = document.createElement('p')
    subs.innerHTML = 'Segue abaixo todos os item presentes em seu estoque e suas devidas informacoes.'

    var btn       = document.createElement('button')
    btn.classList.add('panel-btn')
    btn.setAttribute('style', 'margin-top: 20px;')
    btn.type      = 'button'
    btn.innerHTML = 'Adicionar novo medicamento'

    btn.addEventListener('click', (e) => {
        location.href = 'https://forms.gle/uq3FmSqZEsUYkKKs5'
    })

    var section_title = document.createElement('div')
    section_title.classList.add('section-title')
    section_title.appendChild(title_span)
    section_title.appendChild(title)
    section_title.appendChild(subs)
    section_title.appendChild(btn)

    var first_row_col = document.createElement('div')
    first_row_col.classList.add('col-lg-12', 'col-md-6')

    for (const [key, value] of Object.entries(items)) {
        var info_title       = document.createElement('h4')
        info_title.innerHTML = value['nome']
        info_title.setAttribute('style', 'text-align: left; color: #63c055;')

        var email_text       = document.createElement('p')
        email_text.innerHTML = 'Quantidade em estoque: ' + value['Quantidade']
        email_text.setAttribute('style', 'text-align: left;')

        var next_text       = document.createElement('p')
        next_text.innerHTML = 'Proxima compra: ' + formatar_data(value['Proxima Compra'])
        next_text.setAttribute('style', 'text-align: left;')

        var info_box = document.createElement('div')
        info_box.classList.add('info-box', 'mb-4')
        info_box.setAttribute('style', 'padding-left: 20px;')
        info_box.appendChild(info_title)
        info_box.appendChild(email_text)
        info_box.appendChild(next_text)

        first_row_col.appendChild(info_box) 
    }


    var first_row = document.createElement('div')
    first_row.classList.add('row')
    first_row.setAttribute('data-aos', 'fade-up')
    first_row.appendChild(first_row_col)

    var container = document.createElement('div')
    container.classList.add('container')
    container.appendChild(section_title)
    container.appendChild(first_row)

    var section   = document.createElement('section')
    section.classList.add('contact')
    section.id    = 'contact'
    section.appendChild(container)

    return section
}

export { Panel }