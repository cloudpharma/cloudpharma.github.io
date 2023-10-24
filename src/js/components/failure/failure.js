import React, {Component} from 'react'
import configs from "../../../configs.json"
import ApiService from "../../services/api"
import Loading from '../loading/loading'

const apiservice = new ApiService()

class Failure extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect : null
        }
    }
    getAuth() {
        const user  = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        const req = new FormData()
        req.append('user', user)
        req.append('token', token)

        apiservice.hasAuth(req).then((res) => {
            const auth = res.auth
            switch (auth) {
                case 'Visitor':
                    this.setState({ redirect : true })
                    break
                case 'User':
                    this.setState({ redirect : false })
                    break
                case 'Client':
                    this.setState({ redirect : false })
                    break
            }
        })
    }
    render() {
        if (this.state.redirect === false) {
            return(
                <div className='container' style={{backgroundColor: configs.colors.light}} id='failure'>
                    <div className='row section-row'>
                        <div className='col s12'>
                            <div className='card' style={{backgroundColor: configs.colors.offwhite}}>
                                <div className="card-title" style={{color: configs.colors.primary}}>
                                    <h4>Erro</h4>
                                </div>
                                <div className="card-content">
                                    Infelizmente algo deu errado. Revise suas informacoes de pagamento e tente novamente. Caso o problema persista no contate. Lembrando que a plataforma Stripe que maneja os pagamentos para sua maior seguranca.
                                </div>
                                <div className="card-action">
                                    <a href='/subscribe' className='btn' style={{backgroundColor: configs.colors.secondary}}> Voltar </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.redirect === true) {
            window.location.replace('http://localhost:3000')
        }
        if (this.state.redirect === null) {
            return (
                <Loading/>
            )
        }
    }
}

export default Failure