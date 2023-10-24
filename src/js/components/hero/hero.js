import React, { Component } from 'react'
import background from '../../../static/imgs/hero.jpeg'
import configs from '../../../configs.json'

class Hero extends Component {
    render() {
        return (
            <div id="index-banner" style={{backgroundImage: `url(${background})`}}>
                <div className="section no-pad-bot">
                    <div className='hero-txt'>
                        <br/><br/>
                        <h1 className="header center text-lighten-2" style={{color:configs.colors.secondary}} > Parallax Template</h1>
                        <div className="row center">
                            <h5 className="header col s12 light white-text">A modern responsive front-end framework based on Material Design</h5>
                        </div>
                        <br/>
                        <div className="row center">
                            <div className='col s6 right-align'>
                                <a href="#aboutus" id="hero-btn" className="btn-large waves-effect waves-light amber darken-2">Sobre nos</a>
                            </div>
                            <div className='col s6  left-align'>
                                <a href="/login/" id="hero-btn" className="btn-large waves-effect waves-light amber darken-2">Entrar</a>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero