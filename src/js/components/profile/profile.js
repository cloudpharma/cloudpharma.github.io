import React, { Component } from "react";
import ApiService from "../../services/api";
import configs from "../../../configs.json"
import Loading from '../loading/loading'
import { Navigate } from 'react-router-dom'

const apiservice = new ApiService()

class Profile extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            status: '',
            email: '',
            redirect : null,
            auth: null
        }
        this.handleDelete = this.handleDelete.bind(this)
    }
    getAuth(user, token) {
        const req = new FormData()
        req.append('user', user)
        req.append('token', token)

        apiservice.hasAuth(req).then((res) => {
            const auth = res.auth
            if (auth !== 'Visitor') {
                this.setState({auth: true})

                const data  = new FormData()

                data.append('user', user)
                data.append('token', token)

                apiservice.getUser(data).then((r) => {
                    this.setState({name: r.user, status: r.status, email: r.email})
                }).catch((e) => {
                    alert('Network Error!')
                })
            } else {
                this.setState({auth: false})
            }
            
        })
    }
    componentDidMount() {
        const user  = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        if (token !== null && user !== null) {
            this.getAuth(user, token)
        }
    }
    handleDelete(event) {
        const user  = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        const data = {
            'user': user,
            'token': token
        }

        apiservice.deleteUser(data).then(() => {
            this.setState({auth: false})
        }).catch((error) => {
            console.log(error)
            alert('Algo deu errado.')
        })

    }
    handleCancel(event) {
        const user  = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        const data = {
            'user': user,
            'token': token
        }

        apiservice.deleteSubscription(data).then(() => {
            this.setState({auth: false})
        }).catch((error) => {
            console.log(error)
            alert('Algo deu errado.')
        })
    }
    render() {
        if (this.state.auth === true) {
            return(
                <div className="container" style={{backgroundColor: configs.colors.light}} id='profile'>
                    <div className="card horizontal" style={{backgroundColor: configs.colors.offwhite}}>
                        <div className="card-stacked">
                            <div className="card-title" style={{color: configs.colors.primary}}>
                                <h3>Perfil</h3>
                                <p style={{color: configs.colors.dark, fontSize: '16px'}}>Informações vinculadas a sua conta</p>
                            </div>
                            <div className="card-content left-align">
                                <h6>Nome: {this.state.name}</h6>
                                <h6>Status da Inscrição: {this.state.status}</h6>
                                <h6>Email: {this.state.email}</h6>
                            </div>
                            <div className="card-action">
                                <div className="row" style={{margin: '0px'}}>
                                    <div className="col s6">
                                        <a href="/changeemail/" style={{margin: '0px'}}>Mudar<br/>Email</a>
                                    </div>
                                    <div className="col s6">
                                        <a href="/changepassword/" style={{margin: '0px'}}>Mudar<br/>Senha</a>
                                    </div>
                                </div>
                            </div>
                            <div className="card-action">
                                <div className="row" style={{margin: '0px'}}>
                                    <div className="col s6">
                                        <a onClick={this.handleCancel} href="#!" style={{margin: '0px'}}>Cancelar<br/>Incrição</a>
                                    </div>
                                    <div className="col s6">
                                        <a onClick={this.handleDelete} href="#!" style={{margin: '0px'}}>Deletar<br/>Contar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            if (this.state.auth === false) {
                return(
                    <Navigate to='/' />
                )
            } else {
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
}

export default Profile;