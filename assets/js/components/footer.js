function Footer(name, email, menu, social) {
    var list = document.createElement('ul')

    for (var i=0; i<menu.length; i++) {
        var icon = document.createElement('i')
        icon.classList.add('bx', 'bx-chevron-right')

        var link  = document.createElement('a')
        link.classList.add('linkedto')
        link.href      = menu[i][1]
        link.innerHTML = menu[i][0]

        var item = document.createElement('li')
        item.appendChild(icon)
        item.appendChild(link)

        list.appendChild(item)
    }

    var links = document.createElement('div')
    links.classList.add('col-lg-2', 'col-md-6', 'footer-links')
    links.appendChild(list)

    var title       = document.createElement('h3')
    title.innerHTML = name

    var space = document.createElement('br')

    var contact       = document.createElement('p')
    contact.innerHTML = email
    contact.appendChild(space)

    var social_links = document.createElement('div')
    social_links.classList.add('social-links', 'mt-3')

    for (var j=0; j<social.length; j++) {
        var social_icon  = document.createElement('i')
        var class_name   = 'bxl-' + social[j][0]
        social_icon.classList.add('bx', class_name)

        var social_link  = document.createElement('a')
        social_link.classList.add(social[j][0])
        social_link.href = social[j][1]
        social_link.appendChild(social_icon)

        social_links.appendChild(social_link)
    }

    var footer_info = document.createElement('div')
    footer_info.classList.add('footer-info')
    footer_info.appendChild(title)
    footer_info.appendChild(contact)
    footer_info.appendChild(social_links)

    var info = document.createElement('div')
    info.classList.add('col-lg-4', 'col-md-6')
    info.setAttribute('style', 'margin:auto')
    info.appendChild(footer_info)

    var row = document.createElement('div')
    row.classList.add('row')
    row.appendChild(links)
    row.appendChild(info)

    var container = document.createElement('div')
    container.classList.add('container')
    container.appendChild(row)

    var footer_top = document.createElement('div')
    footer_top.classList.add('footer-top')
    footer_top.appendChild(container)

    var ark_link       = document.createElement('a')
    ark_link.href      = 'https://thearkgroup.github.io/'
    ark_link.innerHTML = 'ARK Group'

    var credits       = document.createElement('div')
    credits.classList.add('credits')
    credits.innerHTML = 'A '
    credits.appendChild(ark_link)
    credits.appendChild(document.createTextNode(' Website'))

    var span       = document.createElement('span')
    span.innerHTML = name

    var strong = document.createElement('strong')
    strong.appendChild(span)

    var copyright       = document.createElement('div')
    copyright.classList.add('copyright')
    copyright.innerHTML = '&copy; Copyright '
    copyright.appendChild(strong)
    copyright.appendChild(document.createTextNode('. All Rights Reserved'))

    var footer_bottom = document.createElement('div')
    footer_bottom.classList.add('container')
    footer_bottom.appendChild(copyright)
    footer_bottom.appendChild(credits)

    var footer = document.createElement('footer')
    footer.id  = 'footer'
    footer.appendChild(footer_top)
    footer.appendChild(footer_bottom)

    return footer
}

export { Footer }