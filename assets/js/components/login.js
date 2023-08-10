function Login(email) {
    var title_span       = document.createElement('span')
    title_span.innerHTML = 'Login'

    var title       = document.createElement('h2')
    title.innerHTML = 'Login'

    var subs       = document.createElement('p')
    subs.innerHTML = 'Faça login com seu usuario e senha para entrar na Cloud Pharma e aproveitar tudo que essa platafoma tem a te oferecer.'

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

    var subject_input         = document.createElement('input')
    subject_input.classList.add('form-control')
    subject_input.type        = 'password'
    subject_input.name        = 'subject'
    subject_input.id          = 'password'
    subject_input.placeholder = 'Senha'
    subject_input.setAttribute('required', '')

    var subject_group = document.createElement('div')
    subject_group.classList.add('mt-3', 'form-group')
    subject_group.appendChild(subject_input)

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
    btn.id        = 'login-btn'
    //btn.type      = 'submit'
    btn.type      = 'button'
    btn.innerHTML = 'Entrar'

    var btn_group = document.createElement('div')
    btn_group.classList.add('text-center')
    btn_group.appendChild(btn)

    var form = document.createElement('form')
    form.classList.add('php-email-form', 'mt-4', 'login-form')
    form.action = ''
    form.method = 'post'
    form.id     = 'form'
    form.role   = 'form'
    form.appendChild(username_group)
    form.appendChild(subject_group)
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

export { Login }