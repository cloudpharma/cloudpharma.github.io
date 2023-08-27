import { PreLoader } from "../utils/loading.js"
import { ApiHandler } from "../utils/apihandler.js"

var main       = document.getElementById('main')
var preloader  = new PreLoader(main)
var apihandler = new ApiHandler()

function formatar_data(data) {
    var cortada = data.split("T")[0]
    var partes  = cortada.split("-")
    return partes[2] + "/" + partes[1] + "/" + partes[0]
}

function Panel(items, email, id) {
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

    var section_title = document.createElement('div')
    section_title.classList.add('section-title')
    section_title.appendChild(title_span)
    section_title.appendChild(title)
    section_title.appendChild(subs)
    section_title.appendChild(btn)

    var first_row_col = document.createElement('div')
    first_row_col.classList.add('col-lg-12', 'col-md-6')

    for (const [key, values] of Object.entries(items)) {
        let med_nome = ''

        let info_box = document.createElement('div')
        info_box.classList.add('info-box', 'mb-4')
        info_box.setAttribute('style', 'padding-left: 20px; height: 180px;')

        for (const [name, value] of Object.entries(values)) {
            if (name == 'nome') {
                med_nome             = value

                let info_title       = document.createElement('h4')
                info_title.innerHTML = value
                info_title.setAttribute('style', 'text-align: left; color: #63c055;')

                info_box.appendChild(info_title)
            } else {
                let att_text       = document.createElement('p')
                att_text.innerHTML = name + ': ' + value
                if (name == 'Proxima Compra')  {
                    att_text.innerHTML = name + ': ' + formatar_data(value)
                }
                att_text.setAttribute('style', 'text-align: left;')

                info_box.appendChild(att_text)
            }
        }

        let remove_btn = document.createElement('button')
        remove_btn.innerHTML = 'Remover'
        remove_btn.classList.add('panel-btn')
        remove_btn.setAttribute('style', 'position: relative; float: left; top: 10px;')

        remove_btn.addEventListener('click', (e) => {
            if (confirm("Voce quer mesmo remover esse medicamento do seu estoque? Nao tem como reverter essa acao.")) {
                preloader.build()
                let delete_api = "https://script.google.com/macros/s/AKfycbzt3tJzQlKILUxMVTdtBoKiJRyorWsERh-GHryJlhPsG-ONvuEFPhxELJ7EK16ysU7ZvQ/exec?email=" + email + "&id=" + id + "&med=" + med_nome
                apihandler.getUrl(delete_api).then((e) => {
                    preloader.remove()
                    info_box.remove()
                    alert('Medicamento removido com sucesso!')
                })
            }
        })

        info_box.appendChild(remove_btn)

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