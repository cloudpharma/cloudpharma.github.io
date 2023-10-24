import React, {Component} from "react"
import Loading from '../loading/loading'
import ApiService from "../../services/api"

const apiservice = new ApiService()

class ChangePassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: null,
            pass_1: '',
            pass_2: ''
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
                    const data = {
                        'token': window.location.href.split('/')[4]
                    }
                    apiservice.validatePasswordToken(data).then(() => {
                        this.setState({redirect: false})
                    }).catch((error) => {
                        this.setState({redirect: true})
                    })
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
    handleSubmit(event) {
        event.preventDefault()

        this.setState({redirect: null})

        if (this.state.pass_1 === this.state.pass_2) {
            var user  = ''
            var token = ''

            if (window.location.href.split('/')[4] == '') {
                user  = localStorage.getItem('user')
                token = localStorage.getItem('token')
            } else {
                user  = ''
                token = window.location.href.split('/')[4]
            }

            const data = {
                'user': user,
                'token': token,
                'pass': this.state.pass_1
            }

            apiservice.changePassword(data).then(() => {
                this.setState({redirect: true})
            }).catch((error) => {
                console.log(error)
                alert('Algo deu errado.')
            })

        } else {
            this.setState({redirect: false})
            alert('As senhas tem de ser iguais')
        }
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
                            <h4>Mudar Senha</h4>
                        </div>
                        <form method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                            <div className="card-content white-text">
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Senha</label>
                                        <input id="input_text" type="password" ref="password" placeholder="********" onChange={(e) => {this.setState({pass_1: e.target.value})}} required/>
                                    </div>
                                </div>
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Confirmacao da nova senha</label>
                                        <input id="input_text" type="password" ref="passwordconfirm" placeholder="********" onChange={(e) => {this.setState({pass_2: e.target.value})}} required/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <button type='submit' className="btn waves-effect waves-light orange darken-3">Mudar<i className="material-icons right">send</i></button>
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

export default ChangePassword