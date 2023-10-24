import React, { Component } from 'react'
import configs from '../../../configs.json'
import ApiService from "../../services/api"
import Loading from '../loading/loading'

const apiservice = new ApiService()

class Subscribe extends Component {
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
                    this.setState({ redirect : true })
                    break
            }
        })
    }

    componentDidMount() {
        this.getAuth()
    }

    render() {
        if (this.state.redirect === false) {
            return (
                <div className='container' id='subscription'>
                    <div className='row section-row'>
                        <h3 style={{color: configs.colors.primary}}>Increva-se</h3>
                        <h6 style={{color: configs.colors.dark}}>Escolha o plano que mais combina com voce</h6>
                        <br></br>
                        <div className='subscription'>
                            {configs.plans.map(p =>
                            <div className='starter-div col s4' >
                                <div className='card' style={{backgroundColor: configs.colors.offwhite}}>
                                    <div className="card-title" style={{color: configs.colors.primary}}>
                                        <h4>Plano {p.name}</h4>
                                    </div>
                                    <div className="card-content">
                                        <img style={{width: '10vh'}} className='month-img' src='https://img.freepik.com/free-vector/subscriber-concept-illustration_114360-3453.jpg?t=st=1654685116~exp=1654685716~hmac=b67fdd003003bc4f477b5184b2201a36a5a88ebefc2552ee7f4f723a2acef85f&w=740'></img>
                                    </div>
                                    <div className="card-action">
                                        <form action={`${configs.api.url}/subscription/`} method="POST">
                                            <input type="hidden" name="price_id" value={p.id} />
                                            <button className="btn-month btn" style={{backgroundColor: configs.colors.primary}}  type="submit" >R${p.price} / Mes</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            )}
                        </div>
                        <br>
                        </br>
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

export default Subscribe