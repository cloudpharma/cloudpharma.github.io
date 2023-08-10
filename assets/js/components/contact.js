function Contact(email) {
    var title_span       = document.createElement('span')
    title_span.innerHTML = 'Contato'

    var title       = document.createElement('h2')
    title.innerHTML = 'Contato'

    var subs       = document.createElement('p')
    subs.innerHTML = 'Tem algo a nos dizer? Entre em contato'

    var section_title = document.createElement('div')
    section_title.classList.add('section-title')
    section_title.appendChild(title_span)
    section_title.appendChild(title)
    section_title.appendChild(subs)

    var icon = document.createElement('i')
    icon.classList.add('bx', 'bx-envelope')

    var info_title       = document.createElement('h3')
    info_title.innerHTML = 'Nosso Email'

    var email_text       = document.createElement('p')
    email_text.innerHTML = email

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

    var api_input   = document.createElement('input')
    api_input.type  = 'hidden'
    api_input.name  = 'access_key'
    api_input.value = '1bf1f41a-ad2c-48bf-b5c0-07a43681a134'

    var name_input         = document.createElement('input')
    name_input.classList.add('form-control')
    name_input.type        = 'text'
    name_input.name        = 'name'
    name_input.id          = 'name'
    name_input.placeholder = 'Nome'
    name_input.setAttribute('required', '')

    var name_group = document.createElement('div')
    name_group.classList.add('col-md-6', 'form-group')
    name_group.appendChild(name_input)

    var email_input         = document.createElement('input')
    email_input.classList.add('form-control')
    email_input.type        = 'email'
    email_input.name        = 'email'
    email_input.id          = 'email'
    email_input.placeholder = 'Email'
    email_input.setAttribute('required', '')

    var email_group = document.createElement('div')
    email_group.classList.add('col-md-6', 'form-group', 'mt-3', 'mt-md-0')
    email_group.appendChild(email_input)

    var form_row = document.createElement('div')
    form_row.classList.add('row')
    form_row.appendChild(api_input)
    form_row.appendChild(name_group)
    form_row.appendChild(email_group)

    var subject_input         = document.createElement('input')
    subject_input.classList.add('form-control')
    subject_input.type        = 'text'
    subject_input.name        = 'subject'
    subject_input.id          = 'subject'
    subject_input.placeholder = 'Assunto'
    subject_input.setAttribute('required', '')

    var subject_group = document.createElement('div')
    subject_group.classList.add('mt-3', 'form-group')
    subject_group.appendChild(subject_input)

    var message_input         = document.createElement('textarea')
    message_input.classList.add('form-control')
    message_input.name        = 'message'
    message_input.rows        = '5'
    message_input.placeholder = 'Mensagem'
    message_input.setAttribute('required', '')

    var message_group = document.createElement('div')
    message_group.classList.add('mt-3', 'form-group')
    message_group.appendChild(message_input)

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
    btn.type      = 'submit'
    btn.innerHTML = 'Enviar'

    var btn_group = document.createElement('div')
    btn_group.classList.add('text-center')
    btn_group.appendChild(btn)

    var form = document.createElement('form')
    form.classList.add('php-email-form', 'mt-4')
    form.action = 'https://api.web3forms.com/submit'
    form.method = 'post'
    form.id     = 'form'
    form.role   = 'form'
    form.appendChild(form_row)
    form.appendChild(subject_group)
    form.appendChild(message_group)
    form.appendChild(handling)
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

export { Contact }