import React, {Component} from "react"
import ApiService from "../../services/api"
import Loading from '../loading/loading'
import { Eye, EyeSlash } from "react-bootstrap-icons"
import configs from "../../../configs.json"

const apiservice = new ApiService()

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username : "",
            password : "",
            redirect : null,
            show     : false
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
                default:
                    this.setState({ redirect : false })
            }
        })
    }

    componentDidMount() {
        this.getAuth()
        const eye = document.getElementById('eye')
        if (eye != null) {
            eye.addEventListener('click', (event) => {
                if (this.state.show) {
                    this.setState({ show : false })
                } else {
                    this.setState({ show : true })
                }
            })
        }
    }

    componentDidUpdate() {
        const eye = document.getElementById('eye')
        if (eye != null) {
            eye.addEventListener('click', (event) => {
                if (this.state.show) {
                    this.setState({ show : false })
                } else {
                    this.setState({ show : true })
                }
            })
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData()

        data.append("username", this.state.username)
        data.append("password", this.state.password)

        apiservice.login(data).then((r) => {
            localStorage.setItem('token', r.token)
            localStorage.setItem('user', this.state.username)
            this.setState({redirect: true})
        }).catch((e) => {
            if (e.response) {
                if (e.response.status === 401) {
                    alert("Usuario ou senha incorretos.")
                } else {
                    alert('Algo deu errado. Tente novamente mais tarde. Se o problema persistir entre em contato.')
                }
            } else {
                alert('Algo deu errado. Tente novamente mais tarde. Se o problema persistir entre em contato.')
            }
        })
    }

    render() {
        if (this.state.redirect === false) {
            return(
                <div class="container center" id='login'>
                    <div className="card amber darken-2 center-align">
                        <div className="card-title">
                            <h4>Login</h4>
                        </div>
                        <form method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                            <div className="card-content white-text">
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Usuário</label>
                                        <input id="input_text" type="text" ref="username" placeholder="User123" onChange={(e) => {this.setState({username: e.target.value})}} required/>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Senha</label>
                                        <input id="input_text" type={this.state.show ? "text" :"password"} ref="password" placeholder="********" onChange={(e) => {this.setState({password: e.target.value})}} required/>
                                        {this.state.show
                                        ? <Eye id="eye" color="black"/>
                                        : <EyeSlash id="eye" color="black"/>
                                        }
                                        <a href='/recoverpassword' style={{color: configs.colors.light}}>Esqueceu a senha?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <button type='submit' className="btn waves-effect waves-light orange darken-3">Entrar<i className="material-icons right">send</i></button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        } 
        if (this.state.redirect === true) {
            window.location.replace(process.env.REACT_APP_URL)
        }
        if (this.state.redirect === null) {
            return (
                <Loading/>
            )
        }
    }
}

export default Login;
