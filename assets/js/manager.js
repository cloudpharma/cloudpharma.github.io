import {Header} from './components/header.js'
import {Hero}   from './components/hero.js'
import { About } from './components/about.js'
import { WhyUs } from './components/whyus.js'
import { Pricing } from './components/pricing.js'
import { CTA } from './components/cta.js'
import { Panel } from './components/panel.js'
import { Contact } from './components/contact.js'
import { Footer } from './components/footer.js'

import { Login } from './components/login.js'
import { Signin } from './components/signin.js'
import { ContentAPIHandler } from './utils/content_api.js'
import { NewMed } from './components/newmed.js'

var menu        = [['Início', '#hero'], ['Sobre', '#about'], ['Preço', '#pricing'], ['Entrar', '#cta'], ['Contato', '#contact']]
var name        = 'Cloud Pharma'
var email       = 'cloudpharmacontato@gmail.com'
var slogan      = 'Uma plataforma que visa ajudar as pessoas a planejar e organizar seu estoque de farmacos.'
var short_about = 'Apaixonados por tecnologia lutando por um mundo melhor'
var long_about  = 'A ideia da plataforma e criar um assistente para auxiliar os usuários a planejar e organizar o seu estoque de fármacos. Podendo contabilizar a quantidade atual de cada fármaco, construir uma linha do tempo do seu estoque, prever a próxima data ideal de compra e marcar eventos como datas de compra e vencimentos de fármacos no google agenda do email fornecido pelo usuário. Fácil e prática de usar, a plataforma foi pensada para conseguir atingir os mais diversos públicos.'
var social      = [['twitter', '#'], ['facebook', '#'], ['instagram', '#'], ['linkedin', '#']]

var reasons = [['Missão', 'Ajudar as pessoas por meio da tecnologia', 'Queremos fazer o uso das novas tecnologias para ajudar as pessoas a planejar e organizar seu estoque de farmacos.'],['Visão', 'Ter impactado a vida de milhões de pessoas', 'Almejamos mudar a vida de milhões de pessoas para melhor com a nossa plataforma.'],['Valores', 'Modernidade e Humanidade', '- Inovação\n- Inclusão\n- Respeito\n- Paixão por tecnologia']]
var plans   = [['Basico', '10', ['Acompanhamento de Estoque', 'Histórico do Estoque'], ['Previsão da data de compra', 'Lembrete automático de compra no google agenda', 'Lembrete automático de vencimento no google agenda'], 'https://forms.gle/w4xcFkUDSrpYda5P6'], ['Econômico', '20', ['Acompanhamento de Estoque', 'Histórico do Estoque', 'Previsão da data de compra'], ['Lembrete automático de compra no google agenda', 'Lembrete automático de vencimento no google agenda'], 'https://forms.gle/w4xcFkUDSrpYda5P6'], ['Premium', '30', ['Acompanhamento de Estoque', 'Histórico do Estoque','Previsão da data de compra', 'Lembrete automático de compra no google agenda', 'Lembrete automático de vencimento no google agenda'], [], 'https://forms.gle/w4xcFkUDSrpYda5P6']]

var items = [['Tilenol', '10', '25/08/2023', '25/07/2023'], ['Alegra', '20', '25/08/2023', '25/07/2023'], ['Vonal', '30', '25/08/2023', '25/07/2023']]

var cta_title       = 'Ja tem uma conta?'
var cta_description = 'Acesse o linke abaixo para entrar na Cloud Pharma com a sua conta e aproveitar tudo que essa platafoma tem a te oferecer.'
var cta_link        = '#'
var cta_btn_text    = 'Entrar'

var planos = ['Escolha um plano:', 'Basico', 'Economico', 'Premium']
var med    = ['Medicamento:', 'Tilenol', 'Xanax', 'Neoflerin']
var period = ['Periodo:', 'Diario', 'Semanal', 'Semestral', 'Anual']

var body   = document.getElementById('body')
var main   = document.getElementById('main')

var hero    = Hero(name, slogan)
var header  = Header(menu)
var about   = About(short_about, long_about)
var whyus   = WhyUs(reasons)
var pricing = Pricing(plans)
var cta     = CTA(cta_title, cta_description, cta_link, cta_btn_text)
var login   = Login(email)
var signin  = Signin(email, planos)
var contact = Contact(email)
var newmed  = NewMed(email, med, period)
var footer  = Footer(name, email, menu, social)

main.setAttribute('style', 'min-height: 600px;')


function build_home() {
    body.insertBefore(hero, body.firstChild)
    body.insertBefore(header, body.firstChild)
    main.appendChild(about)
    main.appendChild(whyus)
    main.appendChild(pricing)
    main.appendChild(cta)
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

function build_panel(content) {
    var panel = Panel(content)
    main.appendChild(panel)
}

function build_preloader() {
    var preloader = document.createElement('div')
    preloader.id  = 'preloader'
    main.appendChild(preloader)
}

function remove_preloader() {
    let preloader = document.getElementById('preloader')
    preloader.remove()
}

function format_header() {
    const ROOT  = 'https://cloudpharma.github.io/'
    var   links = document.getElementsByClassName('linkedto')

    for (var i=0; i<links.length; i++) {
        let link = links[i]
        link.addEventListener('click', (e) => {
            let name = link.innerHTML
            console.log(name)
            switch (name) {
                case 'Início':
                    location.href = ROOT
                    location.reload()
                    break
                case 'Sobre':
                    location.href = ROOT + '#about'
                    location.reload()
                    document.getElementById('#about').focus()
                    break
                case 'Preço':
                    location.href = ROOT + '#pricing'
                    location.reload()
                    document.getElementById('#pricing').focus()
                    break
                case 'Entrar':
                    location.href = ROOT + '#cta'
                    location.reload()
                    document.getElementById('#cta').focus()
                    break
                case 'Contato':
                    location.href = ROOT + '#contact'
                    location.reload()
                    document.getElementById('#contact').focus()
                    break
                default:
                    console.log('404 NOT FOUND')
                }
        })
    }
}


async function getData(url) {
    const response = await fetch(url);
    const names    = await response.json();
    
    return names   
}


async function getLogin(url) {
    const response = await fetch(url);
    const names    = await response.json();
    
    return names
}


build_home()

// todo: Clients
// todo: Services
// todo: Portfolio
// todo: Team

function enter_test(event) {
    if (event.key === "Enter") login_handler()
}

function login_handler() {
    var  username = document.getElementById('username').value
    var  password = document.getElementById('password').value

    const login_api = 'https://script.google.com/macros/s/AKfycbzqtxWCr2Lps92bBt2agMqJVZ_9kkT31h2C_kE-hFszqKRDpow-UPrDTpv1C8y3b7o4zA/exec?email=' + username + '&id=' + password

    getLogin(login_api).then((response) => {
        if (response['response'] === 'True') {
            document.removeEventListener('keypress', enter_test)
            login.remove()
            const content_api   = "https://script.google.com/macros/s/AKfycbzuylcT9YIo1JUAQTk7Z_uQCUWE0d0cxYD4cauFOHOX_EAlS7YFCycSdkHULp_5YcWY/exec?email=" + username
            getData(content_api).then((content) => {
                var panel = Panel(content)
                main.appendChild(panel)
                remove_preloader()
                var panel_btn = document.getElementById('panel-btn')
                panel_btn.addEventListener('click', (e) => {
                    panel.remove()
                    main.appendChild(newmed)
                    var register_btn = document.getElementById('register-btn')
                    register_btn.addEventListener('click', (e) => {
                        build_preloader()
                        var  username = document.getElementById('username').value
                        var  password = document.getElementById('password').value
                        const login_api = 'https://script.google.com/macros/s/AKfycbzqtxWCr2Lps92bBt2agMqJVZ_9kkT31h2C_kE-hFszqKRDpow-UPrDTpv1C8y3b7o4zA/exec?email=' + username + '&id=' + password
                        getLogin(login_api).then((response) => {
                            if (response['response'] === 'True') {
                                var plan        = document.getElementById('plan').value
                                var quantidade  = document.getElementById('quantidade').value
                                var period      = document.getElementById('period').value
                                var consumo     = document.getElementById('quantidade').value
                                var recebimento = document.getElementById('recebimento').value
                                var vencimento  = document.getElementById('quantidade').value
                                var cad_api     = 'https://script.google.com/macros/s/AKfycbwfuRr-EMICltQdAMm6ZTfB3hYw5eu91J7AkdC-WIRI_YOnhFykdvl_wXyePwn5kElrPA/exec?email=' + username + '&id=' + password + '&plan=' + plan + '&quant=' + quantidade + '&period=' + period + '&consumo=' + consumo + '&rec=' + recebimento + '&venc=' + vencimento
                                getData(cad_api).then((response) => {
                                    if (response['response'] === 'true') {
                                        remove_preloader()
                                        alert('Medicamento registrado! Dentro de 24h estara disponivel no seu estoque virtual.')
                                    } else {
                                        remove_preloader()
                                        alert('Algo deu errado. Por favor aguarde alguns instantes e tente novamente. Se o problema persistir contate o nosso email.')
                                    }
                                })
                            } else {
                                remove_preloader()
                                alert('Email ou senha incoretos.')
                            }
                        })
                    })
                })
            })
        } else {
            remove_preloader()
            alert('Usuario ou senha incorretos!')
        }
    })
}

var buy_btns = document.getElementsByClassName('btn-buy')
for (var k=0; k<buy_btns.length; k++) {
    let buy_btn = buy_btns[k]
    buy_btn.addEventListener('click', (e) => {
        remove_home()
        format_header()  
        main.appendChild(signin)
        var s_btn = document.getElementById('signin-btn')
        s_btn.addEventListener('click', (e) => {
            build_preloader()
            var  username = document.getElementById('username').value
            var  plan     = document.getElementById('plan').value
            var  terms    = document.getElementById('terms').checked
            if (terms) {
                var email_api = 'https://script.google.com/macros/s/AKfycbxhQlER92Kln4PqFJPs4TJmOvFP6b_YgmwyWLCmbFBz7HuzcMKktoT5t4LRd44aygYu/exec?email=' + username 
                getData(email_api).then((response) => {
                    remove_preloader()
                    if (response['response'] === 'True') {
                        alert('O email ja esta associado a uma conta!')
                    } else {
                        if (plan == 'Escolha um plano:') {
                            alert('Por favor escolha um plano.')
                        } else {
                            var register_api = 'https://script.google.com/macros/s/AKfycbz9PNUdWOXcLR6JGiJiPZ92S_rPECp6q9ksOgxxn7NiX-vVCNpQ6NQxxbAcBHPci4Va/exec?email=' + username + '&plan=' + plan
                            getData(register_api).then((response) => {
                                alert('Dentro de 24h enviaremos um email pra o endereco indicado com as proximas instrucoes.')
                            })
                        }
                    }
                })
            } else {
                alert('Para continuar voce deve aceitar os termos e condicoes.')
            }
        })
    })
}

var nav     = document.getElementById('navbar')
var trigger = document.getElementById('icon')
var nav_links = document.getElementsByClassName('nav-link')

function mobile_nav() {
    trigger.addEventListener('click', (event) => {
        nav.classList.add('navbar-mobile')
        trigger.classList.remove('bi-list')
        trigger.classList.add('bi-x')
        trigger.removeAttribute('style')
        trigger.setAttribute('style', 'color: white;')
        for (let i=0; i<nav_links.length; i++) {
            nav_links[i].addEventListener('click', web_nav)
        }
        trigger.addEventListener('click', (event) => {
            web_nav()
        })
    })
}

function web_nav() {
    nav.classList.remove('navbar-mobile')
    trigger.classList.remove('bi-x')
    trigger.classList.add('bi-list')
    trigger.setAttribute('style', 'color: black;')
    // remove event listener
    mobile_nav()
}

mobile_nav()

document.getElementsByClassName('cta-btn')[0].addEventListener('click', (event) => {
    event.preventDefault();
    remove_home()
    build_login()
    format_header()

    var btn  = document.getElementById('login-btn')
    var form = document.getElementsByClassName('login-form')[0]
    btn.addEventListener('click', (e) => {
        //remove_home()
        build_preloader()
        login_handler()
    })

    document.addEventListener('keypress', enter_test)

})

var h_links = document.getElementsByClassName('linkedto')
window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop < 400 || document.documentElement.scrollTop < 400) {
        h_links[0].classList.add('active')
        h_links[1].classList.remove('active')
        h_links[2].classList.remove('active')
        h_links[3].classList.remove('active')
        h_links[4].classList.remove('active')
    }
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        h_links[1].classList.add('active')
        h_links[0].classList.remove('active')
        h_links[2].classList.remove('active')
        h_links[3].classList.remove('active')
        h_links[4].classList.remove('active')
    }
    if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
        h_links[2].classList.add('active')
        h_links[1].classList.remove('active')
        h_links[0].classList.remove('active')
        h_links[3].classList.remove('active')
        h_links[4].classList.remove('active')
    }
    if (document.body.scrollTop > 2200 || document.documentElement.scrollTop > 2200) {
        h_links[3].classList.add('active')
        h_links[1].classList.remove('active')
        h_links[2].classList.remove('active')
        h_links[0].classList.remove('active')
        h_links[4].classList.remove('active')
    }
    if (document.body.scrollTop > 2500 || document.documentElement.scrollTop > 2500) {
        h_links[4].classList.add('active')
        h_links[1].classList.remove('active')
        h_links[2].classList.remove('active')
        h_links[3].classList.remove('active')
        h_links[0].classList.remove('active')
    }
}