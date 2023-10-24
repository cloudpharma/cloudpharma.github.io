import React, { Component } from "react"
import ApiService from "../../services/api"
import configs from "../../../configs.json"
import M from 'materialize-css';

const apiservice = new ApiService()

class NavBarItems extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 3,
            redirect: false 
        }
        this.handleLogout = this.handleLogout.bind(this)
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
                    this.setState({ type : 3 })
                    break
                case 'User':
                    this.setState({ type : 2 })
                    break
                case 'Client':
                    this.setState({ type : 1 })
                    break
            }
        }).catch((error) => {})
    }
    componentDidMount() {
        this.getAuth()
    }
    handleLogout(event) {
        event.preventDefault()

        const user  = localStorage.getItem('user')
        const token = localStorage.getItem('token')
        const data  = new FormData()

        data.append('user', user)
        data.append('token', token)

        apiservice.logout(data).then((r) => {
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            this.setState({redirect: true, type: 3})
            window.location.replace('http://localhost:3000')
        })
    }
    checkactivepath(path) {
        if (path == window.location.pathname) {
            return true
        } else {
            return false
        }
    }
    render() {
        const logout = 'Sair'
            if (this.state.type === 1) {
                return(
                    <div>
                        <div>
                        {configs.header.client.map((i, index) =>
                            <li key={i.name} className={(this.checkactivepath(i.link) && i.name != logout) ? "active" : ""}><a className="white-text dropdown-trigger" href={i.link} data-target={"dropdown-"+index} onClick={i.name == logout ? this.handleLogout : {}}>{i.name}</a></li>
                        )}
                    </div>
                    </div>
                )
            }
            if (this.state.type === 2) {
                return(
                    <div>
                        {configs.header.user.map((i, index) =>
                            <li key={i.name} className={(this.checkactivepath(i.link) && i.name != logout) ? "active" : ""}><a className="white-text dropdown-trigger" href={i.link} data-target={"dropdown-"+index} onClick={i.name == logout ? this.handleLogout : {}}>{i.name}</a></li>
                        )}
                    </div>
                )
            }
            if (this.state.type === 3) {
                return(
                    <div>
                        {configs.header.visitor.map((i, index) =>
                            <li key={i.name} className={this.checkactivepath(i.link) ? "active" : ""}><a className="white-text dropdown-trigger" href={i.link} data-target={"dropdown-"+index} >{i.name}</a></li>
                        )}
                    </div>
                )
            }
            if (this.state.type === 0) {
                return(null)
            }
    }
}

export default NavBarItems;