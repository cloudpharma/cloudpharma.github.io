class ApiHandler{
    async getUrl(url) {
        try {
            const raw_data = await fetch(url)
            const response = await raw_data.json()

            return response
        } catch {
            console.log('Algo deu errado. Tente novamente mais tarde. Caso o problema persista, no contate.')
            return {}
        }
    } 
}

export { ApiHandler }