import { CONFIGS } from "../config.js"

var main   = document.getElementById('main')

class Login {
    constructor(Forgot, listener) {
        this.Forgot     = new Forgot()
        this.old_listen = listener
        this.eye_count  = 0
    }

    build() {
        var title_span       = document.createElement('span')
        title_span.innerHTML = 'Entrar'

        var title       = document.createElement('h2')
        title.innerHTML = 'Entrar'

        var subs       = document.createElement('p')
        subs.innerHTML = 'Entre com seu usuario e senha para entrar na Cloud Pharma e aproveitar tudo que essa platafoma tem a te oferecer.'

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

        var subject_input         = document.createElement('input')
        subject_input.classList.add('form-control')
        subject_input.type        = 'password'
        subject_input.name        = 'subject'
        subject_input.id          = 'password'
        subject_input.placeholder = 'Senha'
        subject_input.setAttribute('required', '')

        var eye_icon = document.createElement('i')
        eye_icon.id  = 'eye'
        eye_icon.classList.add('bi', 'bi-eye-slash')
        eye_icon.setAttribute('style', 'color: #666666; position: relative; float: right; top: -32px; right: 20px;')

        eye_icon.addEventListener('click', this.manageEye)


        var subject_group = document.createElement('div')
        subject_group.classList.add('mt-3', 'form-group')
        subject_group.setAttribute('style', 'margin-top: 0px')
        subject_group.appendChild(subject_input)
        subject_group.appendChild(eye_icon)

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

        var forgot = document.createElement('a')
        forgot.id = 'forgot-link'
        forgot.innerHTML = 'Esqueci minha senha'
        forgot.setAttribute('style', 'color: #78ee66; font-size: 14px;')

        var forgot_group = document.createElement('div')
        forgot_group.classList.add('mt-3', 'form-group')
        forgot_group.appendChild(forgot)
        forgot_group.setAttribute('style', 'margin-top: 5px !important;')

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
        form.appendChild(forgot_group)
        form.appendChild(btn_group)
        //form.appendChild(handling)

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

        this.section = section

        forgot.addEventListener('click', (e) => {
            document.removeEventListener('keypress', this.old_listen)
            this.remove()
            main.appendChild(this.Forgot.build())
        })

        return section
    }

    remove() {
        this.section.remove()
    }

    manageEye() {
        if (this.eye_count == 0 || this.eye_count == undefined) {
            const eye = document.getElementById('eye')
            eye.classList.remove('bi-eye-slash')
            eye.classList.add('bi-eye')
            eye.removeEventListener('click', this.showEye)
            eye.addEventListener('click', this.hideEye)
            document.getElementById('password').type = 'text'
            this.eye_count = 1
        } else {
            this.eye = document.getElementById('eye')
            this.eye.classList.add('bi-eye-slash')
            this.eye.classList.remove('bi-eye')
            document.getElementById('password').type = 'password'
            this.eye_count = 0
        }
    }
}


export { Login }