import React, { Component } from 'react'
import { FaInstagram, FaMailBulk, FaLinkedinIn, FaTwitter} from "react-icons/fa"
import configs from '../../../configs.json'

class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colored   : this.props.colored,
            dark      : this.props.dark
        }
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
    render(){
        this.colorize()
        return (
            <div className='container' style={{backgroundColor: this.state.backgroundColor }} id='team'>
                <div className='row section-row'>
                    <h3 style={{color: this.state.color}}>Time</h3>
                    <h6 style={{color: this.state.text}}>Conheça nosso time</h6>
                    <br></br>
                    {configs.team.map(t =>
                        <div className='col s4'>
                            <div className='card-panel' style={{backgroundColor: configs.colors.offwhite}}>
                                <img style={{border:'4px solid'+configs.colors.primary}} src={require("../../../static/imgs/profile.jpeg")} alt="" class="circle responsive-img team-img"/>
                                <h5>{t.name}</h5>
                                <h6 style={{color:configs.colors.secondary}}>{t.job}</h6>
                                <p>{t.description}</p>
                                <FaInstagram  className='social-icon' style={{color:configs.colors.secondary}} />
                                <FaMailBulk   className='social-icon' style={{color:configs.colors.secondary}} />
                                <FaLinkedinIn className='social-icon' style={{color:configs.colors.secondary}} />
                                <FaTwitter    className='social-icon' style={{color:configs.colors.secondary}}/>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Team