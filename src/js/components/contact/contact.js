import React, {Component} from "react"
import { Navigate } from 'react-router-dom'
import configs from '../../../configs.json'
import ApiService from "../../services/api"
const apiservice = new ApiService()

class Contact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name      : "",
            email     : "",
            subject   : "",
            message   : "",
            colored   : this.props.colored,
            dark      : this.props.dark
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        const data = new FormData()

        data.append("username", this.state.username)
        data.append("password", this.state.password)
    }

    colorize() {
        if (this.state.colored && this.state.dark) {
            this.state.backgroundColor = configs.colors.primary
            this.state.text            = configs.colors.light
            this.state.color           = configs.colors.dark
        }
        if (!this.state.colored && !this.state.dark) {
            this.state.color           = configs.colors.primary
            this.state.text            = configs.colors.dark
            this.state.backgroundColor = configs.colors.light
        }
        if (!this.state.colored && this.state.dark) {
            this.state.color           = configs.colors.primary
            this.state.text            = configs.colors.light
            this.state.backgroundColor = configs.colors.dark
        }
        if (this.state.colored && !this.state.dark) {
            this.state.backgroundColor = configs.colors.primary
            this.state.text            = configs.colors.dark
            this.state.color           = configs.colors.light
        }
    }

    handleSubmit(event) {
        event.preventDefault()

        const data = {
            'email': this.state.email,
            'name':  this.state.name,
            'subject': this.state.subject,
            'message': this.state.message
        }

        apiservice.contact(data).then(() => {
            alert('Sua mensagem foi enviada com sucesso!')
        }).catch((error) => {
            console.log(error)
            alert('Algo deu errado.')
        })

    }

    render() {
        this.colorize()
        return(
            <div class="container center" style={{backgroundColor: this.state.backgroundColor }} id='contact'>
                <div className="card amber darken-2 center-align">
                    <div className="card-title">
                        <h3>Contato</h3>
                    </div>
                    <form method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                        <div className="card-content white-text">
                            <div className="center">
                                <div className="row">
                                    <div className="col s6">
                                        <input id="input_text" type="text" ref="name" placeholder="Nome" onChange={(e) => {this.setState({name: e.target.value})}}/>
                                    </div>
                                    <div className="col s6">
                                        <input id="input_text" type="text" ref="subject" placeholder="Assunto" onChange={(e) => {this.setState({subject: e.target.value})}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="center">
                                <div className="row">
                                    <div className="col s12">
                                        <input id="input_text" type="text" ref="email" placeholder="Email" onChange={(e) => {this.setState({email: e.target.value})}}/>
                                    </div>
                                </div>
                            </div>
                            <div className="center">
                                <div className="row">
                                    <div className="col s12">
                                        <input id="input_text" type="text" ref="message" placeholder="Mensagem" onChange={(e) => {this.setState({message: e.target.value})}}/>
                                    </div>
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
}

export default Contact