import React, { Component } from 'react'
import configs from '../../../configs.json'

class AboutUs extends Component {
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
            <div className='container' style={{backgroundColor: this.state.backgroundColor}} id='aboutus'>
                <div className='row section-row'>
                    <h3 style={{color: this.state.color}} >Sobre Nós</h3>
                    <h6 style={{color: this.state.text}} >Venha nos conhecer</h6>
                    <div className='col s8 left-align'>
                        <strong style={{color: this.state.color}}><h5>{ configs.aboutus.title }</h5></strong>
                        <p style={{color: this.state.text}} >{ configs.aboutus.intro }</p>
                        {configs.services.map( s  =>
                            <h6 className='valign-wrapper'>
                                <i class="material-icons" style={{color:this.state.color}}>{s.icon}</i><text className='service-item' style={{color: this.state.text}}>{ s.name }</text><br/>
                            </h6>
                        )}
                        <p style={{color: this.state.text}} >{ configs.aboutus.conclusion }</p>
                    </div>
                    <div className='col s4'>
                        <img className="responsive-img" style={{border: '3px solid' + this.state.color, padding: '20px'}} src={require("../../../static/imgs/logo512.png")}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutUs