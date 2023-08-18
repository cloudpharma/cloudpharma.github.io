function NewMed(email, medicamentos, periodos) {
    var title_span       = document.createElement('span')
    title_span.innerHTML = 'Registrar'

    var title       = document.createElement('h2')
    title.innerHTML = 'Registrar'

    var subs       = document.createElement('p')
    subs.innerHTML = 'Registre novo recebimento de medicamento.'

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

    var f_title = document.createElement('h2')
    f_title.innerHTML = 'Novo Registro'
    f_title.setAttribute('style', 'text-align: center;')

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

    var password_input         = document.createElement('input')
    password_input.classList.add('form-control')
    password_input.type        = 'password'
    password_input.name        = 'password'
    password_input.id          = 'password'
    password_input.placeholder = 'Senha'
    password_input.setAttribute('required', '')

    var password_group = document.createElement('div')
    password_group.classList.add('mt-3', 'form-group')
    password_group.appendChild(password_input)

    var subject_group = document.createElement('div')
    subject_group.classList.add('mt-3', 'form-group')

    var subject_input         = document.createElement('select')
    subject_input.id          = 'plan'
    subject_input.classList.add('form-control')
    subject_input.setAttribute('required', '')
    subject_input.setAttribute('style', 'color: #666666; font-size: 15px; border-radius: 0px; height: 42px;')

    var arrow_icon = document.createElement('i')
    arrow_icon.classList.add('bi', 'bi-caret-down-fill')
    arrow_icon.setAttribute('style', 'color: #666666; position: relative; float: right; top: -32px; right: 20px;')

    subject_group.appendChild(subject_input)
    subject_group.appendChild(arrow_icon)

    for (var i=0; i<medicamentos.length; i++) {
        var basic_span       = document.createElement('option')
        basic_span.innerHTML = medicamentos[i]
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

    var amount_input         = document.createElement('input')
    amount_input.classList.add('form-control')
    amount_input.type        = 'number'
    amount_input.name        = 'quantidade'
    amount_input.id          = 'quantidade'
    amount_input.placeholder = 'Quantidade'
    amount_input.setAttribute('required', '')

    var amount_group = document.createElement('div')
    amount_group.classList.add('mt-3', 'form-group')
    amount_group.appendChild(amount_input)
    //amount_group.setAttribute('style', 'margin-top: 0px!important;')

    var period_group = document.createElement('div')
    period_group.classList.add('mt-3', 'form-group')

    var period_input         = document.createElement('select')
    period_input.id          = 'period'
    period_input.classList.add('form-control')
    period_input.setAttribute('required', '')
    period_input.setAttribute('style', 'color: #666666; font-size: 15px; border-radius: 0px; height: 42px;')

    var arrow_icon = document.createElement('i')
    arrow_icon.classList.add('bi', 'bi-caret-down-fill')
    arrow_icon.setAttribute('style', 'color: #666666; position: relative; float: right; top: -32px; right: 20px;')

    period_group.appendChild(period_input)
    period_group.appendChild(arrow_icon)

    for (var i=0; i<periodos.length; i++) {
        var period_span       = document.createElement('option')
        period_span.innerHTML = periodos[i]
        period_span.setAttribute('style', 'font-size: 15px;')
        if (i==0) {
            period_span.setAttribute('disabled', '')
            period_span.setAttribute('selected', '')
        } else {
            period_span.setAttribute('style', 'color: black;')
            period_span.addEventListener('click', (e) => {
                period_input.setAttribute('style', 'color: black;')
                arrow_icon.remove()
            })
        }
        period_input.appendChild(period_span)
    }

    var consumo_input         = document.createElement('input')
    consumo_input.classList.add('form-control')
    consumo_input.type        = 'number'
    consumo_input.name        = 'consumo'
    consumo_input.id          = 'consumo'
    consumo_input.placeholder = 'Consumo por periodo'
    consumo_input.setAttribute('required', '')

    var consumo_group = document.createElement('div')
    consumo_group.classList.add('mt-3', 'form-group')
    consumo_group.appendChild(consumo_input)

    var recebimento_label       = document.createElement('label')
    recebimento_label.innerHTML = 'Data de recebimento'
    recebimento_label.setAttribute('style', 'color: #78ee66;')

    var recebimento_input         = document.createElement('input')
    recebimento_input.classList.add('form-control')
    recebimento_input.type        = 'date'
    recebimento_input.name        = 'recebimento'
    recebimento_input.id          = 'recebimento'
    recebimento_input.setAttribute('required', '')

    var recebimento_group = document.createElement('div')
    recebimento_group.classList.add('mt-3', 'form-group')
    recebimento_group.appendChild(recebimento_label)
    recebimento_group.appendChild(recebimento_input)

    var vencimento_label       = document.createElement('label')
    vencimento_label.innerHTML = 'Data de vencimento'
    vencimento_label.setAttribute('style', 'color: #78ee66;')

    var vencimento_input         = document.createElement('input')
    vencimento_input.classList.add('form-control')
    vencimento_input.type        = 'date'
    vencimento_input.name        = 'vencimento'
    vencimento_input.id          = 'vencimento'
    vencimento_input.setAttribute('required', '')

    var vencimento_group = document.createElement('div')
    vencimento_group.classList.add('mt-3', 'form-group')
    vencimento_group.appendChild(vencimento_label)
    vencimento_group.appendChild(vencimento_input)


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
    btn.id        = 'register-btn'
    btn.type      = 'button'
    btn.innerHTML = 'Registrar'

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
    form.appendChild(f_title)
    form.appendChild(username_group)
    form.appendChild(password_group)
    form.appendChild(subject_group)
    form.appendChild(amount_group)
    form.appendChild(period_group)
    form.appendChild(consumo_group)
    form.appendChild(recebimento_group)
    form.appendChild(vencimento_group)
    form.appendChild(handling)
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

export { NewMed }