import React, {Component} from "react";
import ApiService from "../../services/api";
import { Navigate } from 'react-router-dom'
import Loading from '../loading/loading'
import configs from "../../../configs.json"

const apiservice = new ApiService()

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password1: "",
            password2: "",
            email    : "",
            redirect : null
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

    componentDidMount() {
        this.getAuth()
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.password1 === this.state.password2) {
            const data = new FormData()

            data.append("username", this.state.username)
            data.append("email"   , this.state.email)
            data.append("password1", this.state.password1)
            data.append("password2", this.state.password2)
            

            apiservice.signUp(data).then((r) => {
                localStorage.setItem('token', r.token)
                localStorage.setItem('user', this.state.username)
                window.location.replace(configs.url + '/subscribe')
            }).catch((e) => {
                alert('Algo deu errado. Tente novamente mais tarde. Se o problema persistir entre em contato.')
                console.log(e)
            })
        } else {
            alert("As senhas n estao iguais")
        }
    }

    render() {
        if (this.state.redirect === false) {
            return(
                <div className="container center" id='signup'>
                    <div className="card amber darken-2 center-align">
                        <div className="card-title">
                            <h4>Registrar</h4>
                        </div>
                        <form method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit} >
                            <div className="card-content white-text">
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Usuário</label>
                                        <input id="input_text" type="text" placeholder="User123" onChange={(e) => {this.setState({username: e.target.value})}} required/>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Email(opcional)</label>
                                        <input id="input_text" type="text" placeholder="exemplo@email.com" onChange={(e) => {this.setState({email: e.target.value})}} required />
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Senha</label>
                                        <input id="input_text" type="password" placeholder="********" onChange={(e) => {this.setState({password1: e.target.value})}} required/>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Confirmação da senha</label>
                                        <input id="input_text" type="password" placeholder="********" onChange={(e) => {this.setState({password2: e.target.value})}} required/>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="row">
                                        <label>
                                            <input type="checkbox" class="filled-in" required/>
                                            <span>Li e aceito os <a style={{color: configs.colors.secondary}}>Termos e Condições de Uso</a></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <button type='submit' className="btn waves-effect waves-light orange darken-3">
                                    Registrar<i className="material-icons right">send</i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }
        if (this.state.redirect === true) {
            window.location.replace(configs.url)
        }
        if (this.state.redirect === null) {
            return (
                <Loading/>
            )
        }
    }
}

export default Signup;
