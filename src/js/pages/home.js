import React, { Component } from 'react'
import Hero from '../components/hero/hero'
import AboutUs from '../components/aboutus/aboutus'
import Plans from '../components/plans/plans'
import MVV from '../components/mvv/mvv'
import Team from '../components/team/team'
import Contact from '../components/contact/contact'
import CTA from '../components/cta/cta'
import ApiService from '../services/api'
import Loading from '../components/loading/loading'

const apiservice = new ApiService()

class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirect: null
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
                    //window.location.replace(process.env.REACT_APP_URL)
                    this.setState({ redirect : false })
                    break
                case 'User':
                    window.location.replace(process.env.REACT_APP_URL + '/subscribe')
                    //this.setState({ redirect : true })
                    break
                case 'Client':
                    window.location.replace(process.env.REACT_APP_URL + '/stock')
                    //this.setState({ redirect : true })
                    break
                default:
                    this.setState({ redirect : false })
            }
        }).catch((error) => {
            alert('Erro na conexão. Tente novamente mais tarde.')
            window.location.replace(process.env.REACT_APP_URL)
        })
    }

    componentDidMount() {
        this.getAuth()
    }

    render() {
        if (this.state.redirect === false) {
            return(
                <div>
                    <Hero/>
                    <AboutUs  colored={false}  dark={false}/>
                    <Plans    colored={true}   dark={false}/>
                    <Team     colored={false}  dark={false}/>
                    <MVV      colored={true}   dark={false}/>
                    <CTA/>
                    <Contact  colored={false}  dark={false}/>
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

export default HomePage
