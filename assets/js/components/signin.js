import { CONFIGS } from "../config.js"

function Signin(planos) {
    var title_span       = document.createElement('span')
    title_span.innerHTML = 'Registrar'

    var title       = document.createElement('h2')
    title.innerHTML = 'Registrar'

    var subs       = document.createElement('p')
    subs.innerHTML = 'Crie seu usuario para entrar na Cloud Pharma e aproveitar tudo que essa platafoma tem a te oferecer. Entraremos em contato por esse email dentro de 24h apos o envio do formulario para enviar os proximos passos.'

    var section_title = document.createElement('div')
    section_title.classList.add('section-title')
    section_title.appendChild(title_span)
    section_title.appendChild(title)
    section_title.appendChild(subs)

    var icon = document.createElement('i')
    icon.classList.add('bx', 'bx-envelope')

    var info_title       = document.createElement('h3')
    info_title.innerHTML = 'Contato para duvidas'

    var email_text       = document.createElement('p')
    email_text.innerHTML = CONFIGS.EMAIL

    var info_box = document.createElement('div')
    info_box.classList.add('info-box', 'mb-4')
    info_box.appendChild(icon)
    info_box.appendChild(info_title)
    info_box.appendChild(email_text)

    var first_row_col = document.createElement('div')
    first_row_col.classList.add('col-lg-12', 'col-md-6')
    first_row_col.appendChild(info_box)

    var first_row = document.createElement('div')
    first_row.classList.add('row')
    first_row.setAttribute('data-aos', 'fade-up')
    first_row.appendChild(first_row_col)

    var username_input         = document.createElement('input')
    username_input.classList.add('form-control')
    username_input.type        = 'email'
    username_input.name        = 'subject'
    username_input.id          = 'username'
    username_input.placeholder = 'Email'
    username_input.setAttribute('required', '')

    var username_group = document.createElement('div')
    username_group.classList.add('mt-3', 'form-group')
    username_group.appendChild(username_input)

    var subject_group = document.createElement('div')
    subject_group.classList.add('mt-3', 'form-group')

    var subject_input         = document.createElement('select')
    subject_input.id          = 'plan'
    subject_input.classList.add('form-control')
    subject_input.setAttribute('required', '')
    subject_input.setAttribute('style', 'color: #666666; font-size: 15px;')

    var arrow_icon = document.createElement('i')
    arrow_icon.classList.add('bi', 'bi-caret-down-fill')
    arrow_icon.setAttribute('style', 'color: #666666; position: relative; float: right; top: -28px; right: 20px;')

    subject_group.appendChild(subject_input)
    subject_group.appendChild(arrow_icon)

    for (var i=0; i<planos.length; i++) {
        var basic_span       = document.createElement('option')
        basic_span.innerHTML = planos[i]
        basic_span.setAttribute('style', 'font-size: 15px;')
        if (i==0) {
            basic_span.setAttribute('disabled', '')
            basic_span.setAttribute('selected', '')
        } else {
            basic_span.setAttribute('style', 'color: black;')
            basic_span.addEventListener('click', (e) => {
                subject_input.setAttribute('style', 'color: black;')
                arrow_icon.remove()
            })
        }
        subject_input.appendChild(basic_span)
    }

    var loading = document.createElement('div')
    loading.classList.add('loading')
    loading.innerHTML = 'Carregando...'

    var error = document.createElement('div')
    error.classList.add('error-message')
    error.innerHTML = 'Sua mensagem foi enviada! Logo entraremos em contato.'

    var sent = document.createElement('div')
    sent.classList.add('sent-message')
    sent.innerHTML = 'Sua mensagem foi enviada! Logo entraremos em contato.'

    var handling = document.createElement('div')
    handling.classList.add('my-3')
    handling.appendChild(loading)
    handling.appendChild(error)
    handling.appendChild(sent)

    var btn       = document.createElement('button')
    btn.id        = 'signin-btn'
    btn.type      = 'button'
    btn.innerHTML = 'Criar'

    var btn_group = document.createElement('div')
    btn_group.classList.add('text-center')
    btn_group.appendChild(btn)

    var terms_input         = document.createElement('input')
    terms_input.type        = 'checkbox'
    terms_input.id          = 'terms'
    terms_input.setAttribute('required', '')

    var terms_text = document.createElement('a')
    terms_text.innerHTML = 'termos e condicoes de uso'
    terms_text.setAttribute('style', 'color: #78ee66;')

    var terms_label = document.createElement('label')
    terms_label.setAttribute('for', 'terms')
    terms_label.innerHTML = 'Li e aceito os '
    terms_label.appendChild(terms_text)

    var terms_group = document.createElement('div')
    terms_group.classList.add('text-center')
    terms_group.appendChild(terms_input)
    terms_group.appendChild(terms_label)

    var form = document.createElement('form')
    form.classList.add('php-email-form', 'mt-4', 'login-form')
    form.action = ''
    form.method = 'post'
    form.id     = 'form'
    form.role   = 'form'
    form.appendChild(username_group)
    form.appendChild(subject_group)
    form.appendChild(handling)
    form.appendChild(terms_group)
    form.appendChild(document.createElement('br'))
    form.appendChild(btn_group)

    var second_row_col = document.createElement('div')
    second_row_col.classList.add('col-lg-12')
    second_row_col.appendChild(form)

    var second_row = document.createElement('div')
    second_row.classList.add('row')
    second_row.setAttribute('data-aos', 'fade-up')
    second_row.appendChild(second_row_col)

    var container = document.createElement('div')
    container.classList.add('container')
    container.appendChild(section_title)
    container.appendChild(first_row)
    container.appendChild(second_row)

    var section   = document.createElement('section')
    section.classList.add('contact')
    section.id    = 'contact'
    section.appendChild(container)

    return section 
}

export { Signin }