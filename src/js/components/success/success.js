import React, {Component} from 'react'
import configs from "../../../configs.json"
import Loading from '../loading/loading'
import ApiService from "../../services/api"
const apiservice = new ApiService()

// cs_test_a1f0uJyRXyObweugBU0EOdAYKj3D2uhXD6qfzMeAjrCWwEGRdYhb4Yze1D

class Success extends Component {
    constructor(props) {
        super(props)
        this.state = {
            confirm : null
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
                    this.setState({ confirm : false })
                    break
                case 'User':
                    this.setState({ confirm : null })
                    break
                case 'Client':
                    this.setState({ confirm : null })
                    break
            }
        })
    }
    componentDidMount() {
        this.getAuth()
        const data = {
            id     : window.location.href.split('/')[4],
            user   : localStorage.getItem('user'),
            token  : localStorage.getItem('token'),
        }
        apiservice.validatePayment(data).then((response) => {
            this.setState({confirm: true})
        }).catch((e) => {
            console.log(e)
            this.setState({confirm: false})
        })
    }
    render() {
        if (this.state.confirm == null) {
            <Loading/>
        }
        if (this.state.confirm == true) {
            return(
                <div className='container' style={{backgroundColor: configs.colors.light}} id='success'>
                    <div className='row section-row'>
                        <div className='col s12'>
                            <div className='card' style={{backgroundColor: configs.colors.offwhite}}>
                                <div className="card-title" style={{color: configs.colors.primary}}>
                                    <h4>Sucesso</h4>
                                </div>
                                <div className="card-content">
                                    Seu pagamento foi concluido com sucesso! A partir de agora voce ja pode aproveitar todas as vantagens do seu plano.
                                </div>
                                <div className="card-action">
                                    <a href='/profile' className='btn' style={{backgroundColor: configs.colors.secondary}}> Aproveitar Ja !</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.confirm == false) {
            window.location.replace('http://localhost:3000/failure')
        }
    }
}

export default Success