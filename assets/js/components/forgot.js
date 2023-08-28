import { CONFIGS } from "../config.js"
import { PreLoader } from "../utils/loading.js"
import { ApiHandler } from "../utils/apihandler.js"
import { SETUP } from "../setup.js"

var body   = document.getElementById('body')

class Forgot {
    constructor() {
        this.preloader  = new PreLoader(body)
        this.apihandler = new ApiHandler()
    }

    build() {
        var title_span       = document.createElement('span')
        title_span.innerHTML = 'Recuperar Senha'

        var title       = document.createElement('h2')
        title.innerHTML = 'Recuperar Senha'

        var subs       = document.createElement('p')
        subs.innerHTML = 'Insira o email vinculado com a sua conta para q sua senha seja novamente enviado pra ele.'

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

        this.username_input = username_input

        var username_group = document.createElement('div')
        username_group.classList.add('mt-3', 'form-group')
        username_group.setAttribute('style', 'margin-bottom: 18px;')
        username_group.appendChild(username_input)

        var btn       = document.createElement('button')
        btn.id        = 'login-btn'
        btn.type      = 'button'
        btn.innerHTML = 'Enviar'

        this.btn = btn

        var btn_group = document.createElement('div')
        btn_group.classList.add('text-center')
        btn_group.appendChild(btn)

        var form = document.createElement('form')
        form.classList.add('php-email-form', 'mt-4', 'login-form')
        form.action = ''
        form.id     = 'form'
        form.role   = 'form'
        form.appendChild(username_group)
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

        this.send_signal()

        return section
    }

    send_signal() {
        this.btn.addEventListener('click', (event) => {
            this.preloader.build()
            if (this.username_input.value != '') {
                const forgot_api = 'https://script.google.com/macros/s/AKfycbyVsh3t3fKNN3oY9HUYX4vcQsVnaooZxVriTd-epCzcYaupXJsBCS1S02h1jftyd8Fn/exec?email=' + this.username_input.value
                this.apihandler.getUrl(forgot_api).then((response) => {
                    this.preloader.remove()
                    alert('Sua senha foi enviada ao email informado.')
                    location.href = SETUP.ROOT
                    location.reload()
                })
            } else {
                this.preloader.remove()
                alert('Insira um email.')
            }
        })

        document.addEventListener('keypress', (event) => {
            if (event.key === "Enter") {
                this.preloader.build()
                if (this.username_input.value != '') {
                    const forgot_api = 'https://script.google.com/macros/s/AKfycbyVsh3t3fKNN3oY9HUYX4vcQsVnaooZxVriTd-epCzcYaupXJsBCS1S02h1jftyd8Fn/exec?email=' + this.username_input.value
                    this.apihandler.getUrl(forgot_api).then((response) => {
                        this.preloader.remove()
                        alert('Sua senha foi enviada ao email informado.')
                        location.href = SETUP.ROOT
                        location.reload()
                    })
                } else {
                    this.preloader.remove()
                    alert('Insira um email.')
                }
            }
        })
    }
}

export { Forgot }