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
    btn.id        = 'panel-btn'
    btn.innerHTML = 'Adicionar novo medicamento'

    //btn.addEventListener('click', (e) => {
        //location.href = 'https://forms.gle/uq3FmSqZEsUYkKKs5'
    //})

    var section_title = document.createElement('div')
    section_title.classList.add('section-title')
    section_title.appendChild(title_span)
    section_title.appendChild(title)
    section_title.appendChild(subs)
    section_title.appendChild(btn)

    var first_row_col = document.createElement('div')
    first_row_col.classList.add('col-lg-12', 'col-md-6')

    for (const [key, values] of Object.entries(items)) {
        var info_box = document.createElement('div')
        info_box.classList.add('info-box', 'mb-4')
        info_box.setAttribute('style', 'padding-left: 20px;')

        for (const [name, value] of Object.entries(values)) {
            if (name == 'nome') {
                var info_title       = document.createElement('h4')
                info_title.innerHTML = value
                info_title.setAttribute('style', 'text-align: left; color: #63c055;')

                info_box.appendChild(info_title)
            } else {
                var att_text       = document.createElement('p')
                att_text.innerHTML = name + ': ' + value
                if (name == 'Proxima Compra')  {
                    att_text.innerHTML = name + ': ' + formatar_data(value)
                }
                att_text.setAttribute('style', 'text-align: left;')

                info_box.appendChild(att_text)
            }
        }

        first_row_col.appendChild(info_box) 
    }

    if (Object.entries(items).length == 0) {
        first_row_col.appendChild(document.createTextNode('Sem medicamentos registrados!'))
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