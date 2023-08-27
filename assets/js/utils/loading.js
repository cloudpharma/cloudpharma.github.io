class PreLoader {
    constructor(body){
        this.body    = body
        this.element = document.createElement('div')

        this.element.id  = 'preloader'
    }

    build(){
        this.body.appendChild(this.element)
    }

    remove(){
        this.element.remove()
    }
}

export { PreLoader }