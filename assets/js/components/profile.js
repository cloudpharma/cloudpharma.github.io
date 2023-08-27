import { CONFIGS } from "../config.js"
import { SETUP } from "../setup.js"
import { ApiHandler } from "../utils/apihandler.js"
import { PreLoader } from "../utils/loading.js"

var body   = document.getElementById('body')

class Profile {
    constructor(user, password, plan) {
        this.user       = user
        this.password   = password
        this.plan       = plan
        this.apihandler = new ApiHandler()
        this.preloader  = new PreLoader(body)
        return this.build()
    }

    build() {
        var title_span       = document.createElement('span')
        title_span.innerHTML = 'Perfil'

        var title       = document.createElement('h2')
        title.innerHTML = 'Perfil'

        var section_title = document.createElement('div')
        section_title.classList.add('section-title')
        section_title.appendChild(title_span)
        section_title.appendChild(title)

        var icon = document.createElement('i')
        icon.classList.add('bx', 'bx-envelope')

        var info_title       = document.createElement('h3')
        info_title.innerHTML = this.user

        this.title = info_title

        var email_text       = document.createElement('p')
        email_text.innerHTML = 'Plano: ' + this.plan

        var btn       = document.createElement('button')
        btn.id        = 'login-btn'
        btn.type      = 'button'
        btn.innerHTML = 'Deletar Conta'
        btn.setAttribute('style', 'margin-top: 10px; margin-right: 10px;')

        var btn_group = document.createElement('div')
        btn_group.classList.add('text-center')
        btn_group.appendChild(btn)

        var email_btn       = document.createElement('button')
        email_btn.id        = 'login-btn'
        email_btn.type      = 'button'
        email_btn.innerHTML = 'Atualizar Email'
        email_btn.setAttribute('style', 'margin-top: 10px; margin-left: 10px;')
        btn_group.appendChild(email_btn)

        this.btn_group = btn_group

        var info_box = document.createElement('div')
        info_box.classList.add('info-box', 'mb-4')
        info_box.appendChild(icon)
        info_box.appendChild(info_title)
        info_box.appendChild(email_text)
        info_box.appendChild(btn_group)
        //info_box.appendChild(email_btn_group)

        this.info_box = info_box

        var first_row_col = document.createElement('div')
        first_row_col.classList.add('col-lg-12', 'col-md-6')
        first_row_col.appendChild(info_box)

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

        this.section   = section
        this.btn       = btn
        this.email_btn = email_btn

        this.delete_listener()
        this.update_listener()

        return section
    }

    remove() {
        this.section.remove()
    }

    delete_listener() {
        this.btn.addEventListener('click', (event) => {
            console.log(this.user + ' ' + this.password)
            if (confirm("Voce quer mesmo deletar sua conta? Nao tem como reverter essa acao.")) {
                var delete_api = 'https://script.google.com/macros/s/AKfycbwh9UU_8J3sGGZFuDewPkukUJgmjgLrnUG5rCq8eMd1nQAKcuehZd1xvAivpd1mVrADzQ/exec?email=' + this.user + '&id=' + this.password
                this.apihandler.getUrl(delete_api).then((response) => {
                    // ? How to empty user and password vars ?
                    window.location = SETUP.ROOT
                })
            }
        })
    }

    update_listener() {
        this.email_btn.addEventListener('click', (event) => {
            var email_input = document.createElement('input')
            email_input.classList.add('form-control')
            email_input.placeholder = 'Novo Email'

            var email_group = document.createElement('div')
            email_group.classList.add('mt-3', 'form-group')
            email_group.setAttribute('style', 'max-width: 350px; margin-left: auto; margin-right: auto;')

            var email_btn       = document.createElement('button')
            email_btn.innerHTML = 'Mudar Email'
            email_btn.id        = 'login-btn'
            email_btn.type      = 'button'
            email_btn.setAttribute('style', 'margin-top: 15px;')

            email_group.appendChild(email_input)
            email_group.appendChild(email_btn)

            this.email_group = email_group
            this.info_box.appendChild(email_group)

            email_btn.addEventListener('click', (event) => {
                this.preloader.build()
                var updated_user = email_input.value
                if (updated_user != '') {
                    var email_api = 'https://script.google.com/macros/s/AKfycbxhQlER92Kln4PqFJPs4TJmOvFP6b_YgmwyWLCmbFBz7HuzcMKktoT5t4LRd44aygYu/exec?email=' + this.user 
                    this.apihandler.getUrl(email_api).then((response) => {
                        if (response['response'] === 'True') {
                            this.preloader.remove()
                            alert('O email ja esta associado a uma conta!')
                        } else {
                            var update_api = 'https://script.google.com/macros/s/AKfycby4O9CBa0iP647OBf-t15h3Mrr2CXWt8s0AzxkIl2m4YUv4sa4kKh0nd7WHGc5KtxQj/exec?old=' + this.user + '&id=' + this.password + '&updated=' + updated_user
                            this.apihandler.getUrl(update_api).then((response) => {
                                this.preloader.remove()
                                alert('Email atualizado!')
                                this.email_group.remove()
                                this.title.innerHTML = updated_user
                            })
                        }
                    })
                } else {
                    this.preloader.remove()
                    alert('Escolha um email valido.')
                }
            })
            document.addEventListener('keypress', (event) => {
                if (event.key === "Enter") {
                    var updated_user = email_input.value
                    if (updated_user != '') {
                        var email_api = 'https://script.google.com/macros/s/AKfycbxhQlER92Kln4PqFJPs4TJmOvFP6b_YgmwyWLCmbFBz7HuzcMKktoT5t4LRd44aygYu/exec?email=' + this.user 
                        this.apihandler.getUrl(email_api).then((response) => {
                            if (response['response'] === 'True') {
                                alert('O email ja esta associado a uma conta!')
                            } else {
                                var update_api = 'https://script.google.com/macros/s/AKfycby4O9CBa0iP647OBf-t15h3Mrr2CXWt8s0AzxkIl2m4YUv4sa4kKh0nd7WHGc5KtxQj/exec?old=' + this.user + '&id=' + this.password + '&updated=' + updated_user
                                this.apihandler.getUrl(update_api).then((response) => {
                                    alert('Email atualizado!')
                                    this.email_group.remove()
                                    this.title.innerHTML = updated_user
                                })
                            }
                        })
                    } else {
                        alert('Escolha um email valido.')
                    }
                }
            })
        })
    }

    update_email() {
        var updated_user = this.email_input.value
        if (updated_user != '') {
            var update_api = 'https://script.google.com/macros/s/AKfycby4O9CBa0iP647OBf-t15h3Mrr2CXWt8s0AzxkIl2m4YUv4sa4kKh0nd7WHGc5KtxQj/exec?old=' + this.user + '&id=' + this.password + '&updated=' + updated_user
            this.apihandler.getUrl(update_api).then((response) => {
                alert('Email atualizado!')
                this.email_group.remove()
                this.title.innerHTML = updated_user
            })
        } else {
            alert('Escolha um email valido.')
        }
    }

    keypress_eval(event) {
        if (event.key === "Enter") {
            this.update_email()
        }
    }
}

export { Profile }