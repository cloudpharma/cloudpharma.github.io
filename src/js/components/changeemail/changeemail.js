import React, {Component} from "react"
import Loading from '../loading/loading'
import ApiService from "../../services/api"

const apiservice = new ApiService()

class ChangeEmail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: null
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
    handleSubmit(event) {
        event.preventDefault()

        this.setState({redirect: null})

        const user  = localStorage.getItem('user')
        const token = localStorage.getItem('token')

        const data = {
            'user': user,
            'token': token,
            'email': this.state.email
        }

        apiservice.changeEmail(data).then(() => {
            this.setState({redirect: true})
        }).catch((error) => {
            alert('Algo deu errado.')
        })
    }
    componentDidMount() {
        this.getAuth()
    }
    render() {
        if (this.state.redirect == false) {
            return(
                <div class="container center" id='change-email'>
                    <div className="card amber darken-2 center-align">
                        <div className="card-title">
                            <h4>Mudar Email</h4>
                        </div>
                        <form method="POST" encType="multipart/form-data" onSubmit={this.handleSubmit}>
                            <div className="card-content white-text">
                                <div className="center">
                                    <div className="row">
                                        <label for="input_text">Novo Email</label>
                                        <input id="input_text" type="email" ref="email" placeholder="example@gmail.com" onChange={(e) => {this.setState({email: e.target.value})}} required/>
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

export default ChangeEmail