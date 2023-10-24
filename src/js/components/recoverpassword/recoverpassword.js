import React, {Component} from "react"
import Loading from '../loading/loading'
import ApiService from "../../services/api"

const apiservice = new ApiService()

class RecoverPassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: null,
            email: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
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
                    this.setState({ redirect : false })
                    break
                case 'User':
                    this.setState({ redirect : true })
                    break
                case 'Client':
                    this.setState({ redirect : true })
                    break
            }
        })
    }
    handleSubmit(event) {
        event.preventDefault()

        this.setState({redirect: null})

        const data = {
            'email': this.state.email
        }

        apiservice.recoverPassword(data).then(() => {
            this.setState({redirect: true})
        }).catch((error) => {
            console.log(error)
            alert('Algo deu errado.')
        })
    }
    componentDidMount() {
        this.getAuth()
    }
    render() {
        if (this.state.redirect == false) {
            return(
                <div class="container center" id='change-password'>
                    <div className="card amber darken-2 center-align">
                        <div className="card-title">
                            <h4>Recuperar Senha</h4>
                        </div>
                        <form method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                            <div className="card-content white-text">
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Email</label>
                                        <input id="input_text" type="email" ref="email" placeholder="email@exemplo.com" onChange={(e) => {this.setState({email: e.target.value})}} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <button type='submit' className="btn waves-effect waves-light orange darken-3">Enviar<i className="material-icons right">send</i></button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        if (this.state.redirect == true) {
            window.location.replace('http://localhost:3000')
        } 
        if (this.state.redirect == null) {
            return (
                <div className="container">
                    <div className="row section-row">
                    <Loading/>
                    </div>
                </div>
            )
        }
    }
}

export default RecoverPassword