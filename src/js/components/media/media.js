import React, { Component } from 'react'
import configs from '../../../configs.json'

class Media extends Component {
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
            <div className='container' style={{backgroundColor: this.state.backgroundColor}} id='media'>
                <div className='row section-row'>
                    <h3 style={{color: this.state.color}} >Mídia</h3>
                    <h6 style={{color: this.state.text}} >Veja algumas de nossas aparições na mídia</h6>
                    <br></br>
                    {configs.media.map(p => 
                    <div className='col s4'>
                        <div className='card-panel' style={{backgroundColor: configs.colors.offwhite}}>
                            <img style={{border:'4px solid'+configs.colors.primary}} src={require("../../../static/imgs/logo-sagres.png")} alt="" class="responsive-img service-img"/>
                            <h6>{p.title} </h6>
                            <a class="waves-effect waves-light btn" style={{backgroundColor: configs.colors.secondary}}>Visualizar</a>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Media