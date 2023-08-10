function Header(menu) {
    var image     = document.createElement('img')
    image.classList.add('img-fluid')
    image.setAttribute('src', 'assets/img/logo.png')
    image.setAttribute('alt', 'logo')

    var logo      = document.createElement('a')
    logo.classList.add('logo')
    logo.setAttribute('href', 'index.html')
    logo.appendChild(image)

    var list    = document.createElement('ul')

    for (var i=0; i<menu.length; i++) {
        var link    = document.createElement('a')
        link.classList.add('nav-link', 'scrollto', 'linkedto')
        if (i == 0) link.classList.add('active')
        var direction = 'http://127.0.0.1:5500/' + menu[i][1]
        link.href      = direction
        link.innerHTML = menu[i][0]
        var item       = document.createElement('li')
        item.appendChild(link)
        list.appendChild(item)
    }

    var navbar    = document.createElement('nav')
    navbar.classList.add('navbar')
    navbar.id = 'navbar'
    navbar.appendChild(list)

    var container = document.createElement('div')
    container.classList.add('container', 'd-flex', 'align-items-center', 'justify-content-between')
    container.appendChild(logo)
    container.appendChild(navbar)

    var header    = document.createElement('header')
    header.classList.add('d-flex', 'align-items-center')
    header.id = 'header'
    header.appendChild(container)

    return header
}

export { Header }