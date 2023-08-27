class ApiHandler{
    async getUrl(url) {
        const raw_data = await fetch(url)
        const response = await raw_data.json()

        return response
    } 
}

export { ApiHandler }