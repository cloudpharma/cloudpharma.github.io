import { CONFIGS } from "../config.js"

function Pricing() {
    var span       = document.createElement('span')
    span.innerHTML = 'Planos'

    var title       = document.createElement('h2')
    title.innerHTML = 'Planos'

    var description       = document.createElement('p')
    description.innerHTML = 'Escolha o plano que mais combina com voce'

    var section_title = document.createElement('div')
    section_title.classList.add('section-title')
    section_title.appendChild(span)
    section_title.appendChild(title)
    section_title.appendChild(description)

    var row = document.createElement('div')
    row.classList.add('row')

    for (var i=0; i<CONFIGS.PLANS.length; i++) {
        var plan_title       = document.createElement('h3')
        plan_title.innerHTML = CONFIGS.PLANS[i][0]

        var sup       = document.createElement('sup')
        sup.innerHTML = 'R$'

        var price_text = document.createTextNode(CONFIGS.PLANS[i][1])

        var price_span       = document.createElement('span')
        price_span.innerHTML = ' / mês'

        var price = document.createElement('h4')
        price.appendChild(sup)
        price.appendChild(price_text)
        price.appendChild(price_span)

        var list = document.createElement('ul')

        for (var j=0; j<CONFIGS.PLANS[i][2].length; j++) {
            var item = document.createElement('li')
            item.innerHTML = CONFIGS.PLANS[i][2][j]

            list.appendChild(item)
        }

        for (var k=0; k<CONFIGS.PLANS[i][3].length; k++) {
            var item = document.createElement('li')
            item.classList.add('na')
            item.innerHTML = CONFIGS.PLANS[i][3][k]

            list.appendChild(item)
        }

        var btn       = document.createElement('a')
        btn.classList.add('btn-buy')
        btn.innerHTML = 'Comprar'

        var btn_wrap = document.createElement('div')
        btn_wrap.classList.add('btn-wrap')
        btn_wrap.appendChild(btn)

        var box = document.createElement('div')
        box.classList.add('box')
        if (i==1) box.classList.add('featured')
        box.appendChild(plan_title)
        box.appendChild(price)
        box.appendChild(list)
        box.appendChild(btn_wrap)

        var col = document.createElement('div')
        col.classList.add('col-lg-4', 'col-md-6')
        if (i!=0) col.classList.add('mt-4')
        if (i==1) col.classList.add('mt-md-0')
        if (i==2) col.classList.add('mt-lg-0')
        col.setAttribute('data-aos', 'zoom-in')
        if (i!=1) col.setAttribute('data-aos-delay', '150')
        col.appendChild(box)

        row.appendChild(col)
    }

    var container = document.createElement('div')
    container.classList.add('container')
    container.appendChild(section_title)
    container.appendChild(row)

    var section = document.createElement('section')
    section.classList.add('pricing')
    section.id  = 'pricing' 
    section.appendChild(container)

    return section
}

export { Pricing }