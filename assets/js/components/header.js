import { SETUP } from "../setup.js"
import { CONFIGS } from "../config.js"

class Header {
    build() {
        var image     = document.createElement('img')
        image.classList.add('img-fluid')
        image.setAttribute('src', 'assets/img/logos/logo.png')
        image.setAttribute('alt', 'logo')

        var logo      = document.createElement('a')
        logo.classList.add('logo')
        logo.setAttribute('href', 'index.html')
        logo.appendChild(image)

        var list = this.make_nav_list(CONFIGS.MENU)

        var icon = document.createElement('i')
        icon.classList.add('bi', 'mobile-nav-toggle', 'bi-list')
        icon.setAttribute('style', 'color: black;')
        icon.id  = 'icon'

        var navbar = document.createElement('nav')
        navbar.classList.add('navbar')
        navbar.id  = 'navbar'
        navbar.appendChild(list)
        navbar.appendChild(icon)

        this.navbar = navbar

        var container = document.createElement('div')
        container.classList.add('container', 'd-flex', 'align-items-center', 'justify-content-between')
        container.appendChild(logo)
        container.appendChild(navbar)

        var header = document.createElement('header')
        header.classList.add('d-flex', 'align-items-center', 'fixed-top')
        header.id  = 'header'
        header.appendChild(container)

        return header
    }

    mobile_nav() {
        var nav       = document.getElementById('navbar')
        var trigger   = document.getElementById('icon')
        var nav_links = document.getElementsByClassName('nav-link')
        trigger.addEventListener('click', (event) => {
            for (let i=0; i<nav_links.length; i++) {
                nav_links[i].setAttribute('style', 'font-size: 24px;')
            }
            nav.classList.add('navbar-mobile')
            trigger.classList.remove('bi-list')
            trigger.classList.add('bi-x')
            trigger.removeAttribute('style')
            trigger.setAttribute('style', 'color: white;')
            for (let i=0; i<nav_links.length; i++) {
                nav_links[i].addEventListener('click', (e) => {
                    for (let j=0; j<nav_links.length; j++) {
                        nav_links[j].setAttribute('style', 'font-size: 14px;')
                    }
                    nav.classList.remove('navbar-mobile')
                    trigger.classList.remove('bi-x')
                    trigger.classList.add('bi-list')
                    trigger.setAttribute('style', 'color: black;')
                    this.mobile_nav()
                })
            }
            trigger.addEventListener('click', (event) => {
                for (let i=0; i<nav_links.length; i++) {
                    nav_links[i].setAttribute('style', 'font-size: 14px;')
                }
                nav.classList.remove('navbar-mobile')
                trigger.classList.remove('bi-x')
                trigger.classList.add('bi-list')
                trigger.setAttribute('style', 'color: black;')
                this.mobile_nav()
            })
        })
    }

    dinamize() {
        if (document.body.scrollTop < 500 || document.documentElement.scrollTop < 500) {
            this.manage_activation(0)
        }
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
            this.manage_activation(1)
        }
        if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
            this.manage_activation(2)
        }
        if (document.body.scrollTop > 1600 || document.documentElement.scrollTop > 1600) {
            this.manage_activation(3)
        }
        if (document.body.scrollTop > 2000 || document.documentElement.scrollTop > 2000) {
            this.manage_activation(4)
        }
        if (document.body.scrollTop > 2400 || document.documentElement.scrollTop > 2400) {
            this.manage_activation(5)
        }
    }

    manage_activation(index) {
        var links = document.getElementsByClassName('linkedto')
        for (var j=0; j<links.length; j++) {
            if (j == index) {
                links[j].classList.add('active')
            } else {
                links[j].classList.remove('active')
            }
        }
    }

    relink() {
        var   links = document.getElementsByClassName('linkedto')
    
        for (var i=0; i<links.length; i++) {
            let link = links[i]
            link.addEventListener('click', (e) => {
                let name = link.innerHTML
                console.log(name)
                switch (name) {
                    case 'Início':
                        location.href = SETUP.ROOT
                        location.reload()
                        break
                    case 'Sobre':
                        location.href = SETUP.ROOT + '#about'
                        location.reload()
                        document.getElementById('#about').focus()
                        break
                    case 'Preço':
                        location.href = SETUP.ROOT + '#pricing'
                        location.reload()
                        document.getElementById('#pricing').focus()
                        break
                    case 'Entrar':
                        location.href = SETUP.ROOT + '#cta'
                        location.reload()
                        document.getElementById('#cta').focus()
                        break
                    case 'Contato':
                        location.href = SETUP.ROOT + '#contact'
                        location.reload()
                        document.getElementById('#contact').focus()
                        break
                    default:
                        console.log('404 NOT FOUND')
                    }
            })
        }
    }

    make_nav_list(menu) {
        var list           = document.createElement('ul')
        for (let i=0; i<menu.length; i++) {
            var link       = document.createElement('a')
            link.classList.add('nav-link', 'scrollto', 'linkedto')
            if (i == 0) link.classList.add('active')
            var direction  = SETUP.ROOT + '#' + menu[i][1]
            link.href      = direction
            link.innerHTML = menu[i][0]
            var item       = document.createElement('li')
            item.id = menu[i][1] + '-link'
            item.appendChild(link)
            list.appendChild(item)
        }
        this.list = list
        return list
    }

    update(menu) {
        this.list.remove()
        var list = this.make_nav_list(menu)
        this.navbar.appendChild(list)
    }
}

export { Header }