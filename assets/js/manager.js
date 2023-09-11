//* import setup
import { SETUP }      from './setup.js'

//* import fixed components
import { Header}      from './components/header.js'
import { Footer }     from './components/footer.js'

//* import home components
import { Hero}        from './components/hero.js'
import { About }      from './components/about.js'
import { WhyUs }      from './components/whyus.js'
import { Pricing }    from './components/pricing.js'
import { CTA }        from './components/cta.js'
import { Panel }      from './components/panel.js'
import { Contact }    from './components/contact.js'

//* import extra sections components
import { Login }      from './components/login.js'
import { SignIn }     from './components/signin.js'
import { NewMed }     from './components/newmed.js'
import { Forgot }     from './components/forgot.js'
import { Profile }    from './components/profile.js'

//* import utils
import { PreLoader }  from './utils/loading.js'
import { ApiHandler } from './utils/apihandler.js'

// todo: Clients
// todo: Services
// todo: Portfolio
// todo: Team

//* customise especific components
var cta_title       = 'Ja tem uma conta?'
var cta_description = 'Acesse o linke abaixo para entrar na Cloud Pharma com a sua conta e aproveitar tudo que essa platafoma tem a te oferecer.'
var cta_link        = '#'
var cta_btn_text    = 'Entrar'
var planos          = ['Escolha um plano:', 'Basico', 'Economico', 'Premium']
var med             = ['Medicamento:', 'Tilenol', 'Xanax', 'Neoflerin', 'Outro']
var period          = ['Periodo:', 'Diario', 'Semanal', 'Mensal', 'Anual']

var body   = document.getElementById('body')
var main   = document.getElementById('main')

var preloader  = new PreLoader(main)
var apihandler = new ApiHandler()

var hero    = Hero()
var header  = new Header()
var about   = About()
var whyus   = WhyUs()
var pricing = Pricing()
var cta     = CTA(cta_title, cta_description, cta_link, cta_btn_text)
var login   = new Login(Forgot, enter_test)
var signin  = new SignIn(planos)
var profile = new Profile('lucamoreira007@gmail.com', 'Premium')
var contact = Contact()
var newmed  = NewMed(med, period)
var footer  = Footer()

var panel = ''

var username = ''
var password = ''
var u_plan   = ''
var u_meds   = ['Nenhuma sugestao disponivel.']

main.setAttribute('style', 'min-height: 600px;')

class Home {
    constructor(){
        this.main = document.getElementById('main')
    }

    build() {
        this.main.appendChild(hero)
        this.main.appendChild(about)
        this.main.appendChild(whyus)
        this.main.appendChild(pricing)
        this.main.appendChild(cta)
        this.main.appendChild(contact)
    }

    remove() {
        document.getElementById('hero').remove()
        document.getElementById('about').remove()
        document.getElementById('why-us').remove()
        document.getElementById('pricing').remove()
        document.getElementById('cta').remove()
        document.getElementById('contact').remove()
    }
}

function build_home() {
    body.appendChild(header.build())
    //body.insertBefore(hero, body.firstChild)
    main.appendChild(hero)
    main.appendChild(about)
    main.appendChild(pricing)
    main.appendChild(cta)
    main.appendChild(whyus)
    main.appendChild(contact)
    body.appendChild(footer)
}

function remove_home() {
    document.getElementById('hero').remove()
    document.getElementById('about').remove()
    document.getElementById('why-us').remove()
    document.getElementById('pricing').remove()
    document.getElementById('cta').remove()
    document.getElementById('contact').remove()
}

function build_login() {
    main.appendChild(login)
}

function enter_test(event) {
    if (event.key === "Enter") {
        document.removeEventListener('keypress', enter_test)
        preloader.build()
        login_handler()
    }
}

function enter_med(event) {
    if (event.key === "Enter") {
        document.removeEventListener('keypress', enter_med)
        register_medcine_handler(event)
    }
}

function register_medcine_handler(event) {
    preloader.build()
    var plan        = document.getElementById('plan').value
    if (plan == 'Outro') {
        plan = document.getElementById('outro').value
    }
    if (plan != 'Medicamento:') {
        var quantidade  = document.getElementById('quantidade').value
        if (quantidade != '' && parseInt(quantidade) != 0) {
            var period      = document.getElementById('period').value
            if (period != 'Periodo:') {
                var consumo     = document.getElementById('consumo').value
                if (consumo != '' && parseInt(consumo) != 0) {
                    var recebimento = document.getElementById('recebimento').value
                    if (recebimento != '') {
                        var vencimento  = document.getElementById('vencimento').value
                        if (vencimento != '') {
                            var cad_api     = 'https://script.google.com/macros/s/AKfycbyuL0dsTbEd08dRVhwMhWNBtu4w3sUyyt6OZmMjQQDiTEMJ2FOmtcSCU3I8tnCCMHf5RA/exec?email=' + username + '&id=' + password + '&plan=' + plan + '&quant=' + quantidade + '&period=' + period + '&consumo=' + consumo + '&rec=' + recebimento + '&venc=' + vencimento
                            apihandler.getUrl(cad_api).then((response) => {
                                if (response['response'] === 'true') {
                                    preloader.remove()
                                    alert('Medicamento registrado! Dentro de 24h estara disponivel no seu estoque virtual.')
                                    document.getElementById('plan').value        = 'Medicamento:'
                                    document.getElementById('outro').value       = ''
                                    document.getElementById('quantidade').value  = ''
                                    document.getElementById('period').value      = 'Periodo:'
                                    document.getElementById('consumo').value     = ''
                                    document.getElementById('recebimento').value = ''
                                    document.getElementById('vencimento').value  = ''
                                } else {
                                    preloader.remove()
                                    alert('Algo deu errado. Por favor aguarde alguns instantes e tente novamente. Se o problema persistir contate o nosso email.')
                                }
                            })
                        } else {
                            preloader.remove()
                            alert('Por favor insira uma data de vencimento validada.')
                        }
                    } else {
                        preloader.remove()
                        alert('Por favor insira uma data de recbimento validada.')
                    }
                } else {
                    preloader.remove()
                    alert('Por favor insira um consumo valido.')
                }
            } else {
                preloader.remove()
                alert('Por favor escolha um periodo de consumo.')
            }
        } else {
            preloader.remove()
            alert('Por favor escolha uma quantidade valida.')
        }
    } else {
        preloader.remove()
        alert('Por favor escolha um medicamento.')
    }
}

function register_page_handler(event) {
    var register_nav = document.getElementById('adicionar-link')
    register_nav.removeEventListener('click', register_page_handler)

    var profile_nav  = document.getElementById('perfil-link')
    profile_nav.addEventListener('click', profile_page_handler)

    var panel_nav    = document.getElementById('estoque-link')
    panel_nav.addEventListener('click', panel_page_handler)

    header.manage_activation(1)
    panel.remove()
    profile.remove()
    newmed = NewMed(u_meds, period)
    main.appendChild(newmed)

    var register_btn = document.getElementById('register-btn')
    var plan         = document.getElementById('plan')
    
    document.addEventListener('keypress', enter_med)
    register_btn.addEventListener('click', register_medcine_handler)
    plan.addEventListener('change', other_med_handler)
}

function profile_page_handler() {
    var profile_nav  = document.getElementById('perfil-link')
    profile_nav.removeEventListener('click', profile_page_handler)

    var register_nav = document.getElementById('adicionar-link')
    register_nav.addEventListener('click', register_page_handler)

    var panel_nav    = document.getElementById('estoque-link')
    panel_nav.addEventListener('click', panel_page_handler)

    header.manage_activation(2)

    panel.remove()
    newmed.remove()

    profile = new Profile(username, password, u_plan)
    main.appendChild(profile)
}

function panel_page_handler(event) {
    preloader.build()
    document.removeEventListener('keypress', enter_test)
    profile.remove()
    newmed.remove()
    login.remove()
    const content_api   = "https://script.google.com/macros/s/AKfycbxr73wZXIiCO6GRO8bInKam6H9uJyr4Ixl5EN6zFH5lulwZM6BIm7YvbGZPhatAWwxV/exec?email=" + username
    apihandler.getUrl(content_api).then((content) => {
        u_meds = []
        for (const [key, values] of Object.entries(content)) {
            u_meds.push(content[key]['nome'])
        }
        u_meds.unshift('Novo Medicamento')
        u_meds.unshift('Medicamento:')
        panel = Panel(content, username, password)
        main.appendChild(panel)
        header.update([['Estoque', 'estoque'], ['Adicionar', 'adicionar'], ['Perfil', 'perfil'], ['Sair', 'logout']])
        header.manage_activation(0)
        preloader.remove()

        var register_btn = document.getElementById('panel-btn')
        register_btn.addEventListener('click', register_page_handler)
        var register_nav = document.getElementById('adicionar-link')
        register_nav.addEventListener('click', register_page_handler)
        var profile_nav   = document.getElementById('perfil-link')
        profile_nav.addEventListener('click', profile_page_handler)
        var logout_nav   = document.getElementById('logout-link')
        logout_nav.addEventListener('click', logout)
    })
}

function logout() {
    if (confirm("Voce quer mesmo sair da sua conta?")) {
        username =  ''
        password = ''
        window.location = SETUP.ROOT
    }
}

function other_med_handler(event) {
    if (plan.value == 'Novo Medicamento') {
        plan.remove()
        document.getElementById('arrow').remove()
        var outro = document.createElement('input')
        outro.id = 'outro'
        outro.type = 'text'
        outro.placeholder = 'Novo medicamento'
        outro.classList.add('form-control')

        var outro_group = document.createElement('div')
        outro_group.classList.add('mt-3', 'form-group')
        outro_group.appendChild(outro)

        var quantidade  = document.getElementById('quantidade-group')
        document.getElementById('form').insertBefore(outro_group, quantidade)
    }
}

function login_handler() {
    username = document.getElementById('username').value
    password = document.getElementById('password').value

    const login_api = 'https://script.google.com/macros/s/AKfycbzqGLxaWmpnBwrFCqH38KQmyp-lG3QgovbiVosd2F1B0PftdLvPVJrD3BTQwzI0JeSK_g/exec?email=' + username + '&id=' + password

    apihandler.getUrl(login_api).then((response) => {
        preloader.remove()
        if (response['response'] === 'True') {
            u_plan = response['plan']
            panel_page_handler()
        } else {
            alert('Usuario ou senha incorretos!')
        }
    })
}

//* code start

build_home()
header.mobile_nav() 

var buy_btns = document.getElementsByClassName('btn-buy')
for (var k=0; k<buy_btns.length; k++) {
    let buy_btn = buy_btns[k]
    buy_btn.addEventListener('click', (e) => {
        remove_home() 
        header.relink()
        main.appendChild(signin.build())
    })
}

document.getElementsByClassName('cta-btn')[0].addEventListener('click', (event) => {
    window.onscroll = function() {}
    header.update([['Início', '#hero'], ['Entrar', '#']])
    header.manage_activation(1)
    event.preventDefault();
    remove_home()
    build_login()
    header.relink()

    var btn  = document.getElementById('login-btn')
    btn.addEventListener('click', (e) => {
        preloader.build()
        login_handler()
    })

    document.addEventListener('keypress', enter_test)

})


window.onscroll = function() {header.dinamize()}

//* code end
